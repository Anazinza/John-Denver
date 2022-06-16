import React from 'react';
import GlobalStyle from './globalStyle';
import RootRouter from './routes/RootRoute';

function App() {
  return (
    <div>
      <RootRouter />
      <GlobalStyle />
    </div>
  );
}

export default App;
