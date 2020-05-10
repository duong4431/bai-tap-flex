var menuTop = document.getElementById("menu-top");
var menuBtn = document.getElementById("menu-mobile");

console.log(menuBtn);
menuBtn.addEventListener("click", () => {
    if(menuTop.classList.contains('hide'))
    {
        menuTop.classList.remove('hide');
        menuTop.classList.add('show');
    }
    else{
        menuTop.classList.remove('show');
        menuTop.classList.add('hide');
    }    
})