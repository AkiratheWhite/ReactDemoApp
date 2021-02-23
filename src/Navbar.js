const Navbar = () => {
    return (  
        <nav className="navbar">
            <h1>Stardust Crusader's Blog</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create" style={{
                    color: "#FFFFFF",
                    backgroundColor: "#f1356D",
                    borderRadius: "8px"
                }}>New Blog</a>
            </div>
        </nav>
    );
}
 
export default Navbar;