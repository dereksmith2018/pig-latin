var translator = function (str) {
  var vowels = ['a','e','i','o','u'];
  var result = str.split("");
  var userInput = [""];

  if (vowels.includes(str.charAt(0))) {
    return str += "way";
    } else {
    for (var i = 0; i < userInput.length; i++) {
      if (!vowels.includes(str[i])) {
        result.push(result.shift())

        // else if(input.substring(0,2) === "qu" || input.substring(0,2) === "QU" ||input.substring(0,2) === "qU" ||input.substring(0,2) === "Qu")


      } else {
        result.push("ay");
        return result.join("");
      }
    }
  }
}
// }
  //front end
 $(document).ready(function()  {
   $ ("form#input").submit(function(event) {
     event.preventDefault();

     var userInput = $("#inputText").val();
     $("#results").show();




   });
    });
    // ----tester----
    // function translator(str) {
    // var vowels= ["a","e","i","o","u"];
    // var consonants = ["bcdfghjklmnpqrstvwyz"];
    // var userInput = [""];
    // var i = 0;
    //   result = str.split("");
    //
    // if (vowelArray.includes(userInput(0)) {
    //   output = userInput + "way"
    //
    // } if (consonantsArray.includes(userInput()) {
    //   output = userInput + "ay"
    // }
    //   for (i=0; i < userInput.length; i++) {
    //       var conString = str.slice(i);
    //        }
    // }
