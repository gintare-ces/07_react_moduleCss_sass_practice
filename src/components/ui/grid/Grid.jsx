
import css from './grid.module.css';

// apjuosiantis elementas suteikiantis papildomu stiliaus ar funkciju dalyku
function Grid(props) {
  const inlineStyleObj = {
    // color: 'tomato',
    gridTemplateColumns: `repeat(${props.cols}, 1fr)`,
  };
  if (props.ul) {
    return (
      <ul style={inlineStyleObj} className={css.grid}>
        {props.children}
      </ul>
    );
    
  }
  return (
    <div style={inlineStyleObj} className={css.grid}>
      {props.children}
    </div>
  );
}
export default Grid;