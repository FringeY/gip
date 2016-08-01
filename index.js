const koa = require('koa');
const request = require('request');
const cheerio = require('cheerio');
const config = require('./config');
const app = koa();

app.use(function* (next){
  try {
    const data = yield new Promise((resolve) => {
      request({
        url: config.url,
        headers: {
          'User-Agent': 'request'
        }
      }, (err, res, body) => {
        const $ = cheerio.load(body);
        const well = $('.well');
        const ip = well.find('code').eq(0).text();
        const city = well.find('code').eq(1).text();
        const geoIP = well.find('p').eq(2).text().replace('GeoIP: ', '');
        resolve({
          ip,
          city,
          geoIP,
        })
      });
    });
    this.body = data;
  } catch(e) {
    this.body = {
      code: e.status,
      message: e.message,
    };
  }
});

app.listen(config.port);
