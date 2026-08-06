export default function Hero() {
    return (
        <>
            <div style={{ backgroundColor: "#f6f6f6" }}>
                {/* FIX: Changed flex-wrap to stack vertically on mobile, side-by-side on desktop */}
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-center p-4 p-md-5 mt-5">
                    <h1 className="fs-3 mb-3 mb-md-0" style={{ color: "#424242" }}>Support Portal</h1>
                    
                    {/* FIX: Removed width: 9% and invalid negative padding. Added px-4 for standard size */}
                    <button className="btn px-4 py-2 fs-5" style={{ backgroundColor: "#387ed1", color: "white", borderRadius: "3px" }}>
                        My tickets
                    </button>
                </div>

                <div className="input-group mb-3 px-4 px-md-5 pb-5">
                    <span style={{color: "grey", backgroundColor: "white", borderRight: "none"}} className="input-group-text px-3" id="basic-addon1">
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </span>
                    <input style={{color: "grey", borderLeft: "none"}} type="text" className="form-control py-3 shadow-none" placeholder="Eg: How do I open my account, How do I activate F&O..." aria-label="Search" aria-describedby="basic-addon1" />
                </div>
            </div>
        </>
    );
}