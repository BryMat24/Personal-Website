import { Outlet } from "react-router-dom";
import Menu from "../components/Menu";
import Cursor from "../components/Cursor";

const Layout = () => {
    return (
        <>
            <Menu />
            <Outlet />
            <Cursor />
        </>
    );
};

export default Layout;
