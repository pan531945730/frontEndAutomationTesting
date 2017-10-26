var cheerio = require("cheerio"),
    $ = cheerio.load('<ul id="fruits"><li class="apple">Apple</li><li class="orange">Orange</li><li class="pear">Pear</li></ul>');
var appleHtml;
appleHtml = $('#fruits').html();
console.log(appleHtml);
$('.apple').attr('id','favorite');
appleHtml=$('#fruits').html();
console.log(appleHtml);
var server = require("./curlTest"); 
var url = "http://np.94bank.com/Product/ProductList"

server.download(url, function(data) {
  if (data) {
    //console.log(data);
    var $ = cheerio.load(data);
    var navHtml;
    navHtml = $('.pd-nav').html();
    $('li[data-active="sift-finance"]').attr('id','favorite').html();
    navHtml = $('.pd-nav').html();
    console.log(navHtml);
    console.log("done");
  } else {
      console.log("error");
  } 
});

var fruits =[];

$('li').each(function(i, elem){
  fruits[i]= $(this).text();});

console.log(fruits.join(', '))

$('li').filter(function(i, el){
// this === e

$(this).attr('class')==='orange');
})