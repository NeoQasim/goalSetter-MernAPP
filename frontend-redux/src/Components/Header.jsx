import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import "../index.css";
import { useDispatch, useSelector } from "react-redux";
import { logOut, reset } from "../features/auth/authslice";
function Header() {
    const { user } = useSelector((state) => state.auth);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onLogout = () => {
        dispatch(logOut());
        dispatch(reset());
        navigate("/dashboard");
    };
    return (
        <header className="header">
            <div className="logo">
                <Link to="/">GoalSetter</Link>
            </div>
            {user ? (
                <>
                    <ul>
                        <li>
                            <button
                                className="btn"
                                onClick={onLogout}>
                                <FaSignOutAlt /> logOut
                            </button>
                        </li>
                    </ul>
                </>
            ) : (
                <>
                    <ul>
                        <li>
                            <Link to="/dashboard">
                                <FaUser /> Dashboard
                            </Link>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <Link to="/login">
                                <FaSignInAlt /> Login
                            </Link>
                        </li>
                        <li>
                            <Link className="btn" to="/register">
                                <FaUser /> Register
                            </Link>
                        </li>
                    </ul>
                </>
            )}
        </header>
    );
}

export default Header;
