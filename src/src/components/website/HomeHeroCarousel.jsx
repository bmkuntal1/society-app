import { Carousel } from 'react-bootstrap';
import banner1 from "../../assets/images/banner1.png";
import banner from "../../assets/images/banner.png";


function HomeHeroCarousel() {

    return (
        <div className="home-carousel">
            <Carousel>
                <Carousel.Item>
                    <div>
                        <img className="d-block w-100" src={banner} alt="..." />
                    </div>
                </Carousel.Item>

                <Carousel.Item>
                    <div>
                        <img className="d-block w-100" src={banner1} alt="..." />
                    </div>
                </Carousel.Item>
                
            </Carousel>
        </div>
    );
}

export default HomeHeroCarousel