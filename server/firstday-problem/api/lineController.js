'use strict';

var request = require('request');

const HEADERS = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ObH2hrvK7Udl3sR9Jq14A70ia9nyQNsTHmjoJ7+hQyiMVmf7Hf3kLgIIfWmKevyYtMt5FzdzpjxDaNDiwZFq/2U7XWOXE8APoN4cPPm0CdMroAsigHxEisVdfe+JX1D9d/8QlTjHAHnU4snLwm5wnAdB04t89/1O/w1cDnyilFU='
}

exports.pushBlock = function (req, res) {
    let msg = 'Hello World!';
    push(msg);
    res.send(msg);
}

exports.replyBlock = function (req, res) {
    let reply_token = req.body.events[0].replyToken;
    let msg = JSON.stringify(req.body.events[0]);
    reply(reply_token, msg);
}

function push(msg) {
    let body = JSON.stringify({
        to: 'U539f65cbe461926361be96e4312066e3',
        messages: [
            {
                type: 'text',
                text: msg
            }
        ]
    })
    curl('push', body)
}

function reply(reply_token, msg) {
    let body = JSON.stringify({
        replyToken: reply_token,
        messages: [
            {
                type: 'text',
                text: msg
            }
        ]
    })
    curl('reply', body);
}

function curl(method, body) {
    request.post({
        url: 'https://api.line.me/v2/bot/message/' + method,
        headers: HEADERS,
        body: body
    }, (err, res, body) => {
        console.log('status = ' + res.statusCode)
    });
}