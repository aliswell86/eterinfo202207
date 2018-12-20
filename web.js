require('dotenv').config();

const Koa = require('koa');
const serve = require('koa-static');
const path = require('path');
const mongoose = require('mongoose');
const fs = require('fs');

const app = new Koa();

const indexHtml = fs.readFileSync(path.resolve(__dirname, './views/build/index.html'), { encoding: 'utf8' });

mongoose.Promise = global.Promise; // Node의 Promise를 사용하도록 설정
mongoose.connect('mongodb://my_mean:dlskdud1@ds121321.mlab.com:21321/my_mean').then(() => {
  console.log('connected to mongodb');
}).catch((e) => {
  console.error(e);
});

app.use(serve(path.resolve(__dirname, './views/build')));
app.use(ctx => {
  ctx.body = indexHtml;
});

app.listen(8002, () => {
  console.log('listening to port 8002');
});