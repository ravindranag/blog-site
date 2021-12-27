import { Link } from "react-router-dom";

const BlogList = props => {
    const blogs = props.blogs;
    const title = props.title;
    // const handleDelete = props.handleDelete;

    // const handleDelete = (id) =>{
    //     const newBlogs = blogs.filter( blog => blog.id !== id );
    //     setData(newBlogs);
    // }

    return (
        <div className="blog-list">
            <h1>{title}</h1>
            {blogs.map( blog => (
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                        <h2>{blog.title}</h2>
                    </Link>
                    <p style={{
                        color: '#333'
                    }}>{blog.author}</p>
                    {/* <button onClick={() => handleDelete(blog.id)}>Delete</button> */}
                </div>    
            ))}
        </div>
    );
}
 
export default BlogList;