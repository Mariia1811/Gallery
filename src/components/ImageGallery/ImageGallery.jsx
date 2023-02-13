import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { fetchImages } from 'services/fetchImg';
import ImageGalleryItem from '../ImageGalleryItem';
import Btn from 'components/Button';
import Loader from '../Loader';
import { ImageGalleryList, Text } from './ImageGallery.styled';

function ImageGallery({ imageName, page, onBtnchangePage }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    if (imageName === '') return;
    if (page === 1 && data.length > 0) setData([]);

    (async function creatrGallery() {
      try {
        const response = await fetchImages({
          q: imageName,
          page: page,
        });

        setData(prev => [...prev, ...response.hits]);
        setTotalPages(response.totalHits / 12);

        if (response.total === 0) throw new Error();
        if (page === 1) {
          toast.success(`Hooray! We found ${response.total} images.`, {
            theme: 'colored',
          });
        }
      } catch (error) {
        toast.error(
          'Sorry, there are no images matching your search query. Please try again.',
          { theme: 'colored' }
        );
      } finally {
        setIsLoading(false);
      }
    })();

    setIsLoading(true);
  }, [imageName, page]);

  return (
    <>
      {isLoading && data.length <= 0 && <Loader />}
      {data.length > 0 ? (
        <>
          <ImageGalleryList>
            {data.map(item => (
              <ImageGalleryItem
                key={item.id}
                imgUrl={item.webformatURL}
                descr={item.tags}
                largeImage={item.largeImageURL}
              />
            ))}
          </ImageGalleryList>

          {isLoading && <Loader />}
          {!(totalPages < page) ? (
            <Btn incrementPage={onBtnchangePage} />
          ) : (
            <Text>...these are all pictures for this request...</Text>
          )}
        </>
      ) : (
        <Text>Please enter your search picture</Text>
      )}
    </>
  );
}

export default ImageGallery;

ImageGallery.propTypes = {
  imageName: PropTypes.string,
  page: PropTypes.number,
  onBtnchangePage: PropTypes.func,
};
