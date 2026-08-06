export default function Universe() {
    return (
        <>
            <div className="container p-3 p-md-5">
                <div className="row p-3 p-md-5 text-center" style={{fontSize: "0.8rem"}}>
                    <h1 className="fs-4 mb-4">The Zerodha Universe</h1>
                    <p className="text-muted mb-5">Extend your trading and investment experience even further with our partner platforms</p>

                    <div className="col-12 col-md-4 p-3 mt-4">
                        <img src="media/images/zerodhaFundhouse.png" className="img-fluid mb-4" style={{maxWidth: "150px"}} alt="" />
                        <p className="text-small text-muted">
                            Our asset management venture<br />
                            that is creating simple and transparent index<br />
                            funds to help you save for your goals.
                        </p>
                    </div>

                    <div className="col-12 col-md-4 p-3 mt-4">
                        <img src="media/images/sensibullLogo.svg" className="img-fluid mb-4" style={{maxWidth: "180px"}} alt="" />
                        <p className="text-small text-muted">
                            Options trading platform that lets you<br />
                            create strategies, analyze positions, and examine<br />
                            data points like open interest, FII/DII, and more.
                        </p>
                    </div>

                    <div className="col-12 col-md-4 p-3 mt-4">
                        <img src="media/images/tijori.svg" className="img-fluid mb-4" style={{maxWidth: "130px"}} alt="" />
                        <p className="text-small text-muted">
                            Investment research platform<br />
                            that offers detailed insights on stocks,<br />
                            sectors, supply chains, and more.
                        </p>
                    </div>

                    <div className="col-12 col-md-4 p-3 mt-4">
                        <img src="media/images/streakLogo.png" className="img-fluid mb-4" style={{maxWidth: "140px"}} alt="" />
                        <p className="text-small text-muted">
                            Algo & strategy platform that lets you<br />
                            create, backtest, and deploy<br />
                            trading strategies code-free.
                        </p>
                    </div>

                    <div className="col-12 col-md-4 p-3 mt-4">
                        <img src="media/images/smallcaseLogo.png" className="img-fluid mb-4" style={{maxWidth: "180px"}} alt="" />
                        <p className="text-small text-muted">
                            Thematic investing platform<br />
                            that helps you invest in diversified<br />
                            baskets of stocks on ETFs.
                        </p>
                    </div>

                    <div className="col-12 col-md-4 p-3 mt-4">
                        <img src="media/images/dittoLogo.png" className="img-fluid mb-4" style={{maxWidth: "130px"}} alt="" />
                        <p className="text-small text-muted">
                            Personalized advice on life<br />
                            and health insurance. No spam<br />
                            and no mis-selling.
                        </p>
                    </div>
                    
                    {/* Button Fix */}
                    <div className="col-12 text-center mt-5">
                        <button className="p-2 btn fs-5 px-4" style={{backgroundColor: "#387ed1", color: "white", borderRadius: "3px"}}>
                            Sign up for free
                        </button>
                    </div>

                </div>
            </div>
        </>
    );
}