import React from 'react';
import App from 'components/App';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router';
import {Provider} from 'react-redux';
import configure from 'store/configure';

/* react-router-server 의 renderToString 은 비동기로 작동하며,
   데이터 로딩도 관리해줍니다. */
import { renderToString } from 'react-router-server';

const render = async (location) => {
  // 서버사이드에선, 매 요청마다 새 store 를 생성해주어야 합니다.
  const store = configure();

  const {html} = await renderToString(    
    <StaticRouter location={location}>
      <Provider store={store}>
        <App/>
      </Provider>
    </StaticRouter>
  );

  // 스토어와, 렌더링된 문자열 결과물을 반환합니다
  return {
    html,
    state: store.getState()
  };
};

export default render;