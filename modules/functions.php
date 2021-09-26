<?php
header('Content-type: application/json'); //returns json object
function returnJSON($text){
  echo json_encode($text); // php files echo instead of return 
  // so here we are converting the data into json object, and echoing it (basically returning it) 
}

function generateOTP(){
  return random_int(100000, 999999);
}