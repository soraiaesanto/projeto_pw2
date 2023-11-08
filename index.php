<!DOCTYPE html>
<html lang="pt-en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CLAY</title>
    <link rel="shortcut icon" href="assets/favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="styles/main.css">

    <link href="https://soraiaesanto.github.io/projeto_pw2/styles/main.css" rel="stylesheet">
    <script src="https://soraiaesanto.github.io/projeto_pw2/scripts/app.js"></script>
</head>

<body>
    <?php
    include('./menu.html');

    $page = isset($_GET['page']) ? $_GET['page'] : "index"; // get the page
    switch ($page) {
        case "index":
            include('./header.html');
            include('./s-presentation.html');
            include('./s-opinions.html');
            include('./s-download.html');
            break;
        case "news":
            include('./news.html');
            break;
            case "contacts":
            include('./contacts.html');
            break;
        case "faqs":
            include('./faqs.html');
            break;
        default:
            include('./404.html'); //if dont exist
    }

    include('./footer2.html');
    ?>

</body>
<script src="scripts/app.js"></script>
</html>
