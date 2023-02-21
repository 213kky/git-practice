// import Page1 from "./componentsum/Page1";
// import Page2 from "./componentsum/Page2";
// import Page3 from "./componentsum/Page3";
// import Page4 from "./componentsum/Page4";
// import "./view/Main.css"

// function App() { // react hook 컴포넌트 ( 함수형 컴포넌트 선언)



//     return (
//         <Page1/>
//     ) 
// }
// export default App;





// import Day from "./component/Day";
// import DayList from "./component/DayList";
// import Header from "./component/Header";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import EmptyPage from "./component/EmptyPage";

// function App() {


//     return (
//         <BrowserRouter>
//             <div className="App">
//                 <Header />
//                 <Routes>
//                     <Route path="/" element={<DayList/>} />
//                     <Route path="/day/:day" element={<Day/>} />
//                     <Route path="*" element={<EmptyPage/>} />
//                 </Routes>

//             </div>
//         </BrowserRouter>


//     )
// }

// export default App;


import axios from 'axios';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useState, useEffect } from 'react';


function App() {


    const [data, setData] = useState([]);

    useEffect(() => {
        (async () => {
            let result = await axios.get("/api/list");
            setData(result.data)
        })();
    }, [])
    console.log(data);

    return (
        <BrowserRouter>
            <div className="App">
                asd : {data}

            </div>
        </BrowserRouter>


    )
}

export default App;