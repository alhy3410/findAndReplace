describe('findAndReplace', function(){
  it('will print out the string that you want to search through', function(){
    expect(findAndReplace("This is the sentence that you want to search through")).to.equal("This is the sentence that you want to search through")
  });

  it('will look through the string and find your word', function(){
    expect(findAndReplace("This is the sentence","sentence")).to.equal("This is the sentence")
  });
});
