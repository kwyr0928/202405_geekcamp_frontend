// トップ画面の箱

import PropTypes from 'prop-types'; // 型定義
import { Link } from 'react-router-dom'; // ページ遷移用タグ
let hako = "/src/assets/box_brown.png";

Box.propTypes = { // props増やしたら型定義しておく
  name: PropTypes.string,
  url: PropTypes.string,
  color: PropTypes.string,
  description: PropTypes.string
};

function Box({ name, url, color, description }) {
  return (
    <div className="m-4 flex flex-col flex-wrap items-center" style={{ position: 'relative' }}>
      <Link to={`/applink/${url}`} style={{ position: 'relative' }} className='inline-box animate-jello-horizontal'>
        <img src={hako} alt={`${name}用の画像`} style={{ width: '830px', height: '550px' }} />
          <div style={{position: 'absolute', top: '64%', left: '48%', transform: 'translate(-50%, -50%)', color: 'white', fontSize: '45px', fontWeight: 'bold' }}>
            <span style={{ color: color }}>　 　　 　{name}の</span>
            <br />
            <span style={{ color: '#8b4513' }}>　　　{'"がんばり"'}</span>
            <br />
            <span style={{ color: '#8b4513' }}>　　 　　　 BOX</span>
          </div>
      </Link>
        <div className="text-center mt-2 font-semibold text-4xl">
          <span style={{ color: '#056405' }}>{description}</span>
        </div>
    </div>
  )
}

export default Box