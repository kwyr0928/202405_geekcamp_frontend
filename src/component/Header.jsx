// ヘッダー
import { Link } from 'react-router-dom'; // ページ遷移用タグ

function Header() {
    return (
        <div className="h-28 bg-[#dbdbdb] flex justify-between items-center">
            <h1 className="text-white ml-20 text-4xl font-bold inline_box animate-text-shadow-drop-center">アプリタイトル</h1>
<nav className="flex list-none">
    <li className="mr-20 text-3xl"><Link to={`/123456/top`}>Top</Link></li>
    <li className="mr-20 text-3xl"><Link to={`/123456/personal`}>Personal</Link></li>
    <li className="mr-20 text-3xl"><Link to={`/123456/group`}>Group</Link></li>
    <li  className="mr-20"><img className="size-12" src="/src/assets/icon.png" alt="" /></li>
</nav>
        </div>
    )
}

export default Header;