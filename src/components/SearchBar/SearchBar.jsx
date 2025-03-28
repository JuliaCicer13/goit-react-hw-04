import toast, { Toaster } from 'react-hot-toast';
export default function SearchBar ({onSubmit}) {
    
const handleSubmit= (event) => {
    event.preventDefault();
    const form = event.target;
    const topic = form.elements.topic.value;

    if (form.elements.topic.value.trim() === "") {
        toast('Please enter search form.');
        return;
    }
    onSubmit(topic);
    form.reset()
}

return (
    <header>
           <form onSubmit={handleSubmit}>
             <input 
              type="text" 
              autoComplete="off"
              autoFocus
              name="images" 
              placeholder="Search images and photos"/>
             <button onClick={toast} type="submit">Search</button>
             <Toaster />
           </form>
    </header>
 
)
}