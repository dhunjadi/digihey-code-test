import {useNavigate} from 'react-router-dom';
import DigiheyLogo from '../assets/DigiheyLogo.svg';
import Button from './Button';

const Navbar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/');
    };
    return (
        <nav className="c-navbar">
            <div className="c-navbar__logo">
                <img src={DigiheyLogo} alt="digihey logo" />
            </div>

            <div className="c-navbar__logout">
                <Button onClick={handleLogout}>Logout</Button>
            </div>
        </nav>
    );
};

export default Navbar;
