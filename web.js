require('dotenv').config();

const Koa = require('koa');
const gzip = require('koa-gzip');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const serve = require('koa-static');
const path = require('path');
const mongoose = require('mongoose');
const fs = require('fs');
const api = require('./src/api');
const session = require('koa-session');

const app = new Koa();
const router = new Router();

const ssr = require('./ssr');

// const indexHtml = fs.readFileSync(path.resolve(__dirname, './views/build/index.html'), { encoding: 'utf8' });

mongoose.Promise = global.Promise; // Node의 Promise를 사용하도록 설정
mongoose.connect('mongodb+srv://my_mean:dlskdud1@my-mean.yp0u2.mongodb.net/my_mean?retryWrites=true&w=majority', {useNewUrlParser: true}).then(() => {
  console.log('connected to mongodb');
}).catch((e) => {
  console.error(e);
});

app.use(gzip());
app.use((ctx, next) => {
  if(ctx.path === '/') return ssr(ctx);
  return next();
});

app.use(serve(path.resolve(__dirname, './views/build')));
app.use(serve(path.resolve(__dirname, './public')));
// 라우터 적용 전에 bodyParser 적용
app.use(bodyParser());

const sessionConfig = {maxAge: 86400000};
app.use(session(sessionConfig, app));
app.keys = ['ETERINFO'];

// app 인스턴스에 라우터 적용
app.use(router.routes()).use(router.allowedMethods());
app.use(ssr);

// 라우터 설정
router.use('/api', api.routes()); // api 라우트 적용

app.listen(8002, () => {
  console.log('listening to port 8002');
});
