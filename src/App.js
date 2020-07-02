import React, { Component } from 'react';
import Searchbar from './Searchbar';
import Button from './Button';
import Modal from './Modal';
import Spiner from './Loader';
import ImageGallery from './ImageGallery/';
import PropTypes from 'prop-types';
import 'modern-normalize/modern-normalize.css';

import axios from 'axios';
import style from './App.module.css';

class ImageFinder extends Component {
  static defaultProps = {
    initialPictures: [],
    initialPage: 1,
    initialRequest: '',
    initialModalStatus: false,
    initialModalURL: '',
    initislIsLoading: false,
  };
  static propTypes = {
    pictures: PropTypes.arrayOf(PropTypes.object.isRequired),
    page: PropTypes.number,
    request: PropTypes.string,
    modalURL: PropTypes.string,
  };
  state = {
    pictures: this.props.initialPictures,
    page: this.props.initialPage,
    request: this.props.initialRequest,
    modalStatus: this.props.initialModalStatus,
    modalURL: this.props.initialModalURL,
    isLoading: this.props.initislIsLoading,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.request !== this.state.request) {
      this.setState({ page: 1, pictures: [] });
      this.fetchPictures();
    }
    if (prevState.pictures.length !== this.state.pictures.length) {
      this.smoothScroll();
    }
  }

  baseURL = 'https://pixabay.com/api/?';
  key = '16192895-b30e865bfa1f0fc43dcc0dc3e';
  pagination = 20;
  toggleModal = () => {
    this.setState(({ modalStatus }) => ({
      modalStatus: !modalStatus,
    }));
  };
  showModal = e => {
    this.state.pictures.map(picture => {
      if (picture.webformatURL === e.currentTarget.src) {
        this.setState({ modalURL: picture.largeImageURL });
      }
    });
    this.toggleModal();
  };

  onClose = () => {
    this.toggleModal();
  };
  smoothScroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  addRequest = text => {
    this.setState({ request: text });
  };

  fetchPictures = () => {
    this.setState({ isLoading: true });
    setTimeout(() => {
      axios
        .get(
          `${this.baseURL}&key=${this.key}&q=${this.state.request}&per_page=${this.pagination}&page=${this.state.page}`,
        )
        .then(
          data =>
            this.setState(prevState => ({
              pictures: [...prevState.pictures, ...data.data.hits],
              page: prevState.page + 1,
            })),
          this.smoothScroll(),
        )
        .finally(() => this.setState({ isLoading: false }));
    }, 3000);
  };

  render() {
    const { pictures, modalStatus, modalURL, isLoading } = this.state;
    return (
      <>
        {modalStatus === true && (
          <Modal onClose={this.onClose}>
            <img src={modalURL} alt="" />
          </Modal>
        )}
        <Searchbar onSubmit={this.addRequest} />

        {pictures.length > 0 && (
          <ImageGallery sources={pictures} onClick={this.showModal} />
        )}
        {isLoading === true && <Spiner />}
        {pictures.length > 0 && (
          <Button onClick={this.fetchPictures} onScroll={this.smoothScroll} />
        )}
      </>
    );
  }
}

export default ImageFinder;
