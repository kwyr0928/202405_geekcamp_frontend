
import React, { useState } from 'react';
import PropTypes from 'prop-types'; // 型定義
import { Link } from 'react-router-dom'; // ページ遷移用タグ
import { Button } from "@yamada-ui/react"
import { Autocomplete, AutocompleteOptionGroup, AutocompleteOption } from "@yamada-ui/react"
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
        <div className="flex flex-col justify-center min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${haikei})` }}>
            <ul>
        {/* {logins.map((login) => (
          <li key={login.line_user_id}>
          {login.line_user_name}
          </li>
        ))} */}
      </ul>

        <Autocomplete focusBorderColor="green.700" placeholder="自分の名前を選択" emptyMessage="名前が存在しません" size="lg" onChange={(value) => handleLogin(value)}>
        <AutocompleteOption value="しおん">しおん</AutocompleteOption>
        <AutocompleteOption value="ゆり">ゆり</AutocompleteOption>
        <AutocompleteOption value="まお">まお</AutocompleteOption>
        <AutocompleteOption value="あさい">あさい家に帰ってください</AutocompleteOption>
        <AutocompleteOption value="ゆーき">ゆーき</AutocompleteOption>
        </Autocomplete>

            <div className="container">
                <Link to={{ pathname: "/applink/top", state: { userId: userId } }} style={{ textDecoration: 'none' }}>
                <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Login
                </Button>
                </Link>
            </div>
        </div>
    )
  }
  
  export default LoginMain
