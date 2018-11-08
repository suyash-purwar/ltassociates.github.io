function isFormDataValid() {
  let isFormValid = true;

  let isErrorInName = {}, isErrorInPhone = {}, isErrorInEmail = {}, isErrorInMessage = {};

  // Name Field
  const name = document.querySelector("input[name=name]").value;
  if (typeof name == "string" && !Boolean(name.trim())) {
    isErrorInName.isError = true;
    isErrorInName.errorCause = "Name field should not be empty and should not contain numbers";
  }

  // Phone field
  const phone = document.querySelector("input[name=phone]").value;

  if (phone.length <= 6) {
    isErrorInPhone.isError = true;
    isErrorInPhone.errorCause = "Phone number should have a length of atleast 7";
  } else {
  [...phone].forEach(char => {
      if (!(char.charCodeAt(0) >= 48 && char.charCodeAt(0) <= 57)) {
        isErrorInPhone.isError = true;
        isErrorInPhone.errorCause = "Phone number should not have characters";
      }
    })
  }

  // Email field
  const email = document.querySelector("input[name=email]").value;
  if (!Boolean(email.trim())) {
    isErrorInEmail.isError = true;
    isErrorInEmail.errorCause = "Email is required";
  } else {
    if (!Array.from(email).includes("@")) {
      isErrorInEmail.isError = true;
      isErrorInEmail.errorCause = "Email is not correct";
    }
  }

  // Message field
  const message = document.querySelector("textarea[name=message]").value;
  if (message.length < 10) {
    isErrorInMessage.isError = true;
    isErrorInMessage.errorCause = "Message is too short"
  }

  [isErrorInName, isErrorInPhone, isErrorInEmail, isErrorInMessage].reverse().map(field => {
    if (field.isError) {
      document.getElementById("error-info").innerHTML = field.errorCause;
      isFormValid = false;
    }

  });
  return isFormValid;
}

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAz80SXnsbKAccQhINGpiQhzZh3mkwKh9E",
  authDomain: "ltassociates-7df2b.firebaseapp.com",
  databaseURL: "https://ltassociates-7df2b.firebaseio.com",
  projectId: "ltassociates-7df2b",
  storageBucket: "ltassociates-7df2b.appspot.com",
  messagingSenderId: "753606610838"
};
firebase.initializeApp(config);

const database = firebase.firestore();
database.settings({
  timestampsInSnapshots: true
});

document.querySelector('#contactus-form').addEventListener('submit', function(e) {
  e.preventDefault();

  if (isFormDataValid()) {
    const formData = (function() {
      return {
        name: document.querySelector("input[name=name]").value,
        email: document.querySelector("input[name=phone]").value,
        phone: document.querySelector("input[name=email]").value,
        message: document.querySelector("textarea[name=message]").value
      }
    }());

    // Saving in database
    database.collection("messages").add(formData)
    .then(doc => {
      document.getElementById("error-info").innerHTML = "";
      document.getElementById("success-info").innerHTML = "Congrats! Your messages is sent";
      setTimeout(() => {
        document.getElementById("success-info").innerHTML = "";
      }, 4000);
    }).catch(error => console.log(error));
  }
});