###获取ip地址及相关信息
> 使用

```
git clone https://github.com/Frozenme/gip.git
npm i
```
在 **config** 中添加 **apikey**

> apikey 获取

[BAIDU APISTORE](http://apistore.baidu.com/apiworks/servicedetail/114.html)

> 依赖

* koa
* request

> pm2

```
npm i pm2 -g
pm2 start index.js --name='gip' -i max  -e err.log -o out.log
```

> GET

```
{
  "errNum": 0,
  "errMsg": "success",
  "retData": {
    "ip": "x.x.x.x", //IP地址
    "country": "xx", //国家
    "province": "xx", //省份 国外的默认值为none
    "city": "xx", //城市  国外的默认值为none
    "district": "xx",// 地区 国外的默认值为none
    "carrier": "xx" //运营商  特殊IP显示为未知
  }
}
```
