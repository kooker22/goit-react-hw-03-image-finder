import React from 'react';
import style from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ sources, onClick }) => (
  <>
    {sources.map(source => (
      <li key={source.id} className={style.imageGalleryItem}>
        <img
          onClick={onClick}
          src={source.webformatURL}
          alt=""
          className={style.imageGalleryItemImage}
        />
      </li>
    ))}
  </>
);
ImageGalleryItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  sources: PropTypes.arrayOf(PropTypes.object.isRequired),
};
export default ImageGalleryItem;
