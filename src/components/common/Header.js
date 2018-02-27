import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import {PulseLoader} from 'halogen';

const Header = ({loading}) => {
  return (
    <nav>
      <IndexLink to="/" activeClassName="active">Home</IndexLink>
      {" | "}
      <Link to="about" activeClassName="active">About</Link>
      {" | "}
      <Link to="courses" activeClassName="active">Courses</Link>
      {loading && <PulseLoader color="#26A65B" size="16px" margin="4px"/>}
    </nav>
  );
};

Header.propTypes = {
  loading: React.PropTypes.bool.isRequired
};

export default Header;
