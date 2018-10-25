var express = require("express");
var request = require("request");
var app = express();

//首页页面数据 ---------------------------------------------------------------
app.get("/getContent", function(req, res) {
	var num = req.query.num;
	// console.log(num)
    res.append("Access-Control-Allow-Origin", "*")
	request('https://api.hongbeibang.com/recommend/getContent?type=1&pageIndex='+num+'&pageSize=10&_android=true', function(err, response, body) {
		// console.log(body)
		res.send(body)
	})
});


//专题页面数据---------------------------------------------------------------
app.get("/getContent1", function(req, res) {
	var num = req.query.num;
	// console.log(num)
    res.append("Access-Control-Allow-Origin", "*")
	request('https://api.hongbeibang.com/recommend/getContent?type=2&pageIndex='+num+'&pageSize=10&_android=true', function(err, response, body) {
		// console.log(body)
		res.send(body)
	})
});



//好货页面数据---------------------------------------------------------------
app.get("/getGoods", function(req, res) {
	var num = req.query.num;
	// console.log(num)
	res.append("Access-Control-Allow-Origin", "*")
	request('https://s.taobao.com/api?_ksTS=1540382087152_254&callback=jsonp255&ajax=true&m=customized&stats_click=search_radio_all:'+num+'&q=%E7%83%98%E7%84%99%E5%B7%A5%E5%85%B7&s=36&imgfile=&initiative_id=staobaoz_20181024&bcoffset=-1&js=1&ie=utf8&rn=4793d0dfcd6c6eab6d7eb79f8111af81', function(err, response, body) {
		// console.log(body)
		res.send(body)
	})
});



//社区页面数据---------------------------------------------------------------
app.get("/getContent2", function(req, res) {
	var num = req.query.num;
	// console.log(num)
    res.append("Access-Control-Allow-Origin", "*")
	request('https://api.hongbeibang.com/recommend/getContent?type=2&pageIndex='+num+'&pageSize=10&_android=true', function(err, response, body) {
		// console.log(body)
		res.send(body)
	})
});







app.listen(9999)