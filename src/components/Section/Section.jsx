import React from 'react';
import { node, string } from 'prop-types';

// Component used wrap children creating sections on page
const Section = ({ children, backgroundImg, classNames }) => {
  return <section className={`container cover ${backgroundImg} ${classNames}`}>{children}</section>;
};

Section.propTypes = {
  children: node,
  backgroundImg: string,
  classNames: string
};

export default Section;
