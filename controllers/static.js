var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var favicon = require('serve-favicon');


router.use(bodyParser.json());
router.use(express.static('styles'));
router.use(express.static('gfx'));
router.use(express.static('dom'));
router.use(express.static('views'));
router.use(express.static('ng'));
router.use(express.static('assets'));
router.use(favicon(__dirname + '/../gfx/favicon.ico'));




router.get('/', function(req,res){
    res.sendfile("views/layouts/app.html");
})
router.get('/gate', function(req,res){
    res.sendfile('views/layouts/gate.html')
})


module.exports = router;