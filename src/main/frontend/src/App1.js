
// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
// import Home from './view/home';
// import About from './view/about';
// import Profile from './view/profile';
// import Axios from './view/axios';

// import Frame3 from './view/frame3';
// import Frame4 from './view/frame4';
// import Frame5 from './view/frame5';
// import Frame6 from './view/frame6';
//   /*Link를 사용하면 A태그와 달리 새로고침이 없어서 부드러운 전환이 가능하다*/
//   /*JS에서 Export할때는 항상 첫글자가 대문자여야 오류가 발생하지 않는다*/

// function App() {
//   return (
//   <BrowserRouter>

//   <Frame3/>

//   <Frame6/>
// <Frame4/>


//   </BrowserRouter>
//   );
// }

// export default App;*/


// import React, { useState } from 'react'
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import './App.css';
// import Home from './view/home';
// import About from './view/about';
// import Profile from './view/profile';

// function App() {


// let [따봉,따봉변경] = useState(0);
//  let posts = "강남 고기 맛집";
//  let [글제목,글제목변경] = useState(['남자 코트 추천', 'asd','asdsd']);

//  function 제목바꾸기(){
//     var newArray = [...글제목];
//     newArray[0] = '여자코트 추천'
//     글제목변경(newArray);
//  }



//   return (
//   <BrowserRouter>
//  <ul>
//         <li>
//           <Link to='/'>홈</Link>
//         </li>
//         <li>
//           <Link to='/about'>소개</Link>
//         </li>
//       </ul>
// <Routes>
//       <Route path='/' element={<Home/>}/>
//       <Route path='/about' element={<About/>}/>
// </Routes>
//    </BrowserRouter>

//     <div className="App">
//         <div className="black-nav">
//             <div>개발 Blog</div>
//         </div>
//         <button onClick={제목바꾸기}>버튼</button>
//         <div className="list">
//         <h3> { 글제목[0] } <span onClick={ ()=>{따봉변경(따봉 + 1)} }>👍</span> {따봉} </h3>
//         <p>2월 17일 발행</p>
//         <hr/>
//         </div>
//         <div className="list">
//         <h3> { 글제목[1] } </h3>
//         <p>2월 17일 발행</p>
//         <hr/>
//         </div>
//         <div className="list">
//         <h3> { 글제목[2] } </h3>
//         <p>2월 17일 발행</p>
//         <hr/>
//         </div>
//         <Modal />

//     </div>



//   )
// }

// function Modal(){
//     return (
//     <div className="modal">
//         <h2>제목</h2>
//         <p>날짜</p>
//         <p>상세내용</p>
//     </div>


//     )
// }*/



// import "./App.css";
// import Hello from './component/Hello';
// import Welcome from "./component/Welcome";

// function App() {
  
//   return (
//     <div className="App">
//       <h3>props : properties</h3>
//       <Hello age={10} />
//       <Hello age={20} />
//       <Hello age={30} />
       
//     </div>
//   );
// }

// export default App;


// import "./App.css";
// import Day from "./component/Day";
// import DayList from "./component/DayList";
// import Header from "./component/Header";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import EmptyPage from "./component/EmptyPage";

// function App() {

//  return (
//    <BrowserRouter>
//      <div className="App">
//        <Header />
//        <Routes>
        
//          <Route path="/" element={<DayList/>}/>
//          <Route path="/day/:day" element={ <Day />}/>
//          <Route path="*" element={<EmptyPage/>} />

//        </Routes>


//      </div>
//    </BrowserRouter>

//  );
// }

// export default App;

//import React from 'react';
//import Home from "./view/home";
//import FrameFin from "./view/framefin";
//import { BrowserRouter, Routes, Route } from "react-router-dom";
//import "./view/Main.css";
//import Frame from "./view/frame";
//import Frame2 from "./view/frame2";
//import Frame3 from "./view/frame3";
//import Frame4 from "./view/frame4";
//import Frame6 from "./view/frame6";
//import Frame5 from "./view/frame5";
//
//function App() {
//
//
//    return (
//    <BrowserRouter>
//        <Frame3/>
//            </BrowserRouter>
//    )
//}
//
//export default App;


// import UserView from "./pjtest/userview";
// import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
// import AdminView from "./pjtest/adminview";
// import Banner from "./pjtest/Banner";
// import Reservation from "./pjtest/reservation";

// import './view/Main.css';

// function App() {

//   return (
//     // <BrowserRouter>

//     // <Routes>
//     //   <Route path="/" element={<UserView/>}/>
//     //   <Route path="/admin" element={<AdminView/>}/>
//     // </Routes>

//     // </BrowserRouter>
//     <BrowserRouter>

//      <Routes>
//         <Route path="/" element={<Banner/>}/>
//         <Route path="/reservation" element={<Reservation/>}/>
//         <Route path="/admin" element={<AdminView/>}/>
//      </Routes>
      
//     </BrowserRouter>

//   )
// }

// export default App;


// import { useState, useEffect } from 'react';
// import axios from 'axios';

// function App(props) { // react hook 컴포넌트 ( 함수형 컴포넌트 선언)

//     const [data, setData] = useState([]); // 리액트 렌더링시 변수 변화를 감지하기위한 상태변수 선언 후 사용 , data는 변수로 사용 setData는 변수를 변경할때 함수형식으로 사용

//     useEffect(() => {
//             axios('http://localhost:8080/list')
//             .then(data => {

//               setData(data)
//             })
//   }, []);
    

//     return (<div>백엔드 데이터 : {data}</div>) // 화면출력
// }
// export default App;


import { useState, useEffect } from 'react';
import axios from 'axios';
import Axios from './view/axios';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App1() { // react hook 컴포넌트 ( 함수형 컴포넌트 선언)



    return (
       <div>asd</div>

    ) 
}
export default App1;