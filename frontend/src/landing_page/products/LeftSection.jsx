export default function LeftSection({
    imageURL, productName, productDescription, tryDemo, learnMore, googlePlay, appStore
}) {
    return (
        <>
            <div className="container p-3 p-md-5">
                <div className="row p-3 p-md-5 align-items-center text-center text-md-start">
                    
                    {/* Image Column */}
                    <div className="col-12 col-md-6 p-3 p-md-5">
                        <img src={imageURL} className="img-fluid" alt={productName} />
                    </div>
                    
                    {/* Text Column */}
                    <div className="col-12 col-md-6 p-3 p-md-5 mt-4 mt-md-0 d-flex flex-column justify-content-center">
                        <h1 className="fs-3 mb-4">{productName}</h1>
                        <p style={{fontSize: "1.1rem", lineHeight: "2rem"}}>
                            {productDescription}
                        </p>

                        <div className="d-flex flex-wrap justify-content-center justify-content-md-start mb-4">
                            <a href={tryDemo} style={{textDecoration: "none"}}>Try Demo <i className="fa-solid fa-arrow-right"></i></a>
                            <a href={learnMore} className="ms-4 ms-md-5" style={{ textDecoration: "none" }}>Learn More <i className="fa-solid fa-arrow-right"></i></a>
                        </div>

                        <div className="d-flex flex-wrap justify-content-center justify-content-md-start mt-2">
                            <a href={googlePlay}><img src="media/images/googlePlayBadge.svg" alt="googlePlayBadge" /></a>
                            <a href={appStore}><img src="media/images/appstoreBadge.svg" className="ms-3" alt="appstoreBadge" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}