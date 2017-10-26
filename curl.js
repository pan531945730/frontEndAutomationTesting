var http = require("http");
var colors = require("colors");

 
// Utility function that downloads a URL and invokes
// callback with the data.
// function download(url, callback) {
//   http.get(url, function(res) {
//     var data = "";
//     res.on('data', function (chunk) {
//       data += chunk;
//     });
//     res.on("end", function() {
//       callback(data);
//     });
//   }).on("error", function() {
//     callback(null);
//   });
// }
function download (data, callback) {   
    var opt = {  
        method: "POST",  
        //host: "192.168.2.33",
        //port: 806,  
        host: "np.94bank.com",
        path: "/api/Ajax",  
        headers: {  
            "Content-Type": 'application/json',  
            "Content-Length": data.length  
        }  
    };
    var req = http.request(opt, function (res) {
        res.setEncoding('utf8');  
        if (res.statusCode == 200) {  
            res.on('data', function (data) {
                            callback(data);
                           })  
                          .on('end', function () {
                            //console.log('end')
                            callback(null);
                          });  
        }else {  
            console.log('statusError'.red)
        }  
    });  
    req.write(data);  
    req.end;  
}  
exports.download = download;