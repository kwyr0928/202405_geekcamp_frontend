// 目標カード
// start_dateとend_dateの型変えて時間計算した方がいいかも

import PropTypes from "prop-types"; // 型定義
import { useEffect, useState } from "react";
let pic = "/src/assets/bakudan.png";

Goal.propTypes = {
  // props増やしたら型定義しておく
  name: PropTypes.string,
  description: PropTypes.string,
  start_date: PropTypes.string,
  deadline_date: PropTypes.string,
  opacity: PropTypes.number,
};

function Goal({ name, description, start_date, deadline_date }) {
  const [color, setColor] = useState(
    "bg-red-500 border-b-red-700 disabled:border-0 disabled:bg-red-500  active:bg-red-800"
  );
  const [message, setMessage] = useState("応援する！");

  useEffect(() => {
    if (name === "りょうた") {
      setMessage("達成した！");
      setColor(
        "bg-purple-500 border-b-purple-700 disabled:border-0 disabled:bg-purple-500  active:bg-purple-800"
      );
    } else {
      setMessage("応援する！");
    }
  }, []);

  const handleClear = () => {
    console.log("目標削除しちゃうよーーん！");
    // axios.post('/status', {
    //   name: name,
    //   goal: description
    // })
    // .then(function (response) {
    //   console.log(response);
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });
  };

  const handleClick = () => {
    console.log(
      "達成したよーーん！→エラーなるからとりあえず変数使っとく" + deadline_date
    );

    if (name === "りょうた") {
      setMessage("達成済！えらいね");
      setColor(
        "bg-yellow-500 border-b-yellow-700 disabled:border-0 disabled:bg-yellow-500  active:bg-yellow-800"
      );
    } else {
      setMessage("応援済！がんばろう");
      setColor(
        "bg-yellow-500 border-b-yellow-700 disabled:border-0 disabled:bg-yellow-500  active:bg-yellow-800"
      );
    }

    // axios.post('/status', {
    //   name: name,
    //   goal: description
    // })
    // .then(function (response) {
    //   console.log(response);
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });
  };

  return (
    <div className="flex flex-wrap justify-start items-start bg-cover bg-center p-10">
      <div
        className={`animate-shadow-drop-center bg-white/75 p-7 rounded-lg relative flex justify-center items-center`}
      >
        <div className="animate-wobble-hor-bottom">
          <img
            src={pic}
            className="relative ml-28 mt-2  animate-wobble-hor-bottom"
            alt={"爆弾"}
            style={{ width: "345px", height: "274px" }}
          />
          <div className="absolute bg-white w-28  right-1.5 top-[203px] -rotate-[2deg] ">
            <p className=" text-sm text-center p-2 ">{`${deadline_date}`}</p>
          </div>
        </div>
        <div className="text-left mt-2 text-base absolute bottom-9 left-9">
          <img
            className="size-10"
            src="/src/assets/clear.png"
            style={{ position: "absolute", left: "150%" }}
            alt=""
            onClick={handleClear}
          />
          <div className="mt-10 mb-5 text-2xl  font-black">
            <h1>{`名前：${name}`}</h1>
          </div>
          <div className="mb-9 text-2xl font-black">
            <h2>{`目標：${description}`}</h2>
          </div>
          <div className="mb-8 opacity-75 text-lg">
            <h3>{`作成日：${start_date}`}</h3>
          </div>
          <div className="flex h-12 justify-left gap-x-6 dark:text-white">
            <a
              className={`w-64 group flex h-min items-center disabled:opacity-50 disabled:hover:opacity-50 hover:opacity-95 justify-center ring-none rounded-lg shadow-lg font-semibold py-2 px-4 font-dm focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2
             disabled:text-white ring-white text-white border-b-4  active:border-0 hover:text-gray-100 focus-visible:outline-violet-500 text-sm sm:text-base ${color}`}
              onClick={handleClick}
            >
              {message}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Goal;
