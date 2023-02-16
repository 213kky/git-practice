import { useState, useEffect } from 'react';
import axios from 'axios';

function Axios(props) { // react hook 컴포넌트 ( 함수형 컴포넌트 선언)

    const [data, setData] = useState([]); // 리액트 렌더링시 변수 변화를 감지하기위한 상태변수 선언 후 사용 , data는 변수로 사용 setData는 변수를 변경할때 함수형식으로 사용

    useEffect(() => { 
        (async () => { 
            let result = await axios.get("/api/list"); 
            setData(result?.data) 
            
        })();
    }, [])
    console.log(data)

    return (<div>백엔드 데이터 : {data[0].id}</div>) // 화면출력
}

export default Axios;