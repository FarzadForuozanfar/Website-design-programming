
var left_hand = document.getElementById("left-hand");
var right_hand = document.getElementById("right-hand");
var body_bot = document.getElementById("body");
var head = document.getElementById("head");
var left_eye = document.getElementById("left-eye");
var right_eye = document.getElementById("right-eye");

left_hand.onclick = function() 
{
    left_hand.style.transform = "rotate(180deg)";
    left_hand.style.transition = "3s";

    setTimeout(function () 
    {
        left_hand.style.transform = "rotate(0deg)";
        left_hand.style.transition = "3s";
    },1500)
            }
    right_hand.onclick = function() 
    {
        right_hand.style.transform = "rotate(-130deg)";
        right_hand.style.transition = "2s";

        setTimeout(function ()
         {
            right_hand.style.transform = "rotate(0deg)";
            right_hand.style.transition = "2s";
        }, 2000)
    }
    body_bot.onclick = function() 
    {
        left_eye.style.height = "5px";
        right_eye.style.height = "5px";
        left_eye.style.borderRadius = "15px"; 
        right_eye.style.borderRadius = "15px"; 
                
        right_eye.style.transition = "1.5s"
        left_eye.style.transition = "1.5s"
        
    }
    head.onclick = function() 
    {
        left_eye.style.width = "12.5px";
        left_eye.style.height = "12.5px";
        right_eye.style.width = "12.5px";
        right_eye.style.height = "12.5px";
        left_eye.style.borderRadius = "100%"; 
        right_eye.style.borderRadius = "100%"; 
        right_eye.style.transition = "1.5s"
        left_eye.style.transition = "1.5s"
        
    }
