var colors = require("colors");
var cheerio = require("cheerio");
var server = require("./curl");
var DES3 = require('./3des.js');
//新后端调用方式全部使用post请求，加密请求参数
var DES3KEY = 'u9ker873jd63hs882j94bank' //3Des密钥
//转3des
function to3des(message) {
    let des3 = DES3.encrypt(DES3KEY, message)
    return des3
}

var dataArr = [
  {//用户登录
    'IE': true,
    'D': JSON.stringify({
          "phone":"18017740228",
          "Pswd":"pan850228",
          "IdentifyCode":"15"
        }),
    'M': 'MemberLogin' 
  },
  {//精选列表
    'IE': true,
    'D': JSON.stringify({
          "ProductTypeId":2,
          "PageIndex":1,
          "PageSize":15
        }),
    'M': 'GetProductList' 
  },
  {//94管家列表
    'IE': true,
    'D': JSON.stringify({
          "ProductTypeId":1,
          "PageIndex":1,
          "PageSize":15
        }),
    'M': 'GetProductList' 
  },
  {//基金宝七日年化收益率趋势图
    'IE': true,
    'D': JSON.stringify({
          "ProductId":2011
        }),
    'M': 'GetProductPointData' 
  },
  {//基本宝详情
    'IE': true,
    'D': JSON.stringify({
          "ProductId":2011,
          "ProductTypeId":"9"
        }),
    'M': 'GetProductDetail' 
  },
  {//用户基本信息
    'IE': true,
    'D': JSON.stringify({
        }),
    'M': 'GetMemberAccount' 
  }
];

for(var i = 0; i < dataArr.length; i++){
  dataArr[i] = JSON.stringify(dataArr[i]);  
  console.log(i + ":" +dataArr[i]); 
  (function(i){
    server.download(dataArr[i], function(data) {
      if (data) {
        console.log(data);
        var $ = cheerio.load(data);
        console.log("done".green);
      } else {
          console.log(i + ":none".green);
      }
    });
  })(i)
  
}

