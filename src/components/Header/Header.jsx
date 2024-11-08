import { useNavigate, useLocation } from 'react-router-dom';
import Logo from '../Logo/Logo.jsx';
import css from './Header.module.css';

const Header = () => {
    const location = useLocation().pathname
  const navigate = useNavigate();
  const handleHomeClick = () => {
    navigate('/');
  };
  const handleCatalogClick = () => {
    navigate('/catalog');
  };

  return (
    <div className={css.container}>
      <header className={css.header}>
        <Logo />
        <nav className={css.navigation}>
          <button onClick={handleHomeClick} className={css.button}>
            <div
              className={
                location == '/' ? css.text && css.textActive : css.text
              }
            >
              Home
            </div>
          </button>
          <button onClick={handleCatalogClick} className={css.button}>
            <div
              className={
                location == '/catalog' ? css.text && css.textActive : css.text
              }
            >
              Catalog
            </div>
          </button>
        </nav>
      </header>
    </div>
  );
};

export default Header;
