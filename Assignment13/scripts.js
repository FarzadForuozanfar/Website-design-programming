var cells = document.getElementsByClassName("cell");
var buttons = [ [cells[0],cells[1],cells[2]],
                [cells[3],cells[4],cells[5]],
                [cells[6],cells[7],cells[8]]];

var ply = "X";
var flags = [[null, null, null],
             [null, null, null],    
             [null, null, null]];

var choose = true;

var mode1 = document.getElementById("one-player");
var mode2 = document.getElementById("two-player");

var playing_mode;

var tiles = 0;

var scoresX = document.getElementById("Xscore");
var scoresO = document.getElementById("Oscore");
var draws = document.getElementById("draw");


let scoresX_cnt = {
    value: 0
};
let scoresO_cnt = {
    value: 0
};
let draw_cnt = {
    value: 0
};
function change_mode(player)
{
    if(player == 1)
    {
        playing_mode = "one-player";
        console.log(playing_mode)
        mode2.disabled = true;
    }
    else if(player == 2)
    {
        playing_mode = "two-player";
        console.log(playing_mode)
        mode1.disabled = true;
    }
             
}
function playing(x, y)
{
    if (flags[x][y] == null)
    {
        
        if(playing_mode == "one-player")
        {
                if (ply == "X")
            {
                flags[x][y] = "X";
                buttons[x][y].innerHTML = "X";
                buttons[x][y].classList.add("X");
                ply = "O";
                tiles++;
                
                winner = check_play()
                if (winner == "player X")
                    Game_over("Winner is Player X", scoresX_cnt, scoresX)
                else if (tiles == 9)
                    Game_over("Match Was Draw", draw_cnt, draws)
                
                    
            }
                bot()
                choose = true;
                tiles++;
                winner = check_play()
                if (winner == "player O")
                    Game_over("Winner is CPU", scoresO_cnt, scoresO)
        }
            
        else if(playing_mode == "two-player")
        {
            if (ply == "X")
            {
                flags[x][y] = "X";
                buttons[x][y].innerHTML = "X";
                buttons[x][y].classList.add("X");
                ply = "O";
                tiles++;
                winner = check_play()
                if (winner == "player X")
                    Game_over("Winner is Player X", scoresX_cnt, scoresX)
                else if (tiles == 9)
                    Game_over("Match Was Draw", draw_cnt, draws)
                
                
            }
            else if (ply == "O")
            {
                flags[x][y] = "O";
                buttons[x][y].innerHTML = "O";
                buttons[x][y].classList.add("O");
                ply = "X";
                tiles++;
                winner = check_play()

                if (winner == "player O")
                    Game_over("Winner is Player O", scoresO_cnt, scoresO)
            }
        }
    }

}
function bot()
{
    
    
    while(tiles < 9 && choose)
    {
        i = getRndInteger(0,3);
        j = getRndInteger(0,3);
        console.log(i, j)
        if(flags[i][j] == null )
            {
                flags[i][j] = "O";
                buttons[i][j].innerHTML = "O";
                buttons[i][j].classList.add("O");
                ply = "X";
                choose = false;
                break
            }
    
    }
}
function Game_over(winner, cnt, score)
{
    for(var i = 0 ; i < 3 ; i++)
    {
        for(var j = 0 ; j < 3 ; j++)
        {
            buttons[i][j].disabled = true;
        }
    }
    choose = false;
    document.getElementById("winner").innerHTML = winner;
    cnt.value++;
    score.innerHTML = cnt.value;
}
function getRndInteger(min, max) 
{
    return Math.floor(Math.random() * (max - min)) + min;
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

function Reset_game()
{
    mode1.disabled = false;
    mode2.disabled = false;
    mode1.checked = false;
    mode2.checked = false;
    document.getElementById("winner").innerHTML = "";
    tiles = 0;
    if(ply != "X")
        ply = "X"
    playing_mode = null;
    for(var i = 0 ; i < 3 ; i++)
    {
        for(var j = 0 ; j < 3 ; j++)
        {
            buttons[i][j].disabled = false;
        }
    }
    for(var i = 0 ; i < 3 ; i++)
    {
        for(var j = 0 ; j < 3 ; j++)
        {
            buttons[i][j].innerHTML="";
            flags[i][j]=null;
            buttons[i][j].classList.remove("X");
            buttons[i][j].classList.remove("O");

        }
    }

}
