const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>BlogSite</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create" style={{
                    color: '#fff',
                    backgroundColor: 'red',
                    padding: '10px'
                }}>New Blog</a>
            </div>
        </nav>
    );
}
 
export default Navbar;