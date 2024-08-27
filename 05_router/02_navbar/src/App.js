
import Layout from "./layouts/Layout";
import Main from "./pages/Main"
import Login from './pages/Login'
import Mypage from './pages/MyPage'
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
  <>
  {/* <BrowserRouter>
  <Routes>
    <Route path="/" element={<Layout/>}>
      <Route index element={<Main/>}/>
      <Route path="login" element={<Login/>}/>
      <Route path="Mypage" element={<Mypage/>}></Route>
  </Route>
  </Routes>
  </BrowserRouter> */}

<BrowserRouter>
  <Routes>
    
    <Route path="/parent" element={<Layout/>}>
      <Route index element={<Main/>}/>
      <Route path="login" element={<Login/>}/>
      <Route path="Mypage" element={<Mypage/>}></Route>
  </Route>
  </Routes>
  </BrowserRouter>

  </>
  );
}

export default App;
