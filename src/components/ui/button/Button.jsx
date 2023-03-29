import css from './Button.module.css';

function Button({ children, lg = '' }) {
  console.log('css ===', css);

  const largeClass = lg ? css['btnLg'] : '';

  return <button type='button' className={`${css.btn} ${largeClass}`}>{children}</button>;
}

export default Button;
