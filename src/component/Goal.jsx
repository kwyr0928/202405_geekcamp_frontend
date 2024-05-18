// 目標カード
// start_dateとend_dateの型変えて時間計算した方がいいかも

import PropTypes from 'prop-types'; // 型定義
let pic = "/src/assets/bakudan.png";

Goal.propTypes = {  // props増やしたら型定義しておく
  name: PropTypes.string,
  description: PropTypes.string,
  start_date: PropTypes.string,
  end_date: PropTypes.string,
  opacity: PropTypes.number,
};

function Goal({ name, description, start_date, end_date }) {



  const handleClick = () => {
    console.log("達成したよーーん！→エラーなるからとりあえず変数使っとく" + end_date);
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
      <div className={`bg-white/75 p-7 rounded-lg relative flex justify-center items-center`}>
        <div className="animate-wobble-hor-bottom">
          <img src={pic} className="relative ml-28 mt-2 mb-8 animate-wobble-hor-bottom" alt={"爆弾"} style={{ width: '315px', height: '234px' } } />
          <div className="absolute bg-white px-5 py-0 right-2 top-[176px] -rotate-[2deg] ">
            <p className=" text-sm text-center p-2 ">00:00</p>
          </div>
        </div>
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
          <div className="flex h-12 justify-center gap-x-6 dark:text-white">
            <a className="group flex h-min items-center disabled:opacity-50 disabled:hover:opacity-50 hover:opacity-95 justify-center ring-none rounded-lg shadow-lg font-semibold py-2 px-4 font-dm focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-red-500 border-b-red-700 disabled:border-0 disabled:bg-red-500 disabled:text-white ring-white text-white border-b-4 hover:border-0 active:border-0 hover:text-gray-100 active:bg-red-800 focus-visible:outline-violet-500 text-sm sm:text-base" onClick={handleClick}>達成した！
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Goal