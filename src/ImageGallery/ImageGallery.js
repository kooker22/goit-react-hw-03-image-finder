import React from 'react';
import style from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem';
const ImageGallery = ({ sources, onClick }) => (
  <ul className={style.imageGallery}>
    <ImageGalleryItem sources={sources} onClick={onClick} />
  </ul>
);
export default ImageGallery;
