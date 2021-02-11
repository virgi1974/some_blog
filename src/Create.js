import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('Ari');
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsPending(true);
    const blog = { title, body, author };
    
    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog)
    }).then(() => {
      console.log('New Blog added');
      setIsPending(false);
      history.push('/');
    })
  }

  return ( 
    <div className="create">
      <h2>Add new Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input 
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea 
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <label>Blog author:</label>
        <select 
          value={author}
          onChange={(e) => setAuthor(e.target.value)}>
          <option value="Ari">Ari</option>
          <option value="Selene">Selene</option>
          <option value="Virgilio">Virgilio</option>
          <option value="Aran">Aran</option>
        </select>
        { !isPending && <button>Add blog</button>}
        { isPending && <button>Adding blog</button>}
      </form>
    </div>
   );
}
 
export default Create;