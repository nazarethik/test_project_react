
import logo from '../../img/icons/logo.svg';
import './header.css';
const Header = () => {
    return (
        <div className='header'>
            <div className='header__left-block'>
                <div className="header__logo">
                    <img src={logo} alt="logo"/>
                </div>
                <nav className="header__links">
                    <a href="#" className="header__link">Доставка питания</a>
                    <a href="#" className="header__link">Второй пункт</a>
                </nav>
            </div>
            <div className='header__right-block'>
                <button className='btn'>Связаться с нами</button>
            </div>
        </div>
    )
}
export default Header;