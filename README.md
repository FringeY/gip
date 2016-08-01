###获取ip地址及相关信息
> ####使用

```
git clone https://github.com/Frozenme/gip.git
npm i
```
> ####依赖

* `koa`
* `request`
* `cheerio`

> ####pm2

```
npm i pm2 -g
pm2 start index.js --name='gip' -i max  -e err.log -o out.log
```

> GET

```JSON
// response
{
  ip: "",
  city: "",
  geoIP: ""
}
```
