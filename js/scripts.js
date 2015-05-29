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
