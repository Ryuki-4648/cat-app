import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button } from "./components/ui/button/Button";
import { Modal } from "./components/ui/modal/Modal";

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const [displayModal, setDisplayModal] = useState(false);
  const onClickButton = () => {
    setDisplayModal(!displayModal);
  };

  return (
    <div className="bg-primary-bg h-screen">
      <header className="App-header">
        <img src={logo} className="w-12" alt="logo" />
      </header>
      <div className="flex justify-center flex-wrap">
        <h1 className="w-full text-center text-xl mb-4">ねこ専用アプリ</h1>
        <p className="w-full text-center mb-8">
          ねこちゃんが好きそうな動きを選んでください。
        </p>

        <div className="border rounded-lg w-1/3 px-8 py-12 flex flex-wrap justify-center">
          <Button className="mb-4">にょろにょろ</Button>
          <Button className="mb-4">bbbbb</Button>
          <Button>ccc</Button>
          <Modal isModalOpen={modalOpen} onModalClose={toggleModal} />
          <button onClick={onClickButton}>click</button>
          {displayModal && (
            <div className="w-5/6 h-5/6 absolute z-10 bg-slate-400 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl p-4">
              modal open
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
