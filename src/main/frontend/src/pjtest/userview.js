import { Link } from "react-router-dom";

function UserView() {
    return (
            <>
                <Link to="/">사용자가 보는 화면입니다.</Link>
                <Link to="/admin">관리자 화면으로 이동.</Link>
            </>
        )
}

export default UserView;