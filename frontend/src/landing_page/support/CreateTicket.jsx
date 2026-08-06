export default function CreateTicket() {
    return (
        <>
            <div className="container p-3 p-md-5">
                <div className="row">

                    {/* FIX: Changed col-9 to col-12 col-md-8 and standardized padding */}
                    <div className="col-12 col-md-8 p-3 p-md-4">

                        <div className="option" style={{ marginBottom: "4vh" }}>
                            <div style={{ width: "100%", border: "2px solid #f6f6f6" }} type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample1" aria-expanded="false" aria-controls="collapseExample1">
                                <div className="d-inline-flex justify-content-between align-items-center" style={{ width: "100%", paddingRight: "1rem" }}>
                                    <div className="right">
                                        <i className="fa-solid fa-circle-plus" style={{ padding: "1rem 2rem 1rem 1rem", backgroundColor: "#f7fbfe" }}></i>
                                        <p className="d-inline">
                                            &nbsp; Account Opening
                                        </p>
                                    </div>
                                    <i className="fa-solid fa-chevron-down"></i>
                                </div>
                            </div>
                            <div className="collapse" id="collapseExample1" style={{ width: "98%", margin: "auto" }}>
                                <div className="card card-body border-0 shadow-sm mt-2">
                                    <ul className="list-unstyled lh-lg">
                                        <li><a href="" style={{ textDecoration: "none" }}>Resident individual</a></li>
                                        <li><a href="" style={{ textDecoration: "none" }}>Minor</a></li>
                                        <li><a href="" style={{ textDecoration: "none" }}>Non Resident Indian (NRI)</a></li>
                                        <li><a href="" style={{ textDecoration: "none" }}>Company, Partnership, HUF and LLP</a></li>
                                        <li><a href="" style={{ textDecoration: "none" }}>Glossary</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="option" style={{ marginBottom: "4vh" }}>
                            <div style={{ width: "100%", border: "2px solid #f6f6f6" }} type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample2">
                                <div className="d-inline-flex justify-content-between align-items-center" style={{ width: "100%", paddingRight: "1rem" }}>
                                    <div className="right">
                                        <i className="fa-regular fa-circle-user" style={{ padding: "1rem 2rem 1rem 1rem", backgroundColor: "#f7fbfe" }}></i>
                                        <p className="d-inline">
                                            &nbsp; Your Zerodha Account
                                        </p>
                                    </div>
                                    <i className="fa-solid fa-chevron-down"></i>
                                </div>
                            </div>
                            <div className="collapse" id="collapseExample2" style={{ width: "98%", margin: "auto" }}>
                                <div className="card card-body border-0 shadow-sm mt-2">
                                    <ul className="list-unstyled lh-lg">
                                        <li><a href="" style={{ textDecoration: "none" }}>Your Profile</a></li>
                                        <li><a href="" style={{ textDecoration: "none" }}>Account modification</a></li>
                                        <li><a href="" style={{ textDecoration: "none" }}>Client Master Report (CMR) and Depository Participant (DP)</a></li>
                                        <li><a href="" style={{ textDecoration: "none" }}>Nomination</a></li>
                                        <li><a href="" style={{ textDecoration: "none" }}>Transfer and conversion of securities</a></li>
                                        <li><a href="" style={{ textDecoration: "none" }}>General</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="option" style={{ marginBottom: "4vh" }}>
                            <div style={{ width: "100%", border: "2px solid #f6f6f6" }} type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample3" aria-expanded="false" aria-controls="collapseExample3">
                                <div className="d-inline-flex justify-content-between align-items-center" style={{ width: "100%", paddingRight: "1rem" }}>
                                    <div className="right">
                                        <i className="fa-regular fa-circle-play" style={{ padding: "1rem 2rem 1rem 1rem", backgroundColor: "#f7fbfe" }}></i>
                                        <p className="d-inline">
                                            &nbsp; Kite
                                        </p>
                                    </div>
                                    <i className="fa-solid fa-chevron-down"></i>
                                </div>
                            </div>
                            <div className="collapse" id="collapseExample3" style={{ width: "98%", margin: "auto" }}>
                                <div className="card card-body border-0 shadow-sm mt-2">
                                    <ul className="list-unstyled lh-lg">
                                        <li><a href="" style={{ textDecoration: "none" }}>IPO</a></li>
                                        <li><a href="" style={{ textDecoration: "none" }}>Trading FAQs</a></li>
                                        <li><a href="" style={{ textDecoration: "none" }}>Margin Trading Facility (MTF) and Margins</a></li>
                                        <li><a href="" style={{ textDecoration: "none" }}>Charts and orders</a></li>
                                        <li><a href="" style={{ textDecoration: "none" }}>Alerts and Nudges</a></li>
                                        <li><a href="" style={{ textDecoration: "none" }}>General</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="option" style={{ marginBottom: "4vh" }}>
                            <div style={{ width: "100%", border: "2px solid #f6f6f6" }} type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample4" aria-expanded="false" aria-controls="collapseExample4">
                                <div className="d-inline-flex justify-content-between align-items-center" style={{ width: "100%", paddingRight: "1rem" }}>
                                    <div className="right">
                                        <i className="fa-solid fa-indian-rupee-sign" style={{ padding: "1rem 2rem 1rem 1rem", backgroundColor: "#f7fbfe" }}></i>
                                        <p className="d-inline">
                                            &nbsp; Funds
                                        </p>
                                    </div>
                                    <i className="fa-solid fa-chevron-down"></i>
                                </div>
                            </div>
                            <div className="collapse" id="collapseExample4" style={{ width: "98%", margin: "auto" }}>
                                <div className="card card-body border-0 shadow-sm mt-2">
                                    <ul className="list-unstyled lh-lg">
                                        <li><a href="" style={{ textDecoration: "none" }}>Add money</a></li>
                                        <li><a href="" style={{ textDecoration: "none" }}>Withdraw money</a></li>
                                        <li><a href="" style={{ textDecoration: "none" }}>Add bank accounts</a></li>
                                        <li><a href="" style={{ textDecoration: "none" }}>eMandates</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="option" style={{ marginBottom: "4vh" }}>
                            <div style={{ width: "100%", border: "2px solid #f6f6f6" }} type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample5" aria-expanded="false" aria-controls="collapseExample5">
                                <div className="d-inline-flex justify-content-between align-items-center" style={{ width: "100%", paddingRight: "1rem" }}>
                                    <div className="right">
                                        <i className="fa-solid fa-magnifying-glass" style={{ padding: "1rem 2rem 1rem 1rem", backgroundColor: "#f7fbfe" }}></i>
                                        <p className="d-inline">
                                            &nbsp; Console
                                        </p>
                                    </div>
                                    <i className="fa-solid fa-chevron-down"></i>
                                </div>
                            </div>
                            <div className="collapse" id="collapseExample5" style={{ width: "98%", margin: "auto" }}>
                                <div className="card card-body border-0 shadow-sm mt-2">
                                    <ul className="list-unstyled lh-lg">
                                        <li><a href="" style={{ textDecoration: "none" }}>Portfolio</a></li>
                                        <li><a href="" style={{ textDecoration: "none" }}>Corporate actions</a></li>
                                        <li><a href="" style={{ textDecoration: "none" }}>Funds statement</a></li>
                                        <li><a href="" style={{ textDecoration: "none" }}>Reports</a></li>
                                        <li><a href="" style={{ textDecoration: "none" }}>Profile</a></li>
                                        <li><a href="" style={{ textDecoration: "none" }}>Segments</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="option">
                            <div style={{ width: "100%", border: "2px solid #f6f6f6" }} type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample6" aria-expanded="false" aria-controls="collapseExample6">
                                <div className="d-inline-flex justify-content-between align-items-center" style={{ width: "100%", paddingRight: "1rem" }}>
                                    <div className="right">
                                        <i className="fa-regular fa-circle-check" style={{ padding: "1rem 2rem 1rem 1rem", backgroundColor: "#f7fbfe" }}></i>
                                        <p className="d-inline">
                                            &nbsp; Coin
                                        </p>
                                    </div>
                                    <i className="fa-solid fa-chevron-down"></i>
                                </div>
                            </div>
                            <div className="collapse" id="collapseExample6" style={{ width: "98%", margin: "auto" }}>
                                <div className="card card-body border-0 shadow-sm mt-2">
                                    <ul className="list-unstyled lh-lg pb-3">
                                        <li><a href="" style={{ textDecoration: "none" }}>Mutual funds</a></li>
                                        <li><a href="" style={{ textDecoration: "none" }}>National Pension Scheme (NPS)</a></li>
                                        <li><a href="" style={{ textDecoration: "none" }}>FixedDeposit (FD)</a></li>
                                        <li><a href="" style={{ textDecoration: "none" }}>Features on Coin</a></li>
                                        <li><a href="" style={{ textDecoration: "none" }}>Payments and Orders</a></li>
                                        <li><a href="" style={{ textDecoration: "none" }}>General</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* FIX: Changed col-3 to col-12 col-md-4 and REMOVED the negative marginLeft */}
                    <div className="col-12 col-md-4 p-3 p-md-4 mt-4 mt-md-0">
                        <div className="updates mb-4" style={{ borderLeft: "8px solid orange", backgroundColor: "#fff4e6", padding: "1rem" }}>
                            <ul className="list-unstyled m-0">
                                <li className="mb-3"><a href="" style={{ fontSize: "1.1rem", textDecoration: "none", color: "#387ed1" }}>Surveillance measure on scrips - October 2025</a></li>
                                <li><a href="" style={{ fontSize: "1.1rem", textDecoration: "none", color: "#387ed1" }}>Rights Entitlements listing in October 2025</a></li>
                            </ul>
                        </div>

                        <div className="quick-links">
                            <p style={{border: "2px solid #f6f6f6", padding: "1rem", backgroundColor: "#f6f6f6", fontWeight: "bold"}}>Quick Links</p>
                            <p style={{border: "2px solid #f6f6f6", padding: "1rem", marginTop: "-1rem"}}><a href="" style={{textDecoration: "none"}}>1. Track account opening</a></p>
                            <p style={{border: "2px solid #f6f6f6", padding: "1rem", marginTop: "-1rem"}}><a href="" style={{textDecoration: "none"}}>2. Track segment activation</a></p>
                            <p style={{border: "2px solid #f6f6f6", padding: "1rem", marginTop: "-1rem"}}><a href="" style={{textDecoration: "none"}}>3. Intraday margins</a></p>
                            <p style={{border: "2px solid #f6f6f6", padding: "1rem", marginTop: "-1rem"}}><a href="" style={{textDecoration: "none"}}>4. Kite user manual</a></p>
                            <p style={{border: "2px solid #f6f6f6", padding: "1rem", marginTop: "-1rem"}}><a href="" style={{textDecoration: "none"}}>5. Learn how to create a ticket</a></p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}