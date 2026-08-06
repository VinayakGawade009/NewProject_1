export default function Hero() {
    return (
        <>
            <div className="container p-3 p-md-5">
                {/* FIX: Corrected "tow" to "row" and adjusted padding */}
                <div className="row p-3 p-md-5 mt-5 border-bottom text-center">
                    <h1 className="fs-2">Charges</h1>
                    <h3 className="text-muted fs-4 mt-3">List of all charges and taxes</h3>
                </div>

                <div className="row p-3 p-md-5 mt-5 text-center">
                    {/* FIX: Changed col-4 to col-12 col-md-4 */}
                    <div className="col-12 col-md-4 p-4">
                        <img src="media/images/pricingEquity.svg" alt="" className="img-fluid" style={{ maxWidth: "150px" }} />
                        <h1 className="fs-3 mt-3">Free equity delivery</h1>
                        <p className="text-muted">All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                    </div>

                    {/* FIX: Changed col-4 to col-12 col-md-4 */}
                    <div className="col-12 col-md-4 p-4">
                        <img src="media/images/intradayTrades.svg" alt="" className="img-fluid" style={{ maxWidth: "150px" }} />
                        <h1 className="fs-3 mt-3">Intraday and F&O trades</h1>
                        <p className="text-muted">Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                    </div>

                    {/* FIX: Changed col-4 to col-12 col-md-4 */}
                    <div className="col-12 col-md-4 p-4">
                        <img src="media/images/pricingEquity.svg" alt="" className="img-fluid" style={{ maxWidth: "150px" }} />
                        <h1 className="fs-3 mt-3">Free direct MF</h1>
                        <p className="text-muted">All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                    </div>
                </div>
            </div>
        </>
    );
}