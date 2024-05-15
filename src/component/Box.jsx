// トップ画面の箱

import PropTypes from 'prop-types'; // 型定義
import { Link } from 'react-router-dom'; // ページ遷移用タグ

Box.propTypes = { // props増やしたら型定義しておく
  name: PropTypes.string,
  url: PropTypes.string
};

function Box({ name, url }) {
  return (
    <div>
      <Link to={`/123456/${url}`}>{`${name}用`}</Link>
    </div>
  )
}
export default Box