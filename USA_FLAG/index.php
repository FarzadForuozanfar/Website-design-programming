<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="USA Flag">
    <meta name="keywords" content="html, css, js, bootstrap, flag, usa flag, php">
    <meta name="author" content="farzad foroozanfar">
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css">
    <link rel="stylesheet" href="styles.css">
    <title>USA</title>
</head>
<body>
    <div class = "container mt-5 p-0 border border-dark" id="container-main">
        <?php for($i = 0; $i < 6; $i++):?>
            
            <div class="white-div"></div>
            <div class="red-div"></div>
        <?php endfor; ?>

        <div class="blue-div">
            <?php for($j = 0; $j < 100; $j++): ?>
                <span class="bi bi-star-fill star" 
                style="top: <?php print(rand(1, 85));?>%;
                    left:<?php print(rand(1, 95));?>%;"></span>
            <?php endfor?>
        </div>
    </div>
</body>
</html>