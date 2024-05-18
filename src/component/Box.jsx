// トップ画面の箱

import PropTypes from 'prop-types'; // 型定義
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // ページ遷移用タグ
let hako = "/src/assets/box_brown.png";

Box.propTypes = { // props増やしたら型定義しておく
  name: PropTypes.string,
  url: PropTypes.string,
  color: PropTypes.string,
  description: PropTypes.string
};

function Box({ name, url, color, description }) {
  const [icon, setIcon] = useState("/src/assets/PersonalIcon.png");
  useEffect(() => {
    if(name === "友達"){
      setIcon("/src/assets/GroupIcon.png");
    }
  },[]);

  
  return (
    <div className="m-4 flex flex-col flex-wrap items-center" style={{ position: 'relative' }}>
      <Link to={`/applink/${url}`} style={{ position: 'relative' }} className='inline-box animate-jello-horizontal'>
        <img src={hako} className="hover:opacity-90" alt={`${name}用の画像`} style={{ width: '830px', height: '550px' }} />
        <div className='text-right' style={{ position: 'absolute', top: '60%', left: '28%', transform: 'translate(-50%, -50%)', color: 'white', fontSize: '45px', fontWeight: 'bold' }}>
        <img src={icon} className="hover:opacity-90 " alt={`${name}用の画像`} style={{ width: '150px', height: '150px' }} />
        </div>
        <div className='text-right' style={{ position: 'absolute', top: '62%', left: '54%', transform: 'translate(-50%, -50%)', color: 'white', fontSize: '45px', fontWeight: 'bold' }}>
          <span style={{ color: color }}>{name}の</span>
          <br />
          <span style={{ color: '#8b4513' }}>{'"がんばり"'}</span>
          <br />
          <span style={{ color: '#8b4513' }}>BOX</span>
        </div>
      </Link>
      <div className="text-center mt-2 font-semibold text-4xl">
        <span className='animate-tracking-in-expand' style={{ color: '#056405' }}>{description}</span>
      </div>
    </div>
  )
}

export default Box