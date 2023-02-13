import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import Searchbar from '../Searchbar/Searchbar';
import ImageGallery from '../ImageGallery/ImageGallery';
import { AppWrap } from './App.styled';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);

  function handleSubmitForm(imgName) {
    setSearchQuery(imgName);
    setPage(1);
  }

  function handleClick() {
    setPage(prev => prev + 1);
  }

  return (
    <AppWrap>
      <Searchbar onSubmit={handleSubmitForm} />

      <ImageGallery
        imageName={searchQuery}
        page={page}
        onBtnchangePage={handleClick}
      />
      <ToastContainer />
    </AppWrap>
  );
}

export default App;
