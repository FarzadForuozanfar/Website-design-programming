<!DOCTYPE html>
<?php

ini_set('display_errors',0);

if( isset( $_REQUEST['calculate'] ))

{

$operator=$_REQUEST['operator'];

if($operator=="+")

{

$add1 = $_REQUEST['fvalue'];

$add2 = $_REQUEST['lvalue'];

$res= $add1+$add2;

}

if($operator=="-")

{

$add1 = $_REQUEST['fvalue'];

$add2 = $_REQUEST['lvalue'];

$res= $add1-$add2;

}

if($operator=="*")

{

$add1 = $_REQUEST['fvalue'];

$add2 = $_REQUEST['lvalue'];

$res =$add1*$add2;

}

if($operator=="/")

{

$add1 = $_REQUEST['fvalue'];

$add2 = $_REQUEST['lvalue'];

$res= $add1/$add2;

}

if($_REQUEST['fvalue']==NULL && $_REQUEST['lvalue']==NULL)

{

echo "<script language=javascript> alert(\"Please Enter values.\");</script>";

}

else if($_REQUEST['fvalue']==NULL)

{

echo "<script language=javascript> alert(\"Please Enter First value.\");</script>";

}

else if($_REQUEST['lvalue']==NULL)

{

echo "<script language=javascript> alert(\"Please Enter second value.\");</script>";

}

}

?>


<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Document</title>
</head>
<body>
<form>

<table id="table">

            <tr>

                <td id="td">Enter First Number</td>

                <td colspan="1">

               

                    <input name="fvalue"  type="text" style="color:red"/></td>

            <tr>

                <td style="color:blue; font-size:x-large; font-family:'Times New Roman'">Select Operator</td>

                <td >

                    <select name="operator" style="font-size:xx-large; width: 63px">

<option>+</option>

<option>-</option>

<option>*</option>

<option>/</option>

</select></td>

               </tr>

            <tr>

                <td style="background-color:aqua; color:red; font-size:xx-large; font-family:'Times New Roman'">Enter First Number</td>

                <td class="auto-style5">

                    <input name="lvalue" type="text"  style="color:red"/></td>

               

            </tr>

            <tr>

                <td></td>

                <td><input type="submit" name="calculate" value="Calculate" style="color:wheat;background-color:brown; font-size:x-large;" /></td>

               

            </tr>

            <tr>

                <td style="background-color:aqua;color:red; font-size:xx-large;">Output = </td>

                <td style="color:darkblue; font-size:xx-large;"><?php echo $res;?></td>

               

            </tr>

       </table>

 </form>
</body>
</html>