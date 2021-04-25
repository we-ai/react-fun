import React from 'react';
// import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';
const NavBar = () => {
  return (
    <React.Fragment>
      <div className={styles.navbar}>
        <ul className="list-unstyled">
          <li>
            <a href="/qrcode">QR Code Generator</a>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};
export default NavBar;
