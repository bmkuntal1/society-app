import { Link } from "react-router-dom"


function MenuCard({to, title, icon, description, className}) {
    return (
        <Link to={to} className="text-decoration-none">
            <div className={`card ${className} menu-card p-3 mb-2 border-0 rounded shadow-lg`}>
                <div className="d-flex justify-content-between">
                    <div className="d-flex flex-row align-items-center">
                        <div className="icon"><i className={`bi bi-${icon} display-1`}></i> </div>
                        <div className="ms-2 c-details">
                            <h2 className="mb-0 display-2">{title}</h2> <span className="fs-4">{description}</span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default MenuCard
