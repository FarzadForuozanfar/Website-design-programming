var cells = document.getElementsByClassName("cell");
var buttons = [ [cells[0],cells[1],cells[2]],
                [cells[3],cells[4],cells[5]],
                [cells[6],cells[7],cells[8]]];


var ply = "X";
var flags = [[null, null, null],
             [null, null, null],    
             [null, null, null]];

var mode = document.getElementsByName("play-mode")
//console.log(mode)
console.log(mode[0].checked,mode[1].checked)
function playing(x, y)
{
    if (flags[x][y] == null)
    {
        if (ply == "X")
        {
            flags[x][y] = "X";
            buttons[x][y].innerHTML = "X";
            buttons[x][y].classList.add("X");
            ply = "O";
        }
    
        else if(ply == "O")
        {
            flags[x][y] = "O";
            buttons[x][y].innerHTML = "O";
            buttons[x][y].classList.add("O");
            ply = "X";
        }
    }

}

function check_play_mode()
{
    /*if (mode[0].checked == true)
    {
        console.log("yes berar", mode[1].checked)
    }
    
    else
        console.log("no berar" , mode[0].checked)*/
    
}
function check_play()
{
    
    for (var i = 0; i < 3; i++)
    {
        digitX = 0;
        digitO = 0;
        for (var j = 0; j < 3; j++)
        {
            if(flags[i][j] == "X")
            {
                digitX ++;
            }
            else if (flags[i][j] == "O")
            {
                digitO ++;
            }
        }
        if (digitX == 3)
        {
            return "player X";
        }
        else if (digitO == 3)
        {
            return "player O";
        }
    }   
        for (var i = 0; i < 3; i++)
        {
            digitX = 0;
            digitO = 0;
            for (var j = 0; j < 3; j++)
            {
                if(flags[j][i] == "X")
                {
                    digitX ++;
                }
                else if (flags[j][i] == "O")
                {
                    digitO ++;
                }
            }
            if (digitX == 3)
            {
                return "player X";
            }
            else if (digitO == 3)
            {
                return "player O";
            }

        }
        if (flags[0][0] == 'X' && flags[1][1] == 'X' && flags[2][2] == 'X' || flags[0][2] == 'X' && flags[1][1] == 'X' && flags[2][0] == 'X')
            return "player X";
        if (flags[0][0] == 'O' && flags[1][1] == 'O' && flags[2][2] == 'O' || flags[0][2] == 'O' && flags[1][1] == 'O' && flags[2][0] == 'O')
            return "player O";
}