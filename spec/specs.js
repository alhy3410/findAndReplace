describe('findAndReplace', function(){
  it('will print out the string that you want to search through', function(){
    expect(findAndReplace("This is the sentence that you want to search through")).to.equal("This is the sentence that you want to search through")
  });

  it('will look through the string and find your word', function(){
    expect(findAndReplace("This is the sentence","sentence")).to.equal("This is the ")
  });

  it('will look through the string, find and replace your word', function(){
    expect(findAndReplace("This is the sentence","sentence","sentenceChange")).to.equal("This is the sentenceChange")
  });

});
