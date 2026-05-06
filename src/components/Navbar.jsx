import "./Navbar.css"

function Navbar() {
    return (
        <nav className="top-nav">
            <div className="nav-brand">
                Rios of Mercedes
            </div>

            <div className="nav-links">
                <span>Directory</span>
                <span>Departments</span>
                <span>Leadership</span>
            </div>
        </nav>
    );
}

export default Navbar;