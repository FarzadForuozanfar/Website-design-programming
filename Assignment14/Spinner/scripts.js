
let spinner_wheel = document.getElementById("spinner-wheel");
let number = Math.ceil(Math.random() * 1000);
var arrow = document.getElementById("arrow");
var cnt ;
var score = 0;
function spining()
{
    cnt = 0;
    cnt ++;
    spinner_wheel.style.transform = "rotate("+number+"deg)";
    number += Math.ceil(Math.random() * 1000);
    setTimeout(function spining() 
    {
        arrow.style.color = "red";
        arrow.style.transform = "scale(1.3,1.3)";
        
    },cnt * 5050)

    arrow.style.color = "black";
    arrow.style.transform = "scale(1,1)";
}

/*setTimeout(function () 
{
    window.alert(score);
    
},7000)*/
