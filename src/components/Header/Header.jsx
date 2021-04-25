import React from 'react';
import styles from './Header.module.css';
const Header = () => {
  // style={{ 'background-color': '#dfdeec' }}
  //   className="position-absolute top-0 "
  return (
    <header>
      <div className={styles.header}>
        <nav className="navbar navbar-light">
          <a className="navbar-brand" href="/">
            React Fun
          </a>
        </nav>
      </div>
    </header>
  );
};
export default Header;
