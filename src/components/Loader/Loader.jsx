import { Component } from 'react';
import { Audio } from 'react-loader-spinner';
import css from '../Modal/Modal.module.css';

class Loader extends Component {
  render() {
    return (
      <div className={css.overlay}>
        <Audio
          height="80"
          width="80"
          radius="9"
          color="green"
          ariaLabel="loading"
          wrapperStyle
          wrapperClass
        />
      </div>
    );
  }
}

export default Loader;
