import { useState, useEffect} from 'react';
import axios from "axios";


export default function App () {

// 1. Оголошуємо стан
const [articles, setArticles] = useState([]);

useEffect(() => {
  async function fetchArticles() {
    const response = await axios.get(
      "https://hn.algolia.com/api/v1/search?query=react"
    );
    // 2. Записуємо дані в стан
    setArticles(response.data.hits);
  }

  fetchArticles();
}, []);
  
  return (
    <div>
     
    
    </div>
      
  );
};

  