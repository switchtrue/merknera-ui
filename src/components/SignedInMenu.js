/* @flow */
import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import styles from '../containers/SignInMenu.scss';

export class SignedInMenu extends React.Component {
  // props: Props;
  static propTypes = {
    handleOnClickSignOut: PropTypes.func.isRequired,
  };

  handleOnClickGoogleSignOut = () => {
    this.props.handleOnClickSignOut();
  }

  render () {
    return (
      <ul className={styles.userMenuList}>
        <li>
          <Link to='/account' className={styles.userMenuLink}>
            My Account
          </Link>
        </li>
        <li onClick={this.handleOnClickGoogleSignOut}>
          <div>
            Sign Out
          </div>
        </li>
      </ul>
    );
  }
}

export default SignedInMenu;
