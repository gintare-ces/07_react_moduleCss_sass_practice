import css from './card.module.css';

function Card({ children }) {
  return <div className={css.card}>{children}</div>;
}
export default Card;