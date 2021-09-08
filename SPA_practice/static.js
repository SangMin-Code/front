'use strict';

const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const port = process.env.port || 8080;
const filePath = path.resolve(__dirname, 'static.html');

app.use(cors());

let options = {};
app.use(express.static('public', options));

app.get('/', (req, res) => {
	res.sendFile(filePath);
});

app.listen(port);

// request가 들어올때 맞춰서 변하는 데이터가 아닌 정적인 데이터를 보내줄 때 사용
// middleware
// express static에 설정한 directory 에서 resource를 제공
