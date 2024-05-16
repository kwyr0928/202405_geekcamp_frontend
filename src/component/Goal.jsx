// 目標カード
// start_dateとend_dateの型変えて時間計算した方がいいかも

import React from 'react'; 
import PropTypes from 'prop-types'; // 型定義
let pic = "/src/assets/bakudan.png";

Goal.propTypes = {  // props増やしたら型定義しておく
  name: PropTypes.string,
  description: PropTypes.string,
  start_date: PropTypes.string,
  end_date: PropTypes.string,
};

function Goal({ name, description, start_date, end_date }) {
  return (
      <div class="box">
        <img src={pic} alt={"爆弾"} style={{ width: '200px', height: '200px' }} />
        <h1>{`名前：${name}`}</h1>
        <h2>{`目標：${description}`}</h2>
        <h3>{`開始：${start_date}`}</h3>
        <h3>{`締切：${end_date}`}</h3>
    </div>
  )
}

export default Goal