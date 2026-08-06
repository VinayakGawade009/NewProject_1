import { Link } from "react-router-dom";

export default function OpenAccount() {

    return (
        <>
            <div className="container mb-5 p-5" style={{marginTop: "-5rem"}}>
                <div className="row text-center p-5">
                
                    <h1 className="mt-5 fs-2">Open a Zerodha account</h1>

                    <p className="fs-5 mb-5">Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>

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