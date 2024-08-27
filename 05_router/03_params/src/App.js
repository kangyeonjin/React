import Main from "./pages/Main"
import Layout from "./layouts/Layout";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from "./pages/Login";

function App() {
  return (

    <>
  
    <BrowserRouter>
    <Routes>

    <Route path="/" element={<Main/>}/>
    <Route path="/parent" element={<Layout/>}/>
    <Route path="/Login" element={<Login/>}/>

    </Routes>
    </BrowserRouter>
    </>
    
  );
}

export default App;
