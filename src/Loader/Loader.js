import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import style from './Loader.module.css';

class Spiner extends Component {
  render() {
    return (
      <div className={style.loader}>
        <Loader
          type="ThreeDots"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000}
        />
      </div>
    );
  }
}
export default Spiner;
