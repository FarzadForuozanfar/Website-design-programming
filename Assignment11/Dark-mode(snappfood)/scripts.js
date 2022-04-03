var dark = document.getElementById("dark");
var body_p = document.getElementById("body");
var row_div = document.getElementsByClassName("row");
var signup = document.getElementById("signup");
var sefaresh = document.getElementById("sefaresh");
var row1_div = document.getElementsByClassName("row-1") 
var footer = document.getElementById("footer");
dark.onclick = function()
{
    body_p.style.backgroundColor = "black";
    body_p.style.color="white";
    //document.getElementById('dark').value='text to be displayed' ;
    row_div[0].style.backgroundColor="rgb(70, 68, 68)";
    signup.style.color = "white";
    sefaresh.style.color = "white"
    row1_div[0].style.backgroundColor = "rgb(70, 68, 68)";
    footer.style.backgroundColor = "rgb(70, 68, 68)";
    row1_div[1].style.backgroundColor = "rgb(70, 68, 68)";
    row1_div[2].style.backgroundColor = "rgb(70, 68, 68)";
    row1_div[3].style.backgroundColor = "rgb(70, 68, 68)";

}