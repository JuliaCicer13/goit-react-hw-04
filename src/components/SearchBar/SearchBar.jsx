import toast, { Toaster } from 'react-hot-toast';
import styles from './SearchBar.module.css'
export default function SearchBar ({onSearch}) {
    
const handleSubmit= (event) => {
    event.preventDefault();
    const form = event.target;
    const topic = form.elements.images.value;

    if (form.elements.images.value.trim() === "") {
        toast.error('Please enter search form.');
        return;
    }
    onSearch(topic);
    form.reset()
}

return (
    <header>
           <form className={styles.form} onSubmit={handleSubmit}>
             <input 
              type="text" 
              autoComplete="off"
              autoFocus
              name="images" 
              placeholder="Search images and photos"/>
             <button className={styles.buttonSubmit} type="submit">Search</button>
             <Toaster />
           </form>
    </header>
 
)
}