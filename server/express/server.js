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