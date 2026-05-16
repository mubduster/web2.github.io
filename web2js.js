function hideTips(){
    document.getElementById("btn").style.display = "block";
    document.getElementById("tips").style.display = "none";
    document.getElementsByClassName("howto")[0].style.height = "170px";
}

function showTips(){
    document.getElementById("tips").style.display = "block";
    document.getElementsByClassName("howto")[0].style.height = "240px";
    setTimeout(() => {
        document.getElementById("btn").style.opacity = "0%";
        document.getElementById("btn").style.display = "none";
    }, 900);
}
let count = 0;
document.querySelector(".recommendations").addEventListener("mouseover", (event) => {
    if (count == 0){
    document.getElementById("cute_dog").animate(
        [
            {left: "100%" , transform: "rotateZ(0deg)" , opacity: "0%"},
            {left: "30%" , transform: "rotateZ(-360deg)" , opacity: "100%"}
        ],
        {
            duration: 2000,
            easing: "linear",
            fill: "forwards",
            delay: 300
        }
    );
    count++;
}
});