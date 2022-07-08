for (var i = 0; i < document.querySelectorAll("button").length; i++){
    document.querySelectorAll("button")[i].addEventListener("click", handleClick);
}
const buttonClasses = ["resume-btn", "btn-login", "btn-register"];

function handleClick(el){
    var btn = el.className;
    if (btn === buttonClasses[0]){
        

    }
}

let year = new Date().getFullYear();

document.querySelector("#footer .box .year").innerHTML = "Copyright" + " " + year;
