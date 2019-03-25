const validatePswd = require('../src/validatePswd.js');
const validateUsername = require('../src/validateUsername.js')
const parseRss = require('../src/rss-reader.js');
const assert = require('assert');



describe("validatePswd", function () {
    it('Correctly validates inputted password "Password1!"', () => {
        assert.equal(validatePswd.validPswd('Password1!'), true);
    });
    it('Correctly invalidates inputted password "password"', () => {
        assert.equal(validatePswd.validPswd('password'), false);
    });
});

describe("validateUsername", function () {
    it('Correctly validates inputted username "bob_johnson"', () => {
        assert.equal(validateUsername.validate('bob_johnson'), true);
    });
    it('Correctly invalidates inputted username "bob johnson"', () => {
        assert.equal(validateUsername.validate("bob johnson"), false);
    });
    it('Correctly invalidates inputted username "bobjohnson222222"', () => {
        assert.equal(validateUsername.validate("bob%johnson"), false);
    });
});

describe("parseRss", function () {
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
});

describe("testRssLink", function () {
    it('Is able to parse the rss file', ()=>{
        try {
            const parsedObject = parseRss.parseRssObject(parseRss.testData);
            //assert.pass("actual", "expected", "Error message")
            assert.equal(parsedObject != null, true);
        }
        catch (e) {
            console.log(e);
            assert.fail("actual", "expected", e)
        }
    }); 

    it('Is not able to parse nonexistent file', ()=>{
        const parsedBlank = parseRss.parseRssObject(parseRss.testBlank);
        assert.equal(parsedBlank, undefined || {} || null);
/*
        try {
            const parsedBlank = parseRss.parseRssObject(parseRss.testBlank);
            assert.fail(JSON.stringify(parsedBlank), undefined)
        }
        catch (e) {
            console.log(e);
            //assert.pass("actual", "expected", "Error message")
            //done();
            assert.equal(parsedBlank, undefined);
        } */
    }); 

    const parsedObject = parseRss.parseRssObject(parseRss.testData).root;
    const rss = Object.keys(parsedObject);
    console.log(rss);
    it('Correctly determines that file exists and is an rss', ()=>{
        try {
            const parsedObject = parseRss.parseRssObject(parseRss.testData);
        }
        catch (e) {
            console.log(e);
        }
        assert.equal(parsedObject.channel.title._text,"TEST RSS");
    }); 
});