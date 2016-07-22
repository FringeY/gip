const koa = require('koa');
const request = require('request');
const config = require('./config');
const app = koa();

app.use(function* (next){
  try {
    const data = yield new Promise((resolve) => {
      request({
        url: `${config.url}?ip=${this.request.ip.slice(7)}`,
        headers: {
          apikey: config.apikey,
        },
      }, (err, res, body) => {
        resolve(JSON.parse(body));
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
