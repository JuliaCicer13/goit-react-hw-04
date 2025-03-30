import { useState} from 'react';
import ImageGallery from './ImageGallery/ImageGallery.jsx'
import ErrorMessage from './ErrorMessage/ErrorMessage.jsx';
import SearchBar from './SearchBar/SearchBar.jsx';
import ClipLoader from "react-spinners/ClipLoader";
import ImageModal from './ImageModal/ImageModal.jsx';
import LoadMoreBtn from './LoadMoreBtn/LoadMoreBtn.jsx'
import { fetchImagesWithTopic } from "../images-api.js";
import styles from './App.module.css'
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
 

export default function App () {

// 1. Оголошуємо стан
const [images, setImages] = useState([]);
const [loading, setLoading] = useState(false);
const [error, setError] = useState(false);
const [page, setPage] = useState(1);
const [searchTerm, setSearchTerm] = useState("");

  // Тут будемо виконувати HTTP-запит

  const handleSearch = async (query) => {
    try {
      setSearchTerm(query);
      setImages([]);
      setPage(1);
      setError(false);
      setLoading(true);
  
      const data = await fetchImagesWithTopic(query, 1);
      console.log("API Response (handleSearch):", data); 
  
      if (!data || !data.results) {
        throw new Error("Invalid API response structure");
      }
  
      const imagesArray = data.results.map(item => ({
        id: item.id,
        alt: item.alt_description || "No description",
        imageUrl: item.urls.small || "default.jpg"
      }));
  
      setImages(imagesArray);
      console.log("Images array:", imagesArray);
    } catch (error) {
      setError(true);
      console.error("Error fetching images:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleLoadMore = async () => {
    try {
      setLoading(true);
      const nextPage = page + 1;
      setPage(nextPage);
      const data = await fetchImagesWithTopic(searchTerm, nextPage);
      console.log("API Response (handleLoadMore):", data);
  
      if (!data || !data.results) {
        throw new Error("Invalid API response structure");
      }
  
      setImages(prevImages => [...prevImages, ...data.results]);
    } catch (error) {
      setError(true);
      console.error("Error loading more images:", error);
    } finally {
      setLoading(false);
    }
  };

/* Остальной код */
  return (
    <div className={styles.container}>
      <div className={styles.title}>  
        <h1>List of images</h1>
      </div>
    
      <SearchBar onSearch={handleSearch}/>
      {loading && ( 
        <>
        <ClipLoader 
        loading={loading}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
        />
       <p>Loading data, please wait...</p>
      </>
      )}
      {error && <ErrorMessage message="Whoops, something went wrong! Please try reloading this page!" />}
      {Array.isArray(images) && images.length > 0 && <ImageGallery images={images}/>}
      {images.length > 0 && 
        (<LoadMoreBtn 
          message="Load more"
          onLoadMore={handleLoadMore}
          isDisabled={loading}
          />
         )} 
      <div>
      <ImageModal
        style={customStyles}
        contentLabel="Example Modal"
      />
      </div>
    </div>
  );
}


  