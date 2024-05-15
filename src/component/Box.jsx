import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

Box.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string
};

function Box({ name, url }) { // トップ画面の箱


    return (
      <div>
       <Link to={`/123456/${url}`}>{ `${name}用` }</Link>
      </div>
    )
  }


  
  export default Box