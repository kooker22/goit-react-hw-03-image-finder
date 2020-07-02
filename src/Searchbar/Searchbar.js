import React, { Component } from 'react';
import style from './Searchbar.module.css';
import PropTypes from 'prop-types';

class Searchbar extends Component {
  static defaultProps = {
    initaialText: '',
  };
  static propTypes = {
    text: PropTypes.string,
  };
  state = {
    text: this.props.initaialText,
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.text);
    this.setState({ text: '' });
  };
  handleChange = e => {
    this.setState({ text: e.currentTarget.value });
  };
  resetForm = () => {
    this.setState({ text: '' });
  };
  render() {
    return (
      <header className={style.searchbar}>
        <form onSubmit={this.handleSubmit} className={style.searchForm}>
          <button type="submit" className={style.searchFormButton}>
            <span className={style.searchFormButtonLabel}>Search</span>
          </button>

          <input
            className={style.searchFormInput}
            type="text"
            auto-сomplete="off"
            auto-focus="true"
            placeholder="Search images and photos"
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}
export default Searchbar;
