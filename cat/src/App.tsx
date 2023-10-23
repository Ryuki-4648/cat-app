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

  const [displayModal01, setdisplayModal01] = useState(false);
  const [displayModal02, setdisplayModal02] = useState(false);
  const [displayModal03, setdisplayModal03] = useState(false);
  const onClickButton01 = () => {
    setdisplayModal01(!displayModal01);
  };
  const onClickButton02 = () => {
    setdisplayModal02(!displayModal02);
  };
  const onClickButton03 = () => {
    setdisplayModal03(!displayModal03);
  };
  const onClickCloseButton = () => {
    setdisplayModal01(false);
    setdisplayModal02(false);
    setdisplayModal03(false);
  };

  return (
    <div className="bg-primary-bg h-screen">
      <header className="App-header">
        <img src={logo} className="w-12" alt="logo" />
      </header>
      <div className="flex justify-center flex-wrap">
        <h1 className="w-full text-center text-xl mb-4">ねこ専用アプリ</h1>
        <p className="w-full text-center mb-8">
          ねこちゃんが好きそうな動きを選んで遊んでみよう。
        </p>

        <div className="border rounded-lg w-1/3 px-8 py-12 flex flex-wrap justify-center">
          <Button className="mb-4" onClick={onClickButton01}>
            にょろにょろ
          </Button>
          <Button className="mb-4" onClick={onClickButton02}>
            跳ねるボール
          </Button>
          <Button className="mb-4" onClick={onClickButton03}>
            鳥の詰め合わせ
          </Button>
          {displayModal01 && (
            <div className="w-5/6 h-5/6 absolute z-10 bg-slate-400 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl p-4">
              modal open1（へびがニョロニョロ動くアニメーション）
              <img src={logo} className="w-12" alt="logo" />
              <button onClick={onClickCloseButton}>close</button>
            </div>
          )}
          {displayModal02 && (
            <div className="w-5/6 h-5/6 absolute z-10 bg-slate-400 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl p-4">
              modal open2（ランダムに動くボール）
              <button onClick={onClickCloseButton}>close</button>
            </div>
          )}
          {displayModal03 && (
            <div className="w-5/6 h-5/6 absolute z-10 bg-slate-400 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl p-4">
              modal open3（左右に動く鳥のアニメーション）
              <button onClick={onClickCloseButton}>close</button>
            </div>
          )}
          <Modal isModalOpen={modalOpen} onModalClose={toggleModal} />
        </div>
      </div>
    </div>
  );
}

export default App;
