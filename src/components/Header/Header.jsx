import styles from './header.css'
import {NavLink} from "react-router-dom";
export default function Header(){
    const activeLink = ({isActive}) => isActive ? 'activeLink': ''
    return (
        <header>
            <div className="header">
                <div className="inner">
                    <a className="logo" href="">LOGO</a>
                </div>
                <nav>
                    <ul className="list">
                        <li className="item">
                            <NavLink to="/" className={activeLink}>Главная</NavLink>
                        </li>
                        <li className='item'>
                            <NavLink to="/posts" className={activeLink}>Посты</NavLink>
                        </li>
                    </ul>
                 </nav>
            </div>
        </header>
    )
}