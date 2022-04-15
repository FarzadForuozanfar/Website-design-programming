var bpm_output = document.getElementById("bpm-value");
var play_status = "puase";
var play = document.getElementById("play-btn");
bpm_value = document.getElementById("metronome-bar").value;
var time ;
var beep = new Audio("beep.wav");

function play_btn()
{
    if(play_status == "puase")
    {
        play_status = "play";
        bpm_value = document.getElementById("metronome-bar").value;
        alert(bpm_value);
        time = setInterval(sound,60000 / bpm_value);
        play.innerHTML = "&#x23F8";
        
    }
    else
    {
        play_status = "puase";
        clearInterval(time);
        play.innerHTML = "&#x23F5";
        beep.pause();
        
    }
}
function sound()
{

        bpm_value = document.getElementById("metronome-bar").value;
        beep.play();

}
function change_value()
{
    bpm_value = document.getElementById("metronome-bar").value;
    bpm_output.innerHTML = bpm_value;
    if(play_status == "puase")
    {
        clearInterval(time);
        play_btn();
    }
}
function Plus(){
    bpm_value = document.getElementById("metronome-bar");
    bpm_value.stepUp();
    bpm_output.innerHTML = bpm_value.value;
}
function Mines(){
    
    bpm_value = document.getElementById("metronome-bar");
    bpm_value.stepDown();
    bpm_output.innerHTML = bpm_value.value;
}
