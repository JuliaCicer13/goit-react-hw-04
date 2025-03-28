import { useState} from 'react';
import ImageGallery from './ImageGallery/ImageGallery.jsx'
import Loader from './Loader/Loader.jsx';
import ErrorMessage from './ErrorMessage/ErrorMessage.jsx';
import SearchBar from './SearchBar/SearchBar.jsx'

// 1. Імпортуємо HTTP-функцію

export default function App () {

// 1. Оголошуємо стан
const [images, setImages] = useState([]);
const [loading, setLoading] = useState(false);
const [error, setError] = useState(false);

const handleSubmit = async (topic) => {
  try {
    setImages([]);
    setError(false);
    setLoading(true);
    const data = await fetchArticlesWithTopic(topic);
    setImages(data);
  } catch (error) {
    setError(true);
  } finally {
    setLoading(false);
  }
};


/* Остальной код */
  return (
    <div>
      <h1>List of images</h1>
      <ImageGallery/>
      <Loader/>
      <ErrorMessage/>
      <SearchBar onSubmit={handleSubmit}/>
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {loading && <p>Loading data, please wait...</p>}
      {error && (<p>Whoops, something went wrong! Please try reloading this page!</p>)}
      {images.length > 0 && <ImageGallery items={images}/>}
    </div>
      
  );

}
  