// Q.1 Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser: 
// var a = 10;
// document.write("Result" + "<br/>");
// document.write("The Value of a is: " + a + "<hr/>");

// document.write("The Value of ++a is: " + ++a + "<br/>");
// document.write("Now the Value of a is: " + a + "<br/>" + "<br/>"+ "<br/>");

// document.write("The Value of a++ is: " + a++ + "<br/>");
// document.write("Now the Value of a is: " + a + "<br/>" + "<br/>"+ "<br/>");

// document.write("The Value of --a is: "  + --a + "<br/>");
// document.write("Now the Value of a is: " + a + "<br/>" + "<br/>"+ "<br/>");

// document.write("The Value of a-- is: "  + a-- + "<br/>");
// document.write("Now the Value of a is: " + a + "<br/>" + "<br/>"+ "<br/>" + "<br/>"+ "<br/>"+ "<br/>");



//Q.2 . What will be the output in variables a, b & result after execution of the following script: 
// var a = 2; 
// var b = 1; 
// var result1 = --a - --b + ++b + b--; 
// var result2 = --a; 
// var result3 = --a - --b; 
// var result4 = --a - --b + ++b; 
// var result5 = --a - --b + ++b + b--;  



// //Explain the output at each stage: --a - --b + ++b + b--;  
//   document.write("a is 2" + "<br/>") ;
//   document.write("b is 1" + "<br/>");
//   document.write("result is " + result1  + "<br/>"+ "<br/>");

//--a; 

//   document.write("a is 2" + "<br/>") ;
//   document.write("b is 1" + "<br/>");
//   document.write("result is " + result2  + "<br/>"+ "<br/>");

//-a - --b; 

// document.write("a is 2" + "<br/>") ;
//   document.write("b is 1" + "<br/>");
//   document.write("result is " + result3  + "<br/>"+ "<br/>");

// --a - --b + ++b; 

//   document.write("a is 2" + "<br/>") ;
//   document.write("b is 1" + "<br/>");
//   document.write("result is " + result4  + "<br/>"+ "<br/>");

//--a - --b + ++b + b--; 

//   document.write("a is 2" + "<br/>") ;
//   document.write("b is 1" + "<br/>");
//   document.write("result is " + result5  + "<br/>"+ "<br/>");




//Q.3 Write a program that takes input a name from user &  greet the user. 
//  let userName = prompt("What is your Name");
//  document.write(  "Welcome to our website " + userName);


// Q.4 Write a program to take input a number from user & display it’s multiplication table on your browser. If user does not enter a new number, multiplication table of 5 should be displayed by default. 
//  var number = prompt("Enter a number to display its multiplication table");

//  if (number === null || number.trim() === "") {
//   number = 5;
// } else {
//   number = parseInt(number); // Convert the input to an integer
// }

// document.write("Multiplication Table of " + number + "<br/>");
// document.write(number + " x " + "1 = " + 1*number + "<br/>")
// document.write(number + " x " + "2 = " + 2*number + "<br/>")
// document.write(number + " x " + "3 = " + 3*number + "<br/>")
// document.write(number + " x " + "4 = " + 4*number + "<br/>")
// document.write(number + " x " + "5 = " + 5*number + "<br/>")
// document.write(number + " x " + "6 = " + 6*number + "<br/>")
// document.write(number + " x " + "7 = " + 7*number + "<br/>")
// document.write(number + " x " + "8 = " + 8*number + "<br/>")
// document.write(number + " x " + "9 = " + 9*number + "<br/>")
// document.write(number + " x " + "10 = " + 10*number + "<br/>")






// Q.6 Take
//a) Take three subjects name from user and store them in 3 different variables.

// var subject1 = prompt("Enter Your 1st subject");
// var subject2 = prompt("Enter Your 2nd subject");
// var subject3 = prompt("Enter Your 3rd subject");

// //b) Total marks for each subject is 100, store it in another variable.
// var marks = 100;

// // c) Take obtained marks for first subject from user and stored it in different variable. 
// var mark1 = +prompt("Enter the marks obtained in " + subject1);

// // d) Take obtained marks for remaining 2 subjects from user and store them in variables.  
// var mark2 = +prompt("Enter the marks obtained in " + subject2);
// var mark3 = +prompt("Enter the marks obtained in " + subject3);

// // e) Now calculate total marks and percentage and show the result in browser like this.(Hint: user table) 
// var percen1 = mark1 / marks * 100 
// var percen2 = mark2 / marks * 100 
// var percen3 = mark3 / marks * 100 

// var totalMarks = marks * 3;
// var obtainedMarks = mark1 + mark2 + mark3;
// var totalPercentage = percen1 +percen2 +percen3;


// document.write("<table border='1' cellpadding='15'>");
// document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>");
// document.write("<tr><td>" + subject1 + "</td><td>" + marks + "</td><td>" + mark1 + "</td><td>" + percen1 +"%"  + "</td></tr>");
// document.write("<tr><td>" + subject2 + "</td><td>" + marks + "</td><td>" + mark2 + "</td><td>" + percen2 +"%" + "</td></tr>");
// document.write("<tr><td>" + subject3 + "</td><td>" + marks + "</td><td>" + mark3 + "</td><td>" + percen3 +"%" + "</td></tr>");
// document.write("<tr><td>" + "All Subjects" + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks + "</td><td>" + totalPercentage + "%" + "</td></tr>");
// document.write("</table>");







