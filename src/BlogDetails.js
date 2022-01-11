import { useContext } from "react";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import NotFound from "./NotFound";
import useFetch from "./useFetch";
import { doc, deleteDoc } from "firebase/firestore";
import { dbContext } from "./App";


const BlogDetails = () => {
    const db = useContext(dbContext);
    const { id } = useParams();
    const { data, isPending, error} = useFetch();
    // console.log(typeof blog);
    // console.log(data);
    let blog = null;
    for(let index in data){
        if(id === data[index].id){
            blog = data[index];
        }
    }
    // console.log(blog);
    const history = useHistory();

    // const handleDelete = () => {
    //     fetch('http://localhost:8000/blogs/' + blog.id, {
    //         method: 'DELETE'
    //     }).then(() => {
    //         history.push('/');
    //     });
    // };

    const handleDelete = () => {
        deleteDoc(doc(db, "blogs", blog.id));
        history.push('/');
        alert('Blog deleted!');
    };

    return ( 
        <div className="BlogDetails">
            { isPending && <div>Loading...</div> }
            { error && <div>{error}</div> }
            { blog && (
                <div className="blog-content">
                    <h1>{blog.title}</h1>
                    <p>Written by {blog.author}</p>
                    <p className="blog-body">{blog.body}</p>
                    {/* <button onClick={handleDelete}>Delete</button> */}
                </div> 
            )}
            { (isPending === false) && (blog === null) && (<NotFound />)}
        </div>
    );
}
 
export default BlogDetails;