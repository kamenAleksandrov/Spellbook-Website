// ref to DOM elements
const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const book = document.querySelector("#book");

const paper1 = document.querySelector("#p1");
const paper2 = document.querySelector("#p2");
const paper3 = document.querySelector("#p3");

// event listener

prevBtn.addEventListener("click", goPrev);
nextBtn.addEventListener("click", goNext);
addEventListener("keyup", (event)=> {
    if (event.key === 'ArrowLeft') {                             
        goPrev()
    }else if (event.key === 'ArrowRight') {                                        
        goNext()
    }
  });

// logic
let currentLocation = 1;
let numOfPapers = 3;
let maxLocation = numOfPapers + 1;

function openBook() {
book.style.transform = "translateX(50%)";
prevBtn.style.transform = "translateX(-250px)";
nextBtn.style.transform = "translateX(250px)";
}

function closeBook(isAtBeginnig) {
    if(isAtBeginnig){
        book.style.transform = "translateX(0%)";
    } else {
    book.style.transform = "translateX(100%)";
    }
    prevBtn.style.transform = "translateX(0px)";
    nextBtn.style.transform = "translateX(0px)";
}

function goNext() {

    if(currentLocation < maxLocation) {
        switch(currentLocation) {
            case 1:
                openBook();
                paper1.classList.add("flipped");
                paper1.style.zIndex = 1;
                break;
                case 2:
                    paper2.classList.add("flipped");
                    paper2.style.zIndex = 2;
                    break;
                    case 3:
                        paper3.classList.add("flipped");
                        paper3.style.zIndex = 3;
                        closeBook();
                        break;
                        default:
                            throw new Error("unknown state");
        }
        currentLocation++;
    }
}

function goPrev() {
    if(currentLocation > 1) {
        switch(currentLocation) {
            case 2:
                closeBook(true);
                paper1.classList.remove("flipped");
                paper1.style.zIndex = 3;
                break;
                case 3:
                    paper2.classList.remove("flipped");
                    paper2.style.zIndex = 2;
                    break;
                    case 4:
                        openBook();
                        paper3.classList.remove("flipped");
                        paper3.style.zIndex = 1;
                        break;
                        default:
                            throw new Error("unknown state");
        }
        currentLocation--;
    }

}