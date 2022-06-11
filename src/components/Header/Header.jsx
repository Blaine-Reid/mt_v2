/**
 * @prettier
 */

import React from 'react';
import { string } from 'prop-types';

const Header = ({ title }) => {
  return <header>{title}</header>;
};

Header.propTypes = {
  title: string.isRequired
};

export default Header;
