import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>BlogSite</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create" style={{
                    color: '#fff',
                    backgroundColor: 'red',
                    padding: '10px'
                }}>New Blog</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;