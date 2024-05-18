// ルーティングの設定 変更しない

import { Route, Routes } from "react-router-dom";
import Group from "./Group";
import Login from "./Login";
import Personal from "./Personal";
import Top from "./Top";

export const AppRoutes = () => {
    return (
        <Routes >
            <Route path="/" element={<Login />} />
            {/* グループごとにurlを変更 */}
            <Route path="/:id" element={<Login />} />
            {/* ホームページ */}
            <Route path="/:id/top" element={<Top />} />
            {/* 個人用ページ */}
            <Route path="/:id/personal" element={<Personal />} />
            {/* グループ用ページ */}
            <Route path="/:id/group" element={<Group />} />
        </Routes>
    );
};

export default AppRoutes;