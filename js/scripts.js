var findAndReplace = function(phrase, searchForWord){
  var phraseToCheck = phrase.split(" ");
  var findWord = searchForWord;
  var returnArray = [];

  phraseToCheck.forEach(function(word){
    if (findWord === word){
      returnArray.push(word);
    }else{
      returnArray.push(word);
    }
  });

  var finalAnswer = returnArray.join(" ");
  return finalAnswer;
};
