import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button } from "./components/ui/button/Button";
import { Modal } from "./components/ui/modal/Modal";

function App() {
  return (
    <div className="bg-primary-bg h-screen">
      <header className="App-header">
        <img src={logo} className="w-12" alt="logo" />
      </header>
      <div className="flex justify-center flex-wrap">
        <h1 className="w-full text-center text-3xl mb-4">ねこ専用アプリ</h1>
        <p className="w-full text-center mb-8">
          ねこちゃんが好きそうな動きを選んでください。
        </p>

        <div className="border rounded-lg w-1/3 px-8 py-12 flex flex-wrap justify-center">
          <Button className="mb-4" onClick={toggleModal}>
            にょろにょろ
          </Button>
          <Button className="mb-4">bbbbb</Button>
          <Button>ccc</Button>
          <Modal />
        </div>
      </div>
    </div>
  );
}

export default App;
