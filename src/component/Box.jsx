// トップ画面の箱

import PropTypes from 'prop-types'; // 型定義
import { Link } from 'react-router-dom'; // ページ遷移用タグ
let hako = "/src/assets/box_brown.png";

Box.propTypes = { // props増やしたら型定義しておく
  name: PropTypes.string,
  url: PropTypes.string
};

function Box({ name, url }) {
  return (
    <div className="m-4 flex flex-col flex-wrap items-center">
      <Link to={`/applink/${url}`} className='inline-box animate-jello-horizontal'>
        <img src={hako} className=""  alt={`${name}用の画像`} style={{ width: '470px', height: '400px' }} />
      </Link>
        <div className="text-center mt-2 font-semibold text-xl">{`${name}を確認できるよ！`}</div>
    </div>
  )
}
export default Box