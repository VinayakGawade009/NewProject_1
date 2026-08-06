export default function Team() {
    return (
        <>
            {/* FIX: Removed the extreme negative marginTop that would cause overlapping on mobile */}
            <div className="container p-3 p-md-5">
                <div className="row p-3 p-md-5 mb-3 mb-md-5">
                    <h1 className="text-center fs-3">People</h1>
                </div>
                
                <div className="row p-3 p-md-5 text-muted mx-0 mx-md-5 align-items-center" style={{fontSize: "1rem", lineHeight: "1.8"}}>
                    
                    {/* FIX: Changed col-5 to col-12 col-md-5 */}
                    <div className="col-12 col-md-5 p-3 p-md-5 text-center">
                       <img 
                           src="media/images/nithinKamath.jpg" 
                           alt="nithinKamath" 
                           style={{width: "70%", maxWidth: "300px", borderRadius: "100%"}} 
                       />
                       <p className="fs-5 mt-4">Nithin Kamath</p>
                       <p>Founder, CEO</p>
                    </div>
                    
                    {/* FIX: Changed col-7 to col-12 col-md-7 */}
                    <div className="col-12 col-md-7 p-3 p-md-5" style={{fontSize: "1rem", lineHeight: "1.7rem"}}>
                        <p>
                            Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.
                        </p>
                        <p>
                            He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
                        </p>
                        <p>
                            Playing basketball is his zen.
                        </p>
                        <p>
                            Connect on <a href="" style={{textDecoration: "none"}}>Homepage</a> / <a href="" style={{textDecoration: "none"}}>TradingQnA</a> / <a href="" style={{textDecoration: "none"}}>Twitter</a>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}