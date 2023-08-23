let AddBtn = document.querySelector("#AddBtn");
let SaveBtn = document.querySelector("#SaveBtn");
let p = document.querySelector("#text");
let SavedValue = document.querySelector("#Save-Value");
let ResetBtn = document.querySelector("#Reset-Btn")

AddBtn.addEventListener("click", function () {
    p.innerHTML = +p.innerHTML + 1;
    SaveBtn.classList.remove("btn-disabled");
})

SaveBtn.addEventListener("click", () => {
    if (p.innerHTML == 0) {
        SaveBtn.classList.add("btn-disabled");
    }
    else {
        if (SavedValue.innerHTML == 0) {
            SavedValue.innerHTML = p.innerHTML;
        }

        else {
            SavedValue.innerHTML = SavedValue.innerHTML + ', ' + p.innerHTML;
        }
        p.innerHTML = 0;
    }
})
ResetBtn.addEventListener("click",function(){
    p.innerHTML = 0;
    SavedValue.innerHTML = 0;
})