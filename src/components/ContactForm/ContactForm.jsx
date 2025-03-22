import { useId } from "react";
export default function LoginForm ({onAdd}) {
  const newId = useId();

  const handleSubmit = e => {
    e.prevantDefault();
    onAdd({
    
      text: e.target.elements.text.value,
    })
    e.reset();
  }
  return(
    <>
    <form onSubmit={handleSubmit}>
      <label htmlFor={newId}>
      <input type="text"
      
      />
      </label>
    
    </form>
    <button onClick={onAdd}></button>
    </>
  )
};