document.getElementById("growBtn").addEventListener("click", function(){

    document.getElementById("box").style.height = "250px";
    document.getElementById("box").style.width = "250px";
    document.getElementById("box").style.backgroundImage = "url('null')";
});

document.getElementById("blueBtn").addEventListener("click", function(){

    document.getElementById("box").style.backgroundColor = "blue";
    document.getElementById("box").style.backgroundImage = "url('null')";
    document.getElementById("box").style.opacity = "1";
    document.getElementById("box").style.transition = "opacity 0s";
    document.getElementById("box").style.transitionDelay = "0s";
});

document.getElementById("fadeBtn").addEventListener("click", function(){

    document.getElementById("box").style.opacity = "0";
    document.getElementById("box").style.transition = "opacity 1s ease";
    document.getElementById("box").style.transitionDelay = ".25s";
    
});

document.getElementById("wumboBtn").addEventListener("click", function(){

    document.getElementById("box").style.height = "532px";
    document.getElementById("box").style.width = "990px";
    document.getElementById("box").style.transition = "height 1s ease";
    document.getElementById("box").style.transition = "width 1s ease";
    document.getElementById("box").style.transitionDelay = ".25s";
    document.getElementById("box").style.backgroundImage = "url('https://i.kym-cdn.com/entries/icons/original/000/006/404/Screen_Shot_2021-05-03_at_2.04.34_PM.png')";
    document.getElementById("box").style.opacity = "1";
    
});

document.getElementById("resetBtn").addEventListener("click", function(){

    document.getElementById("box").style.height = "150px";
    document.getElementById("box").style.width = "150px";
    document.getElementById("box").style.backgroundColor = "orange";
    document.getElementById("box").style.backgroundImage = "url('null')";
    document.getElementById("box").style.opacity = "1";
    document.getElementById("box").style.transition = "opacity 0s";
    document.getElementById("box").style.transitionDelay = "0s";
});
