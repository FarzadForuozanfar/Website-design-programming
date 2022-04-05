var sum = document.getElementById("btn_sum");
var equal = document.getElementById("btn_eqaul");
var display = document.getElementById("display");
var mines = document.getElementById("btn_mines");
var cls = document.getElementById("btn_clear");
var symmetry = document.getElementById("btn_symmetry");
var mod = document.getElementById("btn_mod");
var division = document.getElementById("btn_division");
var btn_one = document.getElementById("btn_one");
var btn_two = document.getElementById("btn_two");
var btn_three = document.getElementById("btn_three");
var btn_four = document.getElementById("btn_four");
var btn_five = document.getElementById("btn_five");
var btn_six = document.getElementById("btn_six");
var btn_seven = document.getElementById("btn_seven");
var btn_eight = document.getElementById("btn_eight");
var btn_nine = document.getElementById("btn_nine");
var btn_zero = document.getElementById("btn_zero");
var btn_multi = document.getElementById("btn_multi");
var decimal = document.getElementById("btn_decimal");

var num1 = 0, num2, result = 0, temp;

var current_op = ""; //save last operator
var first_number = true;

sum.onclick = function()
{
    try
    {
        current_op = "+";
        result += parseFloat(display.value);
        display.value = "";
        window.alert(result);
    }
    catch(err) 
    {
        document.getElementById("demo").innerHTML = err.message;
    }
    
}
mines.onclick = function()
{
    try
    {
        current_op = "-";
        if (first_number)
        {
            result = parseInt(display.value);
            first_number = false;
        }
        else
        {
            result -= parseInt(display.value);
            
            
        }
        window.alert(result);
        display.value = "";
    }
    catch(err) 
    {
        window.alert("ERROR");
    }

}

btn_multi.onclick = function()
{
    try
    {
        current_op = "*";
        if (first_number)
        {
            result = parseInt(display.value);
            first_number = false;
        }
        else
        {
            result *= parseInt(display.value);
            
            
        }
        window.alert(result);
        display.value = "";
    }
    catch(err) 
    {
        window.alert("ERROR");
    }

}

division.onclick = function()
{
    try
    {
        current_op = "/";
        if (first_number)
        {
            result = parseInt(display.value);
            first_number = false;
        }
        else
        {
            result /= parseInt(display.value);
            
            
        }
        window.alert(result);
        display.value = "";
    }
    catch(err) 
    {
        window.alert("ERROR");
    }

}


equal.onclick = function()
{
    if (current_op == "+")
    { 
        if(display.value != "")
            temp = parseInt(display.value);
        else
        {
            temp = 0;
        }
        result += temp;
        display.value = result;
        result = 0;
    }

    else if (current_op == "-")
    {
        if(display.value != "")
            temp = parseInt(display.value);
        else
        {
            temp = 0;
        }
        result -= temp;
        display.value = result;
        result = 0;
        first_number = true;
    }

    else if (current_op == "*")
    {
        if(display.value != "")
            temp = parseInt(display.value);
        else
        {
            temp = 0;
        }
        result *= temp;
        display.value = result;
        result = 0;
        first_number = true;
    }
    else if (current_op == "/")
    {
        if(display.value != "")
            temp = parseInt(display.value);
        else
        {
            temp = 0;
        }
        result /= temp;
        display.value = result;
        result = 0;
        first_number = true;
    }
}

btn_one.onclick = function()
{
    if(display.value == String(0))
        display.value = "";
    display.value += String(1);
}
btn_two.onclick = function()
{
    if(display.value == String(0))
        display.value = "";
    display.value += String(2);
}
btn_three.onclick = function()
{
    if(display.value == String(0))
        display.value = "";
    display.value += String(3);
}
btn_four.onclick = function()
{
    if(display.value == String(0))
        display.value = "";
    display.value += String(4);
}
btn_five.onclick = function()
{
    if(display.value == String(0))
        display.value = "";
    display.value += String(5);
}
btn_six.onclick = function()
{
    if(display.value == String(0))
        display.value = "";
    display.value += String(6);
}
btn_seven.onclick = function()
{
    if(display.value == String(0))
        display.value = "";
    display.value += String(7);
}
btn_eight.onclick = function()
{
    if(display.value == String(0))
        display.value = "";
    display.value += String(8);
}
btn_nine.onclick = function()
{
    if(display.value == String(0))
        display.value = "";
    display.value += String(9);
}
btn_zero.onclick = function()
{
    if (display.value != "0")
        display.value += String(0);
}
cls.onclick = function()
{
    display.value = "";
    temp = 0;
    result = 0;
}
decimal.onclick = function()
{
    display.value += ".";
}
symmetry.onclick = function()
{
    result = parseFloat( display.value);
    result *= -1;
    display.value = result;
    result = 0;
}
mod.onclick = function()
{
    result = parseFloat( display.value);
    result /= 100;
    display.value = result;
    result = 0;
}
