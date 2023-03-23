let submitButton = document.getElementById("submitBtn");
submitButton.onclick = function () {
  let userName = document.getElementById("username").value;
  let userRollNumber = document.getElementById("userRollNumber").value;
  let English = parseInt(document.getElementById("English").value);
  let Math = parseInt(document.getElementById("Math").value);
  let Physics = parseInt(document.getElementById("Physics").value);
  let pakStudies = parseInt(document.getElementById("pakStudies").value);
  let Islamiat = parseInt(document.getElementById("Islamiat").value);
  let Urdu = parseInt(document.getElementById("Urdu").value);
  let multiply = 100;
  let totalMarks = 600;
  let obtainedMarks = English + Math + Physics + pakStudies + Islamiat + Urdu;
  let percentage = (obtainedMarks / totalMarks) * multiply;
  let grade;
  if (percentage > 100) {
    grade = "invalid";
  } else if (percentage >= 80) {
    grade = "Congrat's You Got : A+";
  } else if (percentage >= 70) {
    grade = "Congrat's You Got : A";
  } else if (percentage >= 60) {
    grade = "You Got : B";
  } else if (percentage >= 50) {
    grade = "You Got : C";
  } else if (percentage >= 40) {
    grade = "You Got : D";
  } else if (percentage >= 25) {
    grade = "You Failed";
  } else if(percentage <= 1){ 
    grade = "invalid";
  }
  let displayText = 
`Dear ${userName}
  \nRoll Number: ${userRollNumber},
  \nYour Total Obtained Marks are ${obtainedMarks}
  \nYour Percentage is ${percentage}%\n\n${grade}`;
  document.getElementById("textdisplay").value = displayText;
};