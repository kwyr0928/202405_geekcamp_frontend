// ヘッダー
import { Link } from "react-router-dom"; // ページ遷移用タグ

function Header() {
  const handleImageClick = () => {
    alert("あなたはログイン中です");
  };

  return (
    <div>
      <div className="h-28 bg-[#005222] flex justify-between items-center">
        <h1 className="text-white ml-20 text-4xl font-bold inline_box animate-text-shadow-drop-center">
          <Link to={`/123456/`}>&quot;がんばり&quot;BOX</Link>
        </h1>
        <nav className="flex list-none">
          <li className=" hover:opacity-80 text-white mr-20 text-3xl">
            <Link to={`/123456/top`}>Top</Link>
          </li>
          <li className="hover:opacity-80 text-white mr-20 text-3xl">
            <Link to={`/123456/personal`}>Personal</Link>
          </li>
          <li className="hover:opacity-80 text-white mr-20 text-3xl">
            <Link to={`/123456/group`}>Group</Link>
          </li>
          <li className="hover:opacity-80 mr-20">
            <img
              className="size-12"
              src="/src/assets/icon.png"
              alt=""
              onClick={handleImageClick}
            />
          </li>
        </nav>
      </div>
      <div></div>
    </div>
  );
}

export default Header;
