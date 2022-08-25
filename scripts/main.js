const fname = document.querySelector("#Fname");
const lname = document.querySelector("#Lname");
const email = document.querySelector("#email");
const message = document.querySelector("#query");
const btnSubmit = document.querySelector(".btn");

const getUserInfo = () => {
  //because form not used no need to use preventDefault(); method on event (e) but once in form remember to use e.preventDefault.
  let validFname = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/gm;
  validFname = validFname.test(fname.value);
  let validLname = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/gm;
  validLname = validLname.test(lname.value);
  let validEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  validEmail = validEmail.test(email.value);

  if (validEmail && validFname && validLname) {
    console.log(`Name of user is ${fname.value} ${lname.value}`);
    console.log(`Their email is: ${email.value}`);
    console.log(`Their message: ${message.value}`);
  } else {
    if (validFname === false) {
      alert("First name not entered in correct format");
      fname.focus();
    } else if (validLname === false) {
      alert("Last name not entered in correct format");
      lname.focus();
    } else if (validEmail === false) {
      alert("Email not entered in correct format");
      email.focus();
    }
  }
};

btnSubmit.addEventListener("click", getUserInfo);
