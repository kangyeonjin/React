import {NavLink} from 'react-router-dom'

function Navbar(){

    const activeStyle ={
        backgroundColor:'orangered',
    }
    return(
        <div>
            <ul>
                {/* <li><a href={"/"}>home</a></li>
                <li><a href={"/mypage"}>마이페이지</a></li>
                <li><a href={"/login"}>로그인</a></li> */}

                <li><NavLink to="/" style={(isActive)=>isActive? activeStyle: undefined}>home</NavLink></li>
                <li><NavLink to="/mypage" style={({isActive})=>isActive? activeStyle: undefined}>마이페이지</NavLink></li>
                <li><NavLink to="/login" style={({isActive})=>isActive? activeStyle: undefined}>로그인</NavLink></li>

                {/* <li><Link to="/">home</Link></li>
                <li><Link to="/mypage">마이페이지</Link></li>
                <li><Link to="/login">로그인</Link></li> */}


            </ul>
        
        </div>
    )
}

export default Navbar;