<?php
require_once 'config.php';
require_once __DIR__.'/modules/functions.php';
require 'vendor/autoload.php'; // If you're using Composer (recommended)
// Comment out the above line if not using Composer
// require("<PATH TO>/sendgrid-php.php");
// If not using Composer, uncomment the above line and
// download sendgrid-php.zip from the latest release here,
// replacing <PATH TO> with the path to the sendgrid-php.php file,
// which is included in the download:
// https://github.com/sendgrid/sendgrid-php/releases
function sendMail($toEmail, $subject, $textContent, $htmlContent){

    $email = new \SendGrid\Mail\Mail(); 
    $email->setFrom(FROM_EMAIL, FROM_NAME);
    $email->setSubject($subject);
    // to email (Need to fetch from db)
    $email->addTo(strval($toEmail), "User");

    // $email->addContent("text/plain", strval($textContent));
    $email->addContent(
        "text/html", $textContent
    );
    $sendgrid = new \SendGrid( SENDGRID_API_KEY );
    try {
        $response = $sendgrid->send( $email );
        // print $response->statusCode() . "\n";
        // print_r( $response->headers() );
        // print $response->body() . "\n";
        http_response_code($response->statusCode()); // check if this causes any problem
    } catch (Exception $e) {
        // echo 'Caught exception: '. $e->getMessage() ."\n";
        $jsonarray['error'] = 'Aw Snap! Something went wrong with the mailing services. Please try again after sometime';
        return($jsonarray);
        http_response_code(500);
        exit();
    }
}
