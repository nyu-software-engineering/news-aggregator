const convert = require('xml-js');
module.exports = {

    parseRssObject : (rssData) =>{ 
        return convert.xml2js(rssData,{compact: true, spaces: 4});
    },

    testData : `<root>
    <?xml version="1.0" encoding="UTF-8" ?>
    <rss version="2.0">
    <channel>
      <title>TEST RSS</title>
      <link>https://www.test.com</link>
      <description>I love testing rss feeds in my free time</description>
      <item>
        <title>A Test New Item</title>
        <link>https://www.test.com/test1</link>
        <description>A news article about unit tests</description>
      </item>
    </channel>
    </rss>"
    </root>`
}