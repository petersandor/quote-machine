import React, { PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';

const Main = ({ children }) => (
  <div>
    <AppBar
      title="Random quote machine"
      showMenuIconButton={false}
    />
    {/* this will render the child routes */}
    {children}
  </div>
);

Main.propTypes = {
  children: PropTypes.element.isRequired,
};


export default Main;
