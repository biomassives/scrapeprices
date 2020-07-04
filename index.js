const axios = require('axios');
const cheerio = require('cheerio');
const SCRAPING_URL = 'https://markets.businessinsider.com/commodities/gold-price';
//const SCRAPING_URL = '';
//*[@id="gpxtickerLeft_price"]
// table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(2)
//html body#gsr.srp.tbo.vasq div#main div#cnt.big div.mw div#rcnt div.col div#center_col div#res.med div#search


(async () => {
  const response = await axios.get(SCRAPING_URL)
    .then(res => res.data)
    .catch(err => console.log(err));

  const results = [];

  if (response) {
    const $ = cheerio.load(response);

    $('div.aktien-big-font:nth-child(2) > div:nth-child(1) > span:nth-child(1)').each(function() {
      results.push($(this).text());
    });
  }

  console.log(results);
})();


