export default function Brokerage() {
    return (
        <>
            <div className="container p-3 p-md-5 border-top">
                <div className="row mt-5">
                    {/* FIX: Changed col-8 to col-12 col-md-8 */}
                    <div className="col-12 col-md-8">
                        <a href="" style={{textDecoration: "none"}}>
                            <h3 className="fs-5 text-center text-md-start">Brokerage calculator</h3>
                        </a>

                        <ul style={{lineHeight: "2.5" , fontSize: "0.85rem"}} className="text-muted mt-4">
                            <li>Call & Trade and RMS auto-squareoff: Additional charges of ₹50 + GST per order.</li>
                            <li>Digital contract notes will be sent via e-mail.</li>
                            <li>Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Courier charges apply.</li>
                            <li>For NRI account (non-PIS), 0.5% or ₹100 per executed order for equity (whichever is lower).</li>
                            <li>For NRI account (PIS), 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
                            <li>If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</li>
                        </ul>
                    </div>

                    {/* FIX: Changed col-4 to col-12 col-md-4 and added top margin for mobile stacking */}
                    {/* <div className="col-12 col-md-4 mt-5 mt-md-0">
                        <a href="" style={{textDecoration: "none"}}>
                            <h3 className="fs-5 text-center text-md-start">List of charges</h3>
                        </a>
                    </div> */}
                </div>
            </div>
        </>
    );
}