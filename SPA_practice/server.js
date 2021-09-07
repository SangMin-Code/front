const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

const static_path = path.resolve(__dirname, 'frontend', 'static');
const index_path = path.resolve(__dirname, 'frontend', 'index.html');
const test_path = path.resolve(__dirname, 'server', 'static');

app.use(cors());
app.use('/static', express.static(static_path));
app.use('/test', express.static(test_path));
app.get('/*', (req, res) => {
	res.sendFile(index_path);
});

app.listen(process.env.PORT || 8080, () => {
	console.log('Server running');
});

// static: img css,js 파일과 같은 정적 파일을 제공하는데 사용하는 미들웨어 함수
// express.static 함수에 제공되는 경로는 node 프로세스가 실행되는 디렉토리에 대해
// 상대적이므로 express 앱을 다른 디렉토리에서 실행하는 경우, 절대 경로를 사용하는 것이 더 안전
// URL마다 불러오는 JS를 다르게 제공하여 SPA 구현
