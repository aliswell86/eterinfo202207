import React from 'react';
import App from 'components/App';
// import ReactDOMServer from 'react-dom/server';
import { StaticRouter, matchPath } from 'react-router';
import {Provider} from 'react-redux';
import configure from 'store/configure';
/* react-router-server 의 renderToString 은 비동기로 작동하며,
   데이터 로딩도 관리해줍니다. */
import { renderToString } from 'react-router-server';
import { Helmet } from 'react-helmet';

const render = async (ctx) => {
  const {url} = ctx;
  // 서버사이드에선, 매 요청마다 새 store 를 생성해주어야 합니다.
  const store = configure();
  // context 값을 빈 객체로 설정합니다.
  const context = {};

  const {html} = await renderToString(    
    <StaticRouter location={url} context={context}>
      <Provider store={store}>
        <App/>
      </Provider>
    </StaticRouter>
  );

  // isNotFound 값이 true 라면
  if(context.isNotFound) {
    ctx.status = 404; // HTTP 상태를 404로 설정해줍니다
  }

  // helmet 정보를 가져옵니다
  const helmet = Helmet.renderStatic();

  // 스토어와, 렌더링된 문자열 결과물을 반환합니다
  return {
    html,
    state: store.getState(),
    helmet
  };
};

export default render;