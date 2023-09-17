import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="w-12" alt="logo" />
      </header>
      <div className="flex justify-center flex-wrap">
        <h1 className="w-full text-center text-3xl mb-4">ねこ専用アプリ</h1>
        <p className="w-full text-center mb-8">ねこちゃんが好きそうな動きを選んでください。</p>

        <button className="w-40">aaa</button>
        <button>aaa</button>
        <button>aaa</button>
      </div>
    </div>
  );
}

export default App;
