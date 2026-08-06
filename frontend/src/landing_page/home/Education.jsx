export default function Education() {
    return (
        <>
            <div className="container p-3 p-md-5">
                <div className="row p-3 p-md-5 align-items-center">
                    <div className="col-12 col-md-5 text-center mb-4 mb-md-0">
                        <img src="media/images/education.svg" alt="Education" className="img-fluid" />
                    </div>
                    
                    {/* Replaced empty col-1 with standard Bootstrap offsets/margins */}
                    <div className="col-12 col-md-6 offset-md-1 text-center text-md-start">
                        <h1 className="fs-2 mb-4">Free and open market education</h1>
                        <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                        <a href="" style={{textDecoration: "none"}}>Varsity <i className="fa-solid fa-arrow-right"></i></a>
                        
                        <p className="mt-5">TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                        <a href="" style={{textDecoration: "none"}}>TradingQ&A <i className="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </>
    );
}