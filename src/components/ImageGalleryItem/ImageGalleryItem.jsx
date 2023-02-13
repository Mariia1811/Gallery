import { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal/Modal';
import {
  ImageGalleryItemLi,
  ImageGalleryItemImage,
} from './ImageGalleryItem.styled';

function ImageGalleryItem({ imgUrl, descr, largeImage }) {
  const [isShowModal, setIsShowModal] = useState(false);

  function handleClickImg() {
    setIsShowModal(prev => !prev);
  }
  return (
    <>
      <ImageGalleryItemLi onClick={handleClickImg}>
        <ImageGalleryItemImage src={imgUrl} alt={descr} loading="lazy" />
      </ImageGalleryItemLi>
      {isShowModal && (
        <Modal
          largeImage={largeImage}
          descr={descr}
          onCloseModal={handleClickImg}
        />
      )}
    </>
  );
}

ImageGalleryItem.propTypes = {
  imgUrl: PropTypes.string,
  descr: PropTypes.string,
  largeImage: PropTypes.string,
};

export default ImageGalleryItem;
