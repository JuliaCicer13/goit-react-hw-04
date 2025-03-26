import styles from './Article.module.css';

export default function ArticleList ({ items }) {
    <ul>
      {items.map(({ objectID, url, title }) => (
        <li key={objectID}>
          <a className={styles.link} href={url} target="_blank" rel="noreferrer noopener">
            {title}
          </a>
        </li>
      ))}
    </ul>
};