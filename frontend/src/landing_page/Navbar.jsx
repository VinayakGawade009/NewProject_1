import { Link } from "react-router-dom";

export default function Navbar() {
    
    // Function to safely close the mobile navbar when a link is clicked
    const closeMenu = () => {
        const navbarCollapse = document.getElementById("navbarSupportedContent");
        // Check if the menu is currently open (Bootstrap adds the "show" class when open)
        if (navbarCollapse && navbarCollapse.classList.contains("show")) {
            const toggler = document.querySelector(".navbar-toggler");
            if (toggler) {
                toggler.click(); // Triggers Bootstrap's native close animation
            }
        }
    };

    return (
        <>
            <div>
                <nav className="navbar navbar-expand-lg border-bottom fixed-top" style={{ backgroundColor: "white" }}>
                    <div className="container px-5 py-2">
                        {/* Added onClick to the logo so clicking it also closes the menu */}
                        <Link className="navbar-brand" to="/" onClick={closeMenu}>
                            <img src="media/images/logo.svg" style={{ width: "130px" }} alt="logo" />
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <form className="d-flex" role="search">
                                <ul className="navbar-nav mb-lg-0">
                                    <li className="nav-item">
                                        {/* Added onClick={closeMenu} to every link */}
                                        <Link className="nav-link active" aria-current="page" to="/signup" onClick={closeMenu}>
                                            Signup
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" to="/about" onClick={closeMenu}>
                                            About
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" to="/products" onClick={closeMenu}>
                                            Products
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link active" aria-disabled="true" to="/pricing" onClick={closeMenu}>
                                            Pricing
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link active" aria-disabled="true" to="/support" onClick={closeMenu}>
                                            Support
                                        </Link>
                                    </li>
                                </ul>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
}