import logo from './logo.svg';
import React, { Suspense } from 'react'
import Applayout from './/AppLayout.js';
import './App.css';
import Loading from './Loading';
const LazyApp = React.lazy(() => import('./AppLayout.js'));
function App() {
  return (
    <div className="App">
      <Suspense fallback={<Loading />}>
        <LazyApp />
      </Suspense>
    </div>
  );
}

export default App;
