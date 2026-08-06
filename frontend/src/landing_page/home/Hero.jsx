import { Link } from "react-router-dom";

export default function Hero() {
    return (
        <>
            <div className="container mb-5 p-5 mt-5">
                <div className="row text-center p-5">
                    {/* Made image responsive with max-width */}
                    <img 
                        src="media/images/homeHero.svg" 
                        alt="Hero Image" 
                        className="mb-4 img-fluid" 
                        style={{ maxWidth: "800px", margin: "auto" }}
                    />

                    <h1 className="mt-5 fs-2">Invest in everything</h1>

                    <p className="fs-5 mb-5">Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>

                    <Link to="/signup">
                        {/* FIX: Removed the 27% width. Added 'px-4' for horizontal padding */}
                        <button 
                            className="p-2 btn fs-5 px-4" 
                            style={{ margin: "0 auto", backgroundColor: "#387ed1", color: "white", borderRadius: "3px" }}
                        >
                            Sign up for free
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
}