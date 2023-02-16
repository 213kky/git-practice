import { Link } from "react-router-dom";

function AdminView() {

    return (
        <>
            <Link to="/admin">관리자가 보는 화면입니다.</Link>
            <Link to="/">사용자 화면으로 이동.</Link>
            
        </>
    )

}

export default AdminView;