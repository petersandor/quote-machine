import React, { PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';

const Main = ({ children }) => (
  <div>
    <AppBar
      title="Quote machine"
      showMenuIconButton={false}
      zDepth={2}
    />
    {/* this will render the child routes */}
    {children}
  </div>
);

Main.propTypes = {
  children: PropTypes.element.isRequired,
};


export default Main;
