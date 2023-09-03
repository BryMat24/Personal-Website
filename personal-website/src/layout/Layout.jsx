import { Outlet } from "react-router-dom";
import Menu from "../components/Menu";

const Layout = () => {
    return (
        <div className="page-container">
            <div className="bryan-home-image">ini image</div>
            <div className="page-content">
                <Menu />
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;
