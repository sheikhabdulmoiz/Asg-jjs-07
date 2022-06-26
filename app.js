// --------------------------------- Q#01 ----------------------------------------

// var firstName =prompt("Enter your first Name");
// var lastName =prompt("Enter your last Name");
// var fullName=firstName+" "+lastName;
// alert("Your full name is " +fullName);

// --------------------------------- Q#02 ----------------------------------------

// var userFavmobile=prompt("Enter your Favourte mobile Name Model");
// alert("My Favourite mobile model is "+userFavmobile+ "\n"+"Length of string: "+userFavmobile.length);

// --------------------------------- Q#03 ----------------------------------------

// var userFavmobile=prompt("Enter any word to find index of n ");
// var indexn=userFavmobile.indexOf("n")
//  alert("String: "+userFavmobile+ "\n"+"Index of n: "+indexn)

// --------------------------------- Q#04 ----------------------------------------

// var userFavmobile="Hello World";
// var indexn=userFavmobile.lastIndexOf("l")
//  alert("String: "+userFavmobile+ "\n"+"Index of n: "+indexn)
 
 // --------------------------------- Q#04 ----------------------------------------
 
//  var userFavmobile=prompt("Enter any string");
//  var indexn=userFavmobile.charAt(3)
//   alert("String: "+userFavmobile+ "\n"+"Char at index 3: "+indexn)

 // --------------------------------- Q#06 ----------------------------------------

 // --------------------------------- Q#07 ----------------------------------------

//  var word="Hyderabad";
//  var replaceword=word.replace("Hyder","Islam")
//  alert("Word: "+word+" \n"+"After replacement: "+replaceword)

 // --------------------------------- Q#08 ----------------------------------------

// var line="Ali and Sami are best friends. They play cricket and football together.";
// var replac=line.replace(/and/g,"&");
// alert(replac);

 // --------------------------------- Q#09 ----------------------------------------

//  var string="472";
//  var number=+string;
//  alert("Value: "+string+"\n"+"Type: String"+"\n"+"Value: "+number+"\n"+"Type: Number")

 // --------------------------------- Q#10 ----------------------------------------

//  var userName=prompt("Enter any word");
//  var upperCase=userName.toUpperCase();
//  alert("Username: "+userName+"\n"+"Uppercase: "+upperCase);

 // --------------------------------- Q#11 ----------------------------------------

//  var userName=prompt("Enter any word");
// var first=userName[0];
//  var titleCase=userName.replace(first,userName[0].toUpperCase());
//  alert(titleCase);

 // --------------------------------- Q#12 ----------------------------------------

//  var num=+prompt("Enter any number",35.36);
//  var string=num.toString();
//  var dotrep=string.replace(".","");
//  alert("Result: "+dotrep);

 // --------------------------------- Q#13 ----------------------------------------

// var userName=prompt("Enter any username");//Mo@eez
// var A=["@",",",".","!"]
// var ischar=false;

// for(var i=0;i<userName.length;i++){
//          if(A.indexOf(userName[i])!==-1){      //  moiz
//             alert("Please entere a valid username")
//             var ischar=true;
//                 }
//             }
//  if(ischar===false){
//       alert("Perfect! Correct username")
//         }


 // --------------------------------- Q#14 ----------------------------------------

// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var user=prompt("Welcome to Alfalah bakery, What would you like to order Sir/Maa'm").toLowerCase();
// var search=A.indexOf(user)
//  if(search===-1){
//     alert(user+ " is not available");
//  }
//  else{
//     var available=A.slice(search,search+1);
//     alert(available+" is available");
//  }

 // --------------------------------- Q#15 ----------------------------------------

// var userPassword=prompt("Enter your pasword:");  //123moiz!

// var isNumber = false;
// var isAlpha = false;
// var isInvalid = false;

// if(userPassword[0].charCodeAt()>=48 && userPassword[0].charCodeAt()<=57){
//     alert("Alert! Password shoulld not start with a number.");

// }
// else if(userPassword.length < 6){
//     alert("Alert! Password shoulld contain at least 6 characters.");

// }

// else{
    
//     for(var i=0;i<userPassword.length;i++){
    
//          if(userPassword[i].charCodeAt()>=65 && userPassword[i].charCodeAt()<=90){
//             isAlpha = true;
//         }
        
//         else if(userPassword[i].charCodeAt()>=97 && userPassword[i].charCodeAt()<=122){
//             isAlpha = true;
//         }
        
//         else if(userPassword[i].charCodeAt()>=48 && userPassword[i].charCodeAt()<=57){
//             isNumber = true;
//         }
//         else{
//              isInvalid = true;
//         }
//     }

//     if(isAlpha && isNumber && !isInvalid){
//         alert("Perfect! Your Pasword is Correct")
//     }
    
//     else{
//         if(isInvalid){
//         alert("Special characters are not allowed.")
//     }
//         else if(!isNumber){
//                 alert("Password should contain Number.")
//         }
      
        
//   }

// }








 // --------------------------------- Q#16 ----------------------------------------

//  var university = "University of Karachi";
//  var spliit=university.split("");
// // console.log(spliit);
// for(var i=0;i<spliit.length;i++){
//     document.write(spliit[i]+"<br />");
// }

 // --------------------------------- Q#17 ----------------------------------------

//  var word=prompt("Enter any word to see its last Character");
 
//  for(var i =0;i<word.length;i++){
//     if(i===word.length-1){
//         alert("Type Word: "+word+"\n"+"Last Char: "+word[i])
//     }
//  }

 // --------------------------------- Q#18 ----------------------------------------

// var line="the quick brown fox jumps over the lazy dog.";
// var newLine=line.split(" ");
// var count=0;

// for(var i=0;i<line.length;i++){
//     if(newLine[i]==="the")
//     // console.log(newLine[i]);
//     count++;
// }
// console.log("No of The is: "+count);
