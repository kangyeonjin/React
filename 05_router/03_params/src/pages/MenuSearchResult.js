import { useSearchParams } from "react-router-dom";
import { searchMenu } from "../api/MenuAPI";
import { useEffect, useState } from "react";
import MenuItem from "../components/MenuItem";
import boxStyle from './Menu.module.css';

function MenuSearchResult(){

    const [searchParam] =useSearchParams();

    // console.log(searchParam.get('menuName'));

    //검색어를 받아옴
    //검색어를 기준을 데이터에서 찾아오기
    const searchMenuName = searchParam.get('menuName');
    // searchMenu(searchMenuName);
    
    const [menuList, setMenuList] = useState([]);
    useEffect(
        ()=>{
            setMenuList(searchMenu(searchMenuName));  
        },[]
    )

    return(
        <>
        <h1>검색결과</h1>
        <div className="{boxStyle.MenuBox}">
            {menuList.map(menu => <MenuItem key={menu.menuCode} menu={menu}/>)}
        </div>
        </>
    )
}

export default MenuSearchResult;