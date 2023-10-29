import React, { useState } from "react";
import logo from "./logo.svg";
import headerImage from "./assets/img/image01.png";
import game01image01 from "./assets/img/game01_image01.png";
import game01image02 from "./assets/img/game01_image02.png";
import game01image03 from "./assets/img/game01_image03.png";
import logo01 from "./assets/img/logo01.png";
import "./App.css";
import { Button } from "./components/ui/button/Button";
// import { Modal } from "./components/ui/modal/Modal";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [overlay, setOverlay] = useState(false);

  // const toggleModal = () => {
  //   setModalOpen(!modalOpen);
  // };

  const [displayModal01, setdisplayModal01] = useState(false);
  const [displayModal02, setdisplayModal02] = useState(false);
  const [displayModal03, setdisplayModal03] = useState(false);
  const onClickButton01 = () => {
    setdisplayModal01(true);
    setModalOpen(true);
    setOverlay(true);
  };
  const onClickButton02 = () => {
    setdisplayModal02(true);
    setModalOpen(true);
    setOverlay(true);
  };
  const onClickButton03 = () => {
    setdisplayModal03(true);
    setModalOpen(true);
    setOverlay(true);
  };
  const onClickCloseButton = () => {
    setModalOpen(false);
    setdisplayModal01(false);
    setdisplayModal02(false);
    setdisplayModal03(false);
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

        <img src={headerImage} alt="" className="w-24" />
        <p className="w-full text-center mb-8 mt-8">
          ねこちゃんが好きそうな動きを選んで遊んでみよう。
          <br />
          下のゲームほど動きが速くなるよ。
        </p>

        <div className="w-1/3 shadow-sm bg-white px-4 py-2">
          <div className="flex flex-wrap justify-center">
            <Button
              className="mb-4 text-white font-bold"
              onClick={onClickButton01}
            >
              ゆらゆら
            </Button>
            <Button
              className="mb-4 text-white font-bold"
              onClick={onClickButton02}
            >
              すいすい
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
              onClick={onClickCloseButton}
            ></div>
          )}

          {modalOpen && (
            <div className="w-5/6 h-5/6 absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              {displayModal01 && (
                <div className="relative w-full h-full p-6 bg-primary-game01bg rounded-2xl">
                  <p className="text-lg leading-loose tracking-wider">
                    チンアナゴの親子とニシキアナゴのおともだち、
                    <br />
                    いつも海の中でゆらゆら。
                    <br />
                    たまにけんかもするけれど、今日はなかよし。
                  </p>
                  <img
                    src={game01image01}
                    className="w-24 game01animation01 absolute bottom-2 left-1/3"
                    alt=""
                  />
                  <img
                    src={game01image02}
                    className="w-24 game01animation02 absolute bottom-5 left-1/2"
                    alt=""
                  />
                  <img
                    src={game01image03}
                    className="w-20 game01animation03 absolute bottom-6 left-1/4"
                    alt=""
                  />
                </div>
              )}
              {displayModal02 && (
                <div className="relative w-full h-full p-6 bg-primary-game02bg rounded-2xl overflow-hidden">
                  <p>池の中の鯉、ランダムに動く</p>
                  <img
                    src={logo}
                    className="w-12 absolute game02animation01"
                    alt=""
                  />
                  <img
                    src={logo}
                    className="w-12 absolute game02animation02"
                    alt=""
                  />
                </div>
              )}
              {displayModal03 && (
                <div>
                  にゃんだろ〜光線（すばやく動く光）
                  <img src={logo} className="w-12 animation03" alt="" />
                </div>
              )}
              <button onClick={onClickCloseButton}>close</button>
            </div>
          )}
          {/* <Modal isModalOpen={modalOpen} onModalClose={toggleModal} /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
