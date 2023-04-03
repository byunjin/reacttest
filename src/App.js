import React from "react";
import {Routes, Route, Link} from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    // 자바스크립트 안에서 XML 문법을 사용할 수 있게 하는 JSX 임 완벽하게 HTML과 같지 않음 @주의@
    // 리액트는 싱글페이지 어플리케이션임 INDEX.HTML 하나만 쓰고 DIV에 페이지이동마다 해당되는 애들이 들어감 그래서 개빠름 서버사이트렌더링이 아님 클라이언트단에서 처리됨
    <div className="App">
      <nav>
      <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
      <Home/>

    </div>
  );
}

export default App;
