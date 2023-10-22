const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>
                Music Map
            </h1>
            <div className="taskbarItems">
                <a href="/">Home</a>
                <a href="/statistics">Statistics</a>
                <a href="/about">About</a>
            </div>
        </nav>
    );
}
 
export default Navbar;