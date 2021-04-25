import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';

import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import QRCodeExample from './components/QRCode/QRCodeExample';
import Header from './components/Header/Header';
import styles from './App.module.css';
//
// className="changingBG"
const App = () => {
  return (
    <div className={styles.changingBG}>
      <Header />
      <div className="d-flex">
        <div className="col-sm-3 mt-sm-3">
          <NavBar />
        </div>
        <div className="col-sm-9">
          <Switch>
            <Route exact path="/qrcode" component={QRCodeExample} />
          </Switch>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
