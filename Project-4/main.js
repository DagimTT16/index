/*  Popups  */


let popup = document.getElementById("popup");

function openPopup(){
    popup.classList.add("open-popup");
}
function closePopup(){
    popup.classList.remove("open-popup");
}

let ppopup = document.getElementById("popup-stg")

function openPopupstg(){
    ppopup.classList.add("open-popup-stg");
}
function closePopupstg(){
    ppopup.classList.remove("open-popup-stg");
}



/*  Change-COLOR  */



var icon = document.getElementById("icon")

    icon.onclick=function(){
        document.body.classList.toggle("green-theme");
    }
