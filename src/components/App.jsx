import { useState, useEffect} from 'react';
import ImageGallery from './ImageGallery/ImageGallery.jsx'
import ErrorMessage from './ErrorMessage/ErrorMessage.jsx';
import SearchBar from './SearchBar/SearchBar.jsx';
import ClipLoader from "react-spinners/ClipLoader";
import ImageModal from './ImageModal/ImageModal.jsx';
import LoadMoreBtn from './LoadMoreBtn/LoadMoreBtn.jsx'
import { fetchImagesWithTopic } from "../images-api.js";
import styles from './App.module.css';
import React from 'react';
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
const [modalIsOpen, setIsOpen] = React.useState(false);
const [selectedImage, setSelectedImage] = useState(null);
const [selectedAlt, setSelectedAlt] = useState("");

function openModal(imageUrl, alt) {
setIsOpen(true);
setSelectedImage(imageUrl);
setSelectedAlt(alt);
}

function closeModal() {
  setIsOpen(false);
  setSelectedImage(null);
}
  // Тут будемо виконувати HTTP-запит
  const handleSearch = (topic) => {
    setSearchTerm(topic);
    setImages([]);
    setPage(1);
  }
 useEffect (() => {
    const getData = async () => {
    if (!searchTerm) return;
    setError(false);
    setLoading(true);

    try {
      const data = await fetchImagesWithTopic(searchTerm, page);
      console.log("API Response (handleSearch):", data); 
  
      if (!data || !data.results) {
        throw new Error("Invalid API response structure");
      }
  
      const imagesArray = data.results.map(item => ({
        id: item.id,
        alt: item.alt_description || "No description",
        imageUrl: item.urls.small || "default.jpg"
      }));
  
      setImages(prevImages => (page === 1 ? imagesArray : [...prevImages, ...imagesArray]));
      console.log("Images array:", imagesArray);
    } catch (error) {
      setError(true);
      console.error("Error fetching images:", error);
    } finally {
      setLoading(false);
    }
  };
  getData();
  }, [searchTerm, page]);
 
  const handleLoadMore = async () => {
   setPage(prevPage => prevPage + 1);
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
      {Array.isArray(images) && images.length > 0 && <ImageGallery images={images} onImageClick={openModal}/>}
      {images.length > 0 &&
        (<LoadMoreBtn 
          message="Load more"
          onLoadMore={handleLoadMore}
          isDisabled={loading}
          />
         )} 
      <div>
      <ImageModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        imageUrl={selectedImage}
        alt={selectedAlt}
        contentLabel="Example Modal"
      />
      </div>
    </div>
  );
}


  