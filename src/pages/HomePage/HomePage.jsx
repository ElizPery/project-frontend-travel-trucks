import { useNavigate } from 'react-router-dom';
import DocumentTitle from '../../components/DocumentTitle';
import css from './HomePage.module.css';

export default function HomePage() {
  const navigate = useNavigate();
  const handleCatalogClick = () => {
    navigate('/catalog');
  };

  return (
    <section className={css.section}>
      <div className={css.container}>
        <DocumentTitle>Home page</DocumentTitle>
        <div className={css.content}>
          <h1 className={css.title}>Campers of your dreams</h1>
          <h2 className={css.desc}>
            You can find everything you want in our catalog
          </h2>
          <button onClick={handleCatalogClick} className={css.btnCatalog}>
            <p className={css.btnText}>View Now</p>
          </button>
        </div>
      </div>
    </section>
  );
}
