function Icon({ name = 'exclamation-triangle', lg }) {
    return <i className={`fa fa-${name} ${lg ? 'fa-3x' : ''}`} aria-hidden='true'></i>;
  }
  
  export default Icon;