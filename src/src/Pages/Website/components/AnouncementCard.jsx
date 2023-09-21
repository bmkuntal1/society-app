import React from 'react'

function AnouncementCard() {
    return (
        <div className="card shadow border-0 rounded-4 mb-5">
            <div className="card-body p-5">
                <div className="row align-items-center gx-5">
                    <div className="col text-center text-lg-start mb-4 mb-lg-0">
                        <div className="bg-light p-4 rounded-4">
                            <div className="text-primary fw-bolder mb-2">17 Sept, 2023</div>
                            <div className="small fw-bolder">General Meeting</div>
                            <div className="small text-muted">By Tarang Flat Owners</div>
                            <div className="small text-muted">Club House</div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div>
                            दिनांक 17 सितम्बर 2023 को तरंग फ्लैट ओनर्स क्लब हाउस में आयोजित जनरल मीटिंग में फ्लैट ओनर्स द्वारा चुनाव प्रक्रिया, मानदंड, और तारीख का निर्धारण एवं अन्य एजेंडा पॉइंट्स पर चर्चा की गई और निर्णय लिये गए।
                        </div>
                        {/* add small download buttons at end for notice and MoM */}
                        <div className="mt-2 text-end">
                            <a className="btn btn-pill text-gradient px-4" href="/public/pdf/Notice_GM_17092023.pdf">Notice <i className="bi bi-download"></i></a>
                            <a className="btn btn-pill text-gradient px-4" href="/public/pdf/MoM_GM_17092023.pdf">MoM <i className="bi bi-download"></i></a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AnouncementCard