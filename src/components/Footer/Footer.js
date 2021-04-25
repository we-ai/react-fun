import React from 'react';
import styles from './Footer.module.css';

function Copyright() {
  return (
    <div>
      Copy right {'© '}
      {new Date().getFullYear()} My Company Inc. All rights reserved.
    </div>
  );
}

const Footer = () => {
  return (
    <div className="fixed-bottom">
      <div className={styles.footer}>
        <div className="d-flex p-2 justify-content-center">
          <Copyright />
        </div>
      </div>
    </div>
  );
};
export default Footer;
