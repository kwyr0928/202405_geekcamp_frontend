//ログイン画面 main
import { Autocomplete, AutocompleteOption, Button } from "@yamada-ui/react";
import PropTypes from 'prop-types'; // 型定義
import { useState } from 'react';
import { Link } from 'react-router-dom'; // ページ遷移用タグ
let haikei = "/src/assets/haikei2.png";

// import { useEffect, useState } from 'react';
// import axios from 'axios';

Button.propTypes = { // props増やしたら型定義しておく
  url: PropTypes.string
};


function LoginMain() {
  const [userId, setUserId] = useState("");

  const handleLogin = (value) => {
    setUserId(value); // useStateで格納
    console.log(userId);
  }
  // const [logins, setLogins] = useState([]);

  //    useEffect(() => {
  //       axios
  //         .get("groups/")
  //         .then((response) => {
  //           setLogins(response.data);
  //         })
  //         .catch((error) => {
  //           console.log("fetchエラー" + error);
  //         });
  //     }, []);


    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${haikei})` }} >
            <ul>
        {/* {logins.map((login) => (
          <li key={login.line_user_id}>
          {login.line_user_name}
          </li>
        ))} */}
      </ul>
      
      <div className="text-center font-bold text-5xl mt-8 mb-16">
          {<span className="animate-tracking-in-expand" style={{ color: '#258425' }}>appnameにログインしよう！</span>}
        </div>


        <Autocomplete focusBorderColor="green.700" placeholder="自分の名前を選択" emptyMessage="名前が存在しません" size="lg" onChange={(value) => handleLogin(value)} className="mb-4 bg-white w-full max-w-md" style={{ width: '400px' }}>
        <AutocompleteOption value="しおん">しおん</AutocompleteOption>
        <AutocompleteOption value="ゆり">ゆり</AutocompleteOption>
        <AutocompleteOption value="まお">まお</AutocompleteOption>
        <AutocompleteOption value="あさい">あさい早くしてください</AutocompleteOption>
        <AutocompleteOption value="ゆーき">ゆーき</AutocompleteOption>
      </Autocomplete>

      <div className="container text-center">
        <Link to={{ pathname: "/applink/top", state: { userId: userId } }} style={{ textDecoration: 'none' }}>
          <Button style={{ backgroundColor: '#005222', color: 'white' }} className="text-whitebg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded">
            Login
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default LoginMain
