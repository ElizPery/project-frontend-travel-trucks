import { useNavigate } from "react-router-dom";
import css from './Logo.module.css';
import icons from '../../images/icons/icons.svg';

function Logo() {
    const navigate = useNavigate()

    function handleClick() {
        navigate('/');
    }

    return (
      <button onClick={handleClick}>
        <div className={css.iconWrap}>
          <svg style={{ height: "72px" }}>
            <use href={`${icons}#icon-logo`}></use>
          </svg>
        </div>
      </button>
    );
};

export default Logo;