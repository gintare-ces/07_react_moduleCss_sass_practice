import React from 'react';
import css from './SectionTitle.module.css';

function SectionTitle({ title, subtitle }) {
  return (
    <h2 className={css.title}>
      <span>{title}</span>
      {subtitle}
    </h2>
  );
}
export default SectionTitle;