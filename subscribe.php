<?php


$error="";
$errorcode="";
// echo "<script> location.href='new_url'; </script>";
// exit;
// echo 'bruh wtf';
// have to fix these redirections
//send a raw HTTP header to a client in raw form
// header("location:".__DIR__."/error404.php", true, 303);
if (!(isset($_GET['email']) && isset($_GET['otp']))) {
    ?>
    <script>
        var resCode=401;
        window.location.replace("./error.php?error="+resCode);
    </script>
    <?php
    exit();
}

$email = $_GET['email'];
$otp   = $_GET['otp'];

if (! filter_var($email, FILTER_VALIDATE_EMAIL) && strlen($otp) !== 32) {
    ?>
    <script>
        var resCode=401;
        window.location.replace("./error.php?error="+resCode);
    </script>
    <?php
    exit();
}

require_once __DIR__.'/includes/header.php';

//checking if the email and otp from url match the email and otp in db
if ($con) {
    try {
        $db_email="";
        $db_otp="";
        $stmt = $con->prepare('SELECT Email , otp FROM `subscriber` WHERE Email = ?');
        $stmt->bind_param('s', $email);
        $stmt->execute(); // executing the select statement
        $stmt->bind_result($db_email, $db_otp); //storing result in other variables
        $stmt->fetch();
        $stmt->close();
    } catch (Exception $e) {
        ?>
        <script>
            resCode=500;
            window.location.replace("./error.php?error="+resCode);
        </script>
        <?php
        exit();
    }

    //checking if the creds match
    if ($email!==$db_email || $otp!==md5($db_otp)) {
        //creds mismatch?>
        <script>
            resCode=401;
            window.location.replace("./error.php?error="+resCode);
        </script>
        <?php
        exit();
    }
    try {
        $stmt = $con->prepare('UPDATE `subscriber` SET `activated`=1 WHERE `email`=?');
        $stmt->bind_param('s', $email);
        $stmt->execute();
        $stmt->close();
    } catch (Exception $e) {
        ?>
        <script>
            resCode=500;
            window.location.replace("./error.php?error="+resCode);
        </script>
        <?php
        exit();
    }
}
?>

<!--Content to be displayed on page-->
<h1>Successfully Subscribed</h1>