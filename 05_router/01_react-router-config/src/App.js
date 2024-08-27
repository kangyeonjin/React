import {Menu} from './pages/Menu';
import Main from './pages/Main';
import About from './pages/About';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

//exprot :컴포넌트를 다른파일에서 사용하고 싶을때 내보내는 역할
// 1.function 바로옆에 붙이면 객체형태로 묶어서 내보내기 때문에 import할때 구조분해할당을 해줘야함 
//2.하단에 export default[컴포넌트 이름]으로 사용할때는 default로 지정하기때문에
//import할떄 구조분해 할당을 하지 않아도 된다
//import:외부에 있는 컴포넌트를 가져오는역할
//  ./ :현재 파일의 위치
// ..//:상위폴더 위치

// function App() {
//   return (
//     <>
//       <h1>앗녕</h1>
//       <Main/>
//       <About/>
//       <Menu/>
//     </>
//   );
// }


/*라우팅
:어떤 요청을 어디로 안내 및 매핑을 할것인지 정해놓고 진행하는것
리엑트에서는 요청에 따라 요청에 매핑된 컴포넌트를 렌더링한다 */

// BrowserRouter:라우팅이 필요한 컴포넌트들을 감싸는 컴포넌트
// Routes: rutes들을 묶어주는 단위(컴포넌트)
// Route : url요청주소와 컴포넌트를 매핑해주는단위


function App (){
  return(
    <>
  <BrowserRouter>
  <Routes>

  {/* <Route path='/' element={<Main/>}/> */}
  <Route index element={<Main/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/menu' element={<Menu/>}/>

  </Routes>
  </BrowserRouter>
    </>
  )
}

export default App;
