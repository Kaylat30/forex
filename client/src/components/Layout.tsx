import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer2 from "./Footer2";

export default function Layout()
{
    return(
        <>        
            <Header />
            <main className="mt-32">
                <Outlet />
            </main>
            <Footer2 />          
        </>
    )
}