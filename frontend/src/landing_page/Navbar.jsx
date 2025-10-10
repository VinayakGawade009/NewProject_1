export default function Navbar() {

    return (
        <>
            <div>
                <nav class="navbar navbar-expand-lg border-bottom" style={{ backgroundColor: "white" }}>
                    <div class="container p-2">
                        <a class="navbar-brand" href="#">
                            <img src="media/images/logo.svg" style={{ width: "23%" }} alt="logo" />
                        </a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">

                            <form class="d-flex" role="search">
                                <ul class="navbar-nav mb-lg-0">
                                    <li class="nav-item">
                                        <a class="nav-link active" aria-current="page" href="#">
                                            Signup
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link active" aria-current="page" href="#">
                                            About
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link active" aria-current="page" href="#">
                                            Products
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link active" aria-disabled="true">
                                            Pricing
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link active" aria-disabled="true">
                                            Support
                                        </a>
                                    </li>
                                </ul>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
}