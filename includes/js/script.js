console.log("Script")

const register = './modules/registration.php'  // links for php scripts from where we'll get our response
const validate = './modules/validation.php' // links for php scripts from where we'll get our response

const subscribebtn = document.getElementById('subscribe')
const email = document.getElementById('email') // text input for email
const otp = document.getElementById('otp') // text input for otp
const verifyotpbtn = document.getElementById('verifyotp')
//divisions of register & verify otp
const otpform = document.getElementById('otp-form-group')
const emailform = document.getElementById('register-form-group')

let respstatus = 0; //global variable to record response status

subscribebtn.addEventListener('click', verifyEmail)
verifyotpbtn.addEventListener('click', verifyOTP)

//dummy verify otp for now -- fix the layout later
function dummy(){
  otpform.style = "display:flex";
  emailform.style = "display:none";
}

//this function will return a promise (after fetching data) which inturn needs to be fetched from their respective func
async function request(link, method, body) {
  console.log({
    link,
    method,
    body
  });

  //fetch data
  let response = "";
  body = JSON.stringify(body) // converts a JavaScript object or value to a JSON string
  response = await fetch(
    link, {
      method: method,
      body: body
    }
  );

  // so the fetch returns a promise, what the await keyword does is, it stalls JavaScript
  // from assigning the promise to the response variable, until it has been resolved
  // once the promise has been resolved, the object returned from the promise is assigned

  // console.log(response.json());

  // return {
  //   status : response.status
  // };
  respstatus = response.status;
  // const resp = ;
  return response.json(); // to return the object

}

//whenever we call an async function it returns a promise regardless of what is its contents
async function verifyEmail() {
  // console.log("verifyinggg")
  let data = await request(register, "POST", {
    email: email.value
  })
  sessionStorage.setItem("email", email.value); // to later access it for otp verification
  dummy();
  console.log({
    data, respstatus
  })
}

//function for otp verification
async function verifyOTP() {
 let sesEmail = sessionStorage.getItem('email');
 let otpdata = await(request(validate, "POST", {
   email: sesEmail,
   otp: otp.value
 }
 ))
 console.log({
   otpdata, respstatus
 })
}