import BlogList from './BlogList';
import useFetch from './useFetch';



const Home = () => {
    // const [blogs, setBlogs] = useState([
    //     {id:1, title: 'Title 1', author: 'Jon Doe', body: 'Lorem ipsum...'},
    //     {id:2, title: 'Title 2', author: 'Fon Hoe', body: 'Lorem ipsum...'},
    //     {id:3, title: 'Title 3', author: 'Jon Doe', body: 'Lorem ipsum...'}
    // ]);
    
    // getDocs(collection(db, "blogs"))
    //     .then(res => {
    //         console.log(res);
    //         res.forEach(doc => {
    //             console.log(doc.id, doc.data());
    //         })
    //     });
    
    // querySnapshot.forEach(doc => {
    //     console.log(doc);
    // });
    const {data, isPending, error} = useFetch();
    

    return (
    <div className="home">
        { error && <div>{error}</div> }
        { isPending && <div>Loading...</div> }
        { data && <BlogList blogs={data} title="All Blogs" /> }
        {/* <BlogList blogs={blogs.filter( blog => blog.author === 'Jon Doe')} title="Jon's Blogs"/> */}
    </div>
    );
}
 
export default Home;