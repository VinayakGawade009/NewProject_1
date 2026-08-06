export default function RightSection({
    imageURL, productName, productDescription, learnMore,
}) {
    return (
        <>
            {/* FIX: Removed the -11rem margins */}
            <div className="container p-3 p-md-5">
                
                {/* FIX: flex-column-reverse puts the image on top for mobile screens! */}
                <div className="row p-3 p-md-5 align-items-center text-center text-md-start flex-column-reverse flex-md-row">
                    
                    {/* Text Column */}
                    <div className="col-12 col-md-5 p-3 p-md-5 d-flex flex-column justify-content-center mt-4 mt-md-0">
                        <h1 className="fs-3 mb-4">{productName}</h1>
                        <p style={{fontSize: "1.1rem", lineHeight: "2rem"}}>
                            {productDescription}
                        </p>

                        <div className="d-flex flex-wrap justify-content-center justify-content-md-start">
                            <a href={learnMore} style={{ textDecoration: "none" }}>Learn More <i className="fa-solid fa-arrow-right"></i></a>
                        </div>
                    </div>

                    {/* Image Column */}
                    <div className="col-12 col-md-6 offset-md-1 p-3 p-md-5">
                        <img src={imageURL} className="img-fluid" alt={productName} />
                    </div>
                </div>
            </div>
        </>
    );
}