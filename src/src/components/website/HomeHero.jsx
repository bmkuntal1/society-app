import { Link } from "react-router-dom";
import HomeHeroCarousel from "./HomeHeroCarousel";

function HomeHero() {
    return (
        <header className="py-3">
            <div className="container px-5 pb-5">
                <div className="row gx-5 align-items-center">
                    <div className="col-xxl-7">

                        <div className="text-center text-xxl-start">
                            <div className="fs-3 fw-light text-muted">Welcome To</div>
                            <h1 className="display-3 fw-bolder mb-0"><span className="text-gradient d-inline">Manglam Tarang Society</span></h1>
                            <div className="fs-3 fw-light text-muted text-end mb-5 me-lg-5">यहाँ ख़ुशियाँ बसती हैं।</div>
                            <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xxl-start mb-3">
                                <Link className="btn btn-primary btn-lg px-5 py-3 me-sm-3 fs-6 fw-bolder" to="/events">Events</Link>
                                {/* <Link className="btn btn-outline-dark btn-lg px-5 py-3 fs-6 fw-bolder" to="/resident-corner">Resident Corner</Link> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-5">
                        {/* <HoemHeroImage /> */}
                        <HomeHeroCarousel />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default HomeHero