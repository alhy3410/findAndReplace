var findAndReplace = function(phrase, searchForWord, replacedWord){
  var phraseToCheck = phrase.split(" ");
  var findWord = searchForWord;
  var replaceWord = replacedWord;
  var returnArray = [];

  phraseToCheck.forEach(function(word){
    if (findWord === word){
      returnArray.push(replaceWord);
    }else{
      returnArray.push(word);
    }
  });

  var finalAnswer = returnArray.join(" ");
  return finalAnswer;
};

$(document).ready(function() {
  $("form#stringEntered").submit(function(event) {
    var sentenceCheck = $("input#stringEntered").val();
    var findWord = $("input#findWord").val();
    var replaceWord = $("input#wordReplace").val();

    var result = findAndReplace(sentenceCheck,findWord,replaceWord);
    $(".answerSentence").text(result);

    $("#result").show();

    event.preventDefault();

  });
});
