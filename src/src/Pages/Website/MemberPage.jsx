import MemberProfile from "../../components/website/MemberProfile"
import memberImg from "../../assets/images/member1.jpg"
import signatureImg from "../../assets/images/signature.png"

function MemberPage() {
    const data = {
        name: "Rajesh Kumar",
        designation: "President",
        image: memberImg,
        signature: signatureImg,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sagittis orci ac odio dictum tincidunt. Donec ut metus leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. <br/>" +
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sagittis orci ac odio dictum tincidunt. Donec ut metus leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
    }

    return (
        <div className="container px-5 my-5">
            <div className="text-center mb-5">
                <h1 className="display-5 fw-bolder mb-0"><span className="text-gradient d-inline">Member Profile</span></h1>
            </div>
            <div className="row gx-5 justify-content-center">
                <div className="col-lg-12">
                    <MemberProfile data={data} />
                </div>
            </div>
        </div>
    )
}

export default MemberPage