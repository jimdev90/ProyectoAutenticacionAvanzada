import './Header.scss';
import { BiLogIn } from 'react-icons/bi'
import { FaUserCircle } from 'react-icons/fa'
import { Link, NavLink } from 'react-router-dom';

const activeLink = ({ isActive }) => (isActive ? 'active' : '')

const Header = () => {
    return (
        <header className='header'>
            <nav>
                <div className='logo'>
                    <BiLogIn size={35} />
                    <span> Auth:App</span>
                </div>
                <ul className='home-links'>
                    <li className='--flex-center'>
                        <FaUserCircle size={20} />
                        <p className='--color-white'>
                            Hola, Jimmy
                        </p>
                    </li>
                    <li>
                        <button className='--btn --btn-primary'>
                            <Link to='/login'>Iniciar Sesión</Link>
                        </button>
                    </li>
                    <li>
                        <NavLink to="/profile" className={activeLink}>
                            Perfil
                        </NavLink>
                    </li>
                    <li>
                        <button className='--btn --btn-secondary'>
                            <Link to='/logout'>Cerrar Sesión</Link>
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header