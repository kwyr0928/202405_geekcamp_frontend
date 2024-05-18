// 目標カード
// start_dateとend_dateの型変えて時間計算した方がいいかも

import PropTypes from 'prop-types'; // 型定義
import axios from 'axios';
let haikei = "/src/assets/haikei.png";
let pic = "/src/assets/bakudan.png";

Goal.propTypes = {  // props増やしたら型定義しておく
  name: PropTypes.string,
  description: PropTypes.string,
  start_date: PropTypes.string,
  end_date: PropTypes.string,
};

function Goal({ name, description, start_date, end_date }) {

  const handleClick = () => {
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
    <div className= "flex flex-wrap justify-start items-start min-h-screen bg-cover bg-center p-20">
      <div className="bg-white p-7 rounded-lg relative flex justify-center items-center">
        <img src={pic} className="ml-28 mt-2 mb-8" alt={"爆弾"} style={{ width: '305px', height: '234px' } } />
        <div className="text-left mt-2 text-base absolute bottom-9 left-9">
          <div className="my-10 text-2xl  font-black	">
            <h1>{`名前：${name}`}</h1>
          </div>
          <div className="mb-8 text-2xl font-black">
            <h2>{`目標：${description}`}</h2>
          </div>
          <div className="mb-3 text-sm text-center p-2 bg-white md:w-1/2">
            <h3>{`作成日：${start_date}`}</h3>
          </div>
          <div className="animate-vibrate-1 text-sm text-center p-2 bg-red-500 md:w-1/2 ">
            <button onClick={handleClick}>達成した！</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Goal