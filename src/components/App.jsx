import { useState} from 'react';
import ImageGallery from './ImageGallery/ImageGallery.jsx'
import ErrorMessage from './ErrorMessage/ErrorMessage.jsx';
import SearchBar from './SearchBar/SearchBar.jsx';
import ClipLoader from "react-spinners/ClipLoader";
import ImageModal from './ImageModal/ImageModal.jsx';
import LoadMoreBtn from './LoadMoreBtn/LoadMoreBtn.jsx'
import { fetchImagesWithTopic } from "../images-api.js";
// 1. Імпортуємо HTTP-функцію

  // Модальное окно
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
 
  ImageModal.setAppElement('#yourAppElement');

export default function App () {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

// 1. Оголошуємо стан
const [images, setImages] = useState([]);
const [loading, setLoading] = useState(false);
const [error, setError] = useState(false);
const [page, setPage] = useState(1);
const [color, setColor] = useState("#ffffff");

  // Тут будемо виконувати HTTP-запит

  const handleSearch = async (query) => {
    try {
      setImages([]);
      setPage(1);
      setError(false);
      setLoading(true);
      const data = await fetchImagesWithTopic(query, 1);
      setImages(data.hits);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const handleLoadMore = async (query) => {
    try {
      setLoading(true);
      const nextPage = page + 1;
      setPage(nextPage);
      const data = await fetchImagesWithTopic(query, nextPage);
        setImages(prevImages =>
        [...prevImages, ...data.hits]);
    } catch (error) {
         setError(true);
    } finally {
      setLoading(false)
    }
  }

/* Остальной код */
  return (
    <div>
      <h1>List of images</h1>
      <ImageGallery/>

      <SearchBar onSearch={handleSearch}/>
      {loading && <ClipLoader />}
      {error && <ErrorMessage message="Whoops, something went wrong! Please try reloading this page!" />}
      {loading && <p>Loading data, please wait...</p>}
      {error && (<p>Whoops, something went wrong! Please try reloading this page!</p>)}
      {images.length > 0 && <ImageGallery images={images}/>}

      <ClipLoader
        color={color}
        loading={loading}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
     {images.length > 0 && <LoadMoreBtn 
     message="Load more"
     onLoadMore={handleLoadMore}
     isDisabled={loading}/>} 
      <div>
      <button onClick={openModal}>Open Modal</button>
      <ImageModal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
      </ImageModal>
    </div>
    </div>
  );
}

ReactDOM.render(<App />, appElement);
  