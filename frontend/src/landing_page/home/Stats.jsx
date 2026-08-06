export default function Stats() {
    return (
        <>
            <div className="container p-3 p-md-5">
                <div className="row p-3 p-md-5 align-items-center">
                    <div className="col-12 col-md-5 p-3 p-md-5">
                        <h1 className="fs-2 mb-5">Trust with confidence</h1>

                        <h2 className="fs-4 ">Customer-first always</h2>
                        <p className="text-muted mb-5">That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>
                        
                        <h2 className="fs-4 ">No spam or gimmicks</h2>
                        <p className="text-muted mb-5">No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.</p>
                        
                        <h2 className="fs-4 ">The Zerodha universe</h2>
                        <p className="text-muted mb-5">Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                        
                        <h2 className="fs-4 ">Do better with money</h2>
                        <p className="text-muted">With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                    </div>
                    
                    <div className="col-12 col-md-7 text-center mt-4 mt-md-0">
                        <img src="media/images/ecosystem.png" alt="Ecosystem" className="img-fluid mb-3" />
                        <div>
                            <a href="" style={{textDecoration: "none"}}>Explore our products <i className="fa-solid fa-arrow-right"></i></a>
                            <a href="" className="ms-md-5 d-block d-md-inline mt-3 mt-md-0" style={{textDecoration: "none"}}>Try Kite demo <i className="fa-solid fa-arrow-right"></i></a>
                        </div>
                    </div>
                    
                    <div className="col-12 text-center mt-5">
                        <img src="media/images/pressLogos.png" alt="Press Logo" className="img-fluid" style={{width: "65%", margin: "auto"}}/>
                    </div>
                </div>
            </div>
        </>
    );
}