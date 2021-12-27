import { useContext, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { dbContext } from "./App";
import { collection, addDoc } from "firebase/firestore";

const Create = () => {
    const db = useContext(dbContext);
    // localStorage.setItem('blogAuthor', 'Yoshi');
    // useEffect(() => {
    //     localStorage.setItem('blogAuthor', 'Yoshi');
    // }, []);
    const [title, setTitle] = useState('' || localStorage.getItem('blogTitle'));
    const [body, setBody] = useState('' || localStorage.getItem('blogBody'));
    const [author, setAuthor] = useState('' || localStorage.getItem('blogAuthor'));
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = e => {
        e.preventDefault();
        const blog = { title, body, author };
        // console.log(blog);
        setIsPending(true);

        try {
            addDoc(collection(db, "blogs"), {
                title: blog.title,
                body: blog.body,
                author: blog.author
            })
                .then(res => {
                    console.log(res.id);
                    alert('Your Blog was added!');
                    history.push('/blogs/'+res.id);
                });
            setIsPending(false);
            setTitle('');
            setBody('');
            setAuthor('');
            localStorage.clear();
            console.log('New blog added!');
        } catch (e) {
            console.error("Error adding document: ", e);
        }
        // fetch('http://localhost:8000/blogs', {
        //     method: 'POST',
        //     headers: { "Content-Type": "application/json" },
        //     body: JSON.stringify(blog)
        // }).then(() => {
        //     setIsPending(false);
        //     setTitle('');
        //     setBody('');
        //     setAuthor('');
        //     localStorage.clear();
        //     console.log('New blog added!');
        //     history.push('/');
        // }).catch(err => {
        //     console.log(err.message);
        // });
    };

    return (
        <div className="Create">
            <h1>Add a new Blog</h1>
            <form onSubmit={handleSubmit}>
                <label>Title:</label>
                <input type="text"
                    required
                    value={title}
                    onChange={e => {
                        setTitle(e.target.value);
                        localStorage.setItem('blogTitle', e.target.value);
                    }}
                />
                <label>Body:</label>
                <textarea
                    required
                    value={body}
                    onChange={e => {
                        setBody(e.target.value);
                        localStorage.setItem('blogBody', e.target.value);
                    }}
                ></textarea>
                <label>Author:</label>
                <input type="text"
                    required
                    value={author}
                    onChange={e => {
                        setAuthor(e.target.value);
                        localStorage.setItem('blogAuthor', e.target.value);
                    }}
                />
                {!isPending && <button>Add</button>}
                {isPending && <button disabled>Adding...</button>}
            </form>
        </div>
    );
}

export default Create;