// ルーティングの設定

import { Route, Routes } from "react-router-dom";
import Group from "./Group";
import Personal from "./Personal";
import Top from "./Top";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Top />} />
            <Route path="/:id" element={<Top />} />
            <Route path="/:id/personal" element={<Personal />} />
            <Route path="/:id/group" element={<Group />} />
        </Routes>
    );
};

export default AppRoutes;