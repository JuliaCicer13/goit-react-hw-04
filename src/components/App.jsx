import { useState, useEffect} from 'react';
import axios from "axios";
import ArticleList from './Articles/ArticleList';

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
      <h1>Latest articles</h1>

      {articles.length > 0 && <ArticleList items={articles}/>}
    </div>
      
  );
};

  