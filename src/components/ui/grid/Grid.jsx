import css from './grid.module.css';

// apjuosiantis elementas suteikiantis papildomu stiliaus ar funkciju dalyku
function Grid({ cols, ul, children }) {
  const inlineStyleObj = {
    // color: 'tomato',
    gridTemplateColumns: `repeat(${cols}, 1fr)`,
  };

  const Element = ul ? 'ul' : 'div';
  // if (props.ul) {
  //   return (
  //     <ul style={inlineStyleObj} className={css.grid}>
  //       {props.children}
  //     </ul>
  //   );

  // }
  return (
    <Element style={inlineStyleObj} className={css.grid}>
      {children}
    </Element>
  );
}
export default Grid;
