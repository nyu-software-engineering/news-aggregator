const validatePswd = require('../userPswd/validatePswd.js');
const parseRss = require('../src/rss-reader.js');
const assert = require('assert');

it('Correctly validates inputted password "Password1!"', () => {
    assert.equal(validatePswd.validPswd('Password1!'), true);
});
it('Correctly invalidates inputted password "password"', () => {
    assert.equal(validatePswd.validPswd('password'), false);
});



const parsedObject = parseRss.parseRssObject(parseRss.testData).root.rss;
it('Correctly parses out RSS channel title property', ()=>{
    assert.equal(parsedObject.channel.title._text,"TEST RSS");
}); 

it('Correctly parses out RSS channel link property', ()=>{
    assert.equal(parsedObject.channel.link._text,"https://www.test.com");
});

it('Correctly parses out RSS channel description property', ()=>{
    assert.equal(parsedObject.channel.description._text,"I love testing rss feeds in my free time");
});

it('Correctly parses out RSS item title property', ()=>{
    assert.equal(parsedObject.channel.item.title._text,"A Test New Item");
});

it('Correctly parses out RSS item link property', ()=>{
    assert.equal(parsedObject.channel.item.link._text,"https://www.test.com/test1");
});

it('Correctly parses out RSS item description property', ()=>{
    assert.equal(parsedObject.channel.item.description._text,"A news article about unit tests");
});
