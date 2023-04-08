import { Outlet } from "react-router-dom";
import Nav_bar from "../components/Nav_bar";
function Layout(){
        return (
            <div className="home-container">
                <Nav_bar/>
                    
                <>
                    <Outlet/>
                </>

            </div>
        )    
}

export default Layout;