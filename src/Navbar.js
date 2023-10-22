const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>
                HackTX 2023 - Map
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