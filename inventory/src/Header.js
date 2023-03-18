import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <nav className = "navbar">
            <div>
                <Link to="/">Home</Link>
                <Link to="/StepOne">StepOne</Link>
            </div>
        </nav>
    );
}

export default Header;