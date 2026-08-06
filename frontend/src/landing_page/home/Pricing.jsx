export default function Pricing() {
    return (
        <>
            <div className="container p-3 p-md-5">
                <div className="row p-3 p-md-5 align-items-center">
                    <div className="col-12 col-md-5 p-3 p-md-5 text-center text-md-start">
                        <h1 className="fs-2">Unbeatable pricing</h1>
                        <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                        <a href="" style={{textDecoration: "none"}}>See pricing <i className="fa-solid fa-arrow-right"></i></a>
                    </div>
                    
                    <div className="col-12 col-md-7 mt-5 mt-md-0 d-flex flex-column flex-md-row justify-content-between align-items-center text-center">
                        <div className="price mb-4 mb-md-0 d-flex flex-column align-items-center">
                            <img src="media/images/pricing0.svg" alt="price" className="img-fluid" style={{maxWidth: "100px"}} />
                            <p style={{fontSize: "0.8rem", marginTop: "1rem"}}>Free account<br/>opening</p>
                        </div>

                        <div className="price mb-4 mb-md-0 d-flex flex-column align-items-center">
                            <img src="media/images/pricing0.svg" alt="price" className="img-fluid" style={{maxWidth: "100px"}} />
                            <p style={{fontSize: "0.8rem", marginTop: "1rem"}}>Free equity delivery<br/>and direct mutual funds</p>
                        </div>

                        <div className="price d-flex flex-column align-items-center">
                            <img src="media/images/pricing20.svg" alt="price" className="img-fluid" style={{maxWidth: "100px"}} />
                            <p style={{fontSize: "0.8rem", marginTop: "1rem"}}>Intraday and<br/>F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}