import { useState, useEffect} from 'react';
import ArticleList from './Articles/ArticleList.jsx';
import Article from './Articles/Article.jsx';
import Loader from './Loader/Loader.jsx';
import Error from './Error/Error.jsx';
import SearchForm from './SearchForm/SearchForm.jsx'
// 1. Імпортуємо HTTP-функцію
import { fetchArticlesWithTopic } from "./articles-api.js";

export default function App () {
// 1. Оголошуємо стан
const [articles, setArticles] = useState([]);
const [loading, setLoading] = useState(false);
const [error, setError] = useState(false);

const handleSearch = async (topic) => {
  try {
    setArticles([]);
    setError(false);
    setLoading(true);
    const data = await fetchArticlesWithTopic(topic);
    setArticles(data);
  } catch (error) {
    setError(true);
  } finally {
    setLoading(false);
  }
};


/* Остальной код */

  
  return (
    <div>
      <h1>Latest articles</h1>
      <ArticleList/>
      <Article/>
      <Loader/>
      <Error/>
      <SearchForm onSearch={handleSearch}/>
      {loading && <Loader />}
      {error && <Error />}
      {loading && <p>Loading data, please wait...</p>}
      {error && (<p>Whoops, something went wrong! Please try reloading this page!</p>)}
      {articles.length > 0 && <ArticleList items={articles}/>}
    </div>
      
  );

}
  