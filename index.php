<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CLAY</title>
    <link rel="shortcut icon" href="assets/favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="styles/main.css">
</head>

<body>
    <?php
        $page = isset($_GET['page']) ? $_GET['page']: "index";
        include('./menu.html');
        switch($page){
            case "index":
                include('./header.html');
                include('./s-presentation.html');
                include('./s-opinions.html');
                include('./s-download.html');
                break;
            case "contacts":
                include('./contacts.html');
                break;
            case "faqs":
                include('./faqs.html');
                break;
            default:
                echo "<h1> 404 NOT FOUND</h1>";
        }
        include('./footer.html');
    ?>

</body>
<script src="scripts/app.js"></script>
</html>