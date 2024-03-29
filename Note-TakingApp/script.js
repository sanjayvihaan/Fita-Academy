//Adding all the details/cards in a variable.

const addBox = document.querySelector(".add-box");
const popupBox = document.querySelector(".popup-box");
const popupTitle = popupBox.querySelector("header p");
const closeIcon = popupBox.querySelector("header i");
const titleTag = popupBox.querySelector("input");
const descTag = popupBox.querySelector("textarea");
const addBtn = popupBox.querySelector("button");

// Dates:

const months = ["January", "February", "March", "April", "May", "June", "July",
"August", "September", "October", "November", "December"];

//Local Storage:
const notes = JSON.parse(localStorage.getItem("notes")|| "[]");
let isUpdate = false;
let updateId;



//Click on box to view the popup form

addBox.addEventListener("click", function(){
    popupTitle.innerText = "Add a new Note";
    addBtn.innerText = "Add Note";
    popupBox.classList.add('show');
    document.querySelector("body").style.overflow = "hidden"
    if(window.innerWidth > 660) titleTag.focus();
})

//close function

closeIcon.addEventListener("click", () => {
    titleTag.value = descTag.value = ""
    popupBox.classList.remove('show');
    document.querySelector("body").style.overflow = "auto";
})

// Getting the card

addBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let title = titleTag.value.trim();
    let description = descTag.value.trim();
    console.log(title, description);

    if(title || description) {
        let currentDate = new Date(),
        month = months[currentDate.getMonth()],
        day = currentDate.getDate(),
        year = currentDate.getFullYear(),
        timeString = currentDate.toLocaleTimeString();
        

        let noteInfo = {title, description, date: `${month} ${day} ${year} ${timeString}`}
        if(!isUpdate) {
            notes.push(noteInfo);
        }else {
            isUpdate = false;
            notes[updateId] = noteInfo;
        }

        localStorage.setItem("notes", JSON.stringify(notes));
        closeIcon.click();
    }
})