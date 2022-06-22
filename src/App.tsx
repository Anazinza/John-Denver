import React from 'react';
import { RecoilRoot } from 'recoil';
import GlobalStyle from './globalStyle';
import RootRouter from './routes/RootRoute';

function App() {
  return (
    <div>
      <RecoilRoot>
        <RootRouter />
        <GlobalStyle />
      </RecoilRoot>
    </div>
  );
}

export default App;
