<?php
  /***********Add email to database, send otp back to script.js***********/
  header('Content-type: application/json'); //returns json object
  require_once dirname(__DIR__).'/sendEmail.php';
  require_once './functions.php';
  require_once '../includes/db.php';
  ini_set("allow_url_fopen", true); // unnecesary (remove later)


  $json = file_get_contents('php://input'); //getting data from json POST -- from the request
  //php://input - (read raw data from the request body)
  //file_get_contents() read a file into a string
  $data = json_decode($json, true); // takes a JSON string and converts it into a PHP variable that may be an array or an object.

  //if we don't put json_decode($json, true) then we get the following error while doing $data['email']
  //Cannot use object of type stdClass as array
  //we have to access it as - $data->email
  //the 2nd parameter is called - assoc
  //Specifies a Boolean value. When set to true, the returned object will be converted into an associative array

  $jsonarray = array(); // this is the output json object of our php file
  $email = $data['email'];
  $jsonarray['email']=$email;

  //checking if email is valid(server side validation)
  if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
      http_response_code(400);
      $jsonarray['error'] = 'Invalid Email';
      returnJSON($jsonarray);
      exit();
  }
  
  $OTP = generateOTP();

  if ($con) {
      try {
          $activated=0;
          $stmt = $con->prepare('Select activated from subscriber where email = ?');
          $stmt->bind_param('s', $email);
          $stmt->execute();
          $stmt->store_result(); // storing result of the query
          $stmt->bind_result($activated); // binding it to activated variable
          $stmt->fetch();

          $rows=$stmt->num_rows; // getting the number of rows
          // to check if the email is already present in the db or not
          // if email is present, we'll have to run update query
          // else we'll have to run insert query

          if ($activated===1) {
              $jsonarray['error'] = 'You already have one subscription with this email!';
              returnJSON($jsonarray);
              http_response_code(409);
              exit();
          }

          if ($rows===0) {
              $stmt = $con->prepare('Insert into subscriber (email, otp) values (?, ?)');
              $stmt->bind_param('si', $email, $OTP);
              $stmt->execute();
          } else {
              $stmt = $con->prepare('UPDATE `subscriber` SET `OTP`=? WHERE `email`=?');
              $stmt->bind_param('is', $OTP, $email);
              $stmt->execute();
          }

          //send mail for otp
          $SERVER_NAME = isset($_SERVER['SERVER_NAME']) ? $_SERVER['SERVER_NAME'] : '';
          $jsonarray['server'] = $SERVER_NAME;
          $subject = 'OTP for XKCD Comics';
          $textContent  = "Your OTP for email validation is $OTP or";
          // sending data in the query (?)
          // add this functionality later
          // $textContent .= " click <a href='http://" . $SERVER_NAME .'/'.dirname(__DIR__).'/subscribe.php?email=' . $email . '&otp=' . md5($OTP) . "'>here.</a>";
          sendMail($email, $subject, $textContent, $htmlContent="");
      } catch (Exception $e) {
          $jsonarray['error'] = 'Uh Oh! Something went wrong. Please try again after sometime';
          return($jsonarray);
          http_response_code(500);
          exit();
      }
    }
    returnJSON($jsonarray);
