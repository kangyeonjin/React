import Header from "../components/Header"
import Navbar from "../components/Navbar"
import {Outlet} from "react-router-dom"

//outlet : react-router-dom에서 지원하는 기능으로 부모인 layout컴포넌트가 랜더링되는순간
//자식경로의 컴포넌트를 바꿔치기해서 랜더링할수있다

function Layout(){
    return(
        <>
        <Header/>
        <Navbar/>
        <Outlet/>
        {/*바뀔부분 */}
        </>
    )
}

export default Layout;