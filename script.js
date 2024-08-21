//chapter 06-09
//Q # 01
// Take a number in a variable
var a = 10;

document.write("Result:<br>");
document.write("The value of a is: " + a + "<br>");
document.write("------------------------------<br><br>");

// Pre-increment
document.write("The value of ++a is: " + (++a) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

// Post-increment
document.write("The value of a++ is: " + (a++) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

// Pre-decrement
document.write("The value of --a is: " + (--a) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

// Post-decrement
document.write("The value of a-- is: " + (a--) + "<br>");
document.write("Now the value of a is: " + a + "<br>");
document.write( "------------------  <br />");
//Q # 02
var a = 2;
document.write( "a is :" + a +"<br/>")
var b = 1 ;
document.write( "b is :" + b +"<br/>")
var valueA = --a;
document.write( "--a is :" + valueA +"<br/>")
var valueB = --a - --b;
document.write( "--a - --b is :" + valueB +"<br/>")
var valueC = --a - --b + ++b ;
document.write( "--a - --b + ++b is :" + valueC +"<br/>")
var result= --a - --b + ++b + b--;
document.write( "Result is :" + result +"<br/>")

//Q # 03
var username = prompt("What is your name?");
alert("Hello " + username + "!");

//Q # 04 
document.write( "------------------  <br />");
var number = prompt("Enter a number:", "5");

// Convert input to a number, if input is invalid, default to 5
number = Number(number) || 5;

document.write("Multiplication Table of " + number + "<br>");
document.write(number + " x 1 = " + (number * 1) + "<br>");
document.write(number + " x 2 = " + (number * 2) + "<br>");
document.write(number + " x 3 = " + (number * 3) + "<br>");
document.write(number + " x 4 = " + (number * 4) + "<br>");
document.write(number + " x 5 = " + (number * 5) + "<br>");
document.write(number + " x 6 = " + (number * 6) + "<br>");
document.write(number + " x 7 = " + (number * 7) + "<br>");
document.write(number + " x 8 = " + (number * 8) + "<br>");
document.write(number + " x 9 = " + (number * 9) + "<br>");
document.write(number + " x 10 = " + (number * 10) + "<br>");


    //Q # 06
    document.write( "------------------ <br />")   
var sub1 = "english";
var sub2 = "urdu";
var sub3 = "maths";
var totalmarks = 100 ;
var marksobtsub1= 85;
var marksobtsub2= 70;
var marksobtsub3 = 92;
var percentagesub1= (marksobtsub1/totalmarks )*100
var percentagesub2= (marksobtsub2/totalmarks )*100
var percentagesub3= (marksobtsub3/totalmarks )*100
var total = totalmarks*3;
var totalobtmarks = marksobtsub1+marksobtsub2+marksobtsub3;
var totalpercentage = (totalobtmarks/total )*100
document.write("<th>Subject </th> <th>Total Marks </th><th>Obt Marks </th><th>Percentage </th><br/> ")
document.write("<pre><td>English  </td> <td> "  +   totalmarks   +" </td>     <td> "+   marksobtsub1   +" </td>     <td> "+   percentagesub1   + "% </td><pre> ")
document.write("<pre><td>Urdu     </td> <td> "  +   totalmarks   +" </td>     <td> "+   marksobtsub2   +" </td>     <td> "+   percentagesub2   + "% </td><pre> ")
document.write("<pre><td>Maths    </td> <td> "  +   totalmarks   +" </td>     <td> "+   marksobtsub3   +" </td>     <td> "+   percentagesub3   + "% </td><pre> ")
document.write("<pre><td>         </td> <td> "  +   total   +" </td>     <td> "+   totalobtmarks   +" </td>     <td> "+   totalpercentage  + "% </td><pre> ")
