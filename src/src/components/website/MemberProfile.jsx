

function MemberProfile({ data }) {
    //https://preview.themeforest.net/item/swipy-creative-agency-html-template/full_screen_preview/39379170?_ga=2.136832505.874820317.1695651577-40439919.1650283612&_gac=1.191516120.1693330893.CjwKCAjwrranBhAEEiwAzbhNtWp1zoUAIe4pE9qxb1kORqbAml72qEdfEU8TrJ5nmQPbAsOMw7ePohoC9VAQAvD_BwE
    return (
        <div className="row align-items-top">
            <div className="col-lg-4">
                <figure className="figure mt-lg-3">
                    <img src={data.image} className="figure-img img-fluid rounded" alt="..." />
                </figure>
            </div>
            <div className="col-lg-8 ps-lg-5">
                <h2 className="display-3 pt-0 ">{data.name}</h2>
                <span className="lead fs-3 text-muted">{data.designation}</span>
                <ul className="list-inline social-icons  mb-3">
                    <li className="list-inline-item"><a href="#"><i className="bi bi-facebook text-dark fs-5 me-4"></i></a></li>
                    <li className="list-inline-item"><a href="#"><i className="bi bi-twitter text-dark fs-5 me-4"></i></a></li>
                    <li className="list-inline-item"><a href="#"><i className="bi bi-instagram text-dark fs-5 me-4"></i></a></li>
                    <li className="list-inline-item"><a href="#"><i className="bi bi-dribbble text-dark fs-5 me-4"></i></a></li>
                </ul>
                <div className="lead pb-5 fw-normal">
                    <p> {data.description}</p>
                    <p> {data.description}</p>
                </div>
                <div className="ps-informations">
                    <div className="pb-3">
                        <img src={data.signature} alt=".." width="200" />
                    </div>
                    <div className="description">
                        <p className="lead">{data.name}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MemberProfile