import React, { useState } from "react";
import logo from "./logo.svg";
import image01 from "./assets/img/image01.png";
import logo01 from "./assets/img/logo01.png";
import "./App.css";
import { Button } from "./components/ui/button/Button";
import { Modal } from "./components/ui/modal/Modal";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [overlay, setOverlay] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const [displayModal01, setdisplayModal01] = useState(false);
  const [displayModal02, setdisplayModal02] = useState(false);
  const [displayModal03, setdisplayModal03] = useState(false);
  const onClickButton01 = () => {
    setdisplayModal01(true);
    setModalOpen(true);
    setdisplayModal02(false);
    setdisplayModal03(false);
    setOverlay(true);
  };
  const onClickButton02 = () => {
    setdisplayModal02(true);
    setModalOpen(true);
    setdisplayModal01(false);
    setdisplayModal03(false);
    setOverlay(true);
  };
  const onClickButton03 = () => {
    setdisplayModal03(true);
    setModalOpen(true);
    setdisplayModal02(false);
    setdisplayModal01(false);
    setOverlay(true);
  };
  const onClickCloseButton = () => {
    setModalOpen(false);
    setOverlay(false);
  };

  const onClickOverlay = () => {
    setModalOpen(false);
    setOverlay(false);
  };

  return (
    <div className="bg-primary-bg h-screen">
      <header className="App-header">
        <img src={logo} className="w-12" alt="logo" />
      </header>
      <div className="flex justify-center flex-wrap">
        <h1 className="w-full text-center text-xl mb-4 mx-auto">
          <img src={logo01} alt="" className="mx-auto" />
        </h1>

        <img src={image01} alt="" className="w-24" />
        <p className="w-full text-center mb-8 mt-8">
          ねこちゃんが好きそうな動きを選んで遊んでみよう。
        </p>

        <div className="w-1/3 shadow-sm bg-white px-4 py-2">
          <div className="flex flex-wrap justify-center">
            <Button
              className="mb-4 text-white font-bold"
              onClick={onClickButton01}
            >
              にょろにょろ
            </Button>
            <Button
              className="mb-4 text-white font-bold"
              onClick={onClickButton02}
            >
              跳ねるボール
            </Button>
            <Button
              className="mb-4 text-white font-bold"
              onClick={onClickButton03}
            >
              鳥の詰め合わせ
            </Button>
          </div>

          {overlay && (
            <div
              className="w-full h-full absolute z-0 bg-black opacity-80 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
              onClick={onClickOverlay}
            ></div>
          )}

          {modalOpen && (
            <div className="w-5/6 h-5/6 absolute z-10 bg-slate-400 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl p-4">
              {displayModal01 && (
                <div>
                  modal open1（へびがニョロニョロ動くアニメーション）
                  <img src={logo} className="w-12 animation01" alt="" />
                </div>
              )}
              {displayModal02 && (
                <div>
                  modal open2（ランダムに動くボール）
                  <img src={logo} className="w-12 animation02" alt="" />
                </div>
              )}
              {displayModal03 && (
                <div>
                  modal open3（左右に動く鳥のアニメーション）
                  <img src={logo} className="w-12 animation03" alt="" />
                </div>
              )}
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
