import { Carousel } from 'react-bootstrap'


function HomeHeroCarousel() {

    return (
        <div className="home-carousel">
            <Carousel>
                <Carousel.Item>
                    <div>
                        <img className="d-block w-100" src="https://picsum.photos/800/400?text=First slide&bg=373940" alt="First slide" />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div >
                        <img className="d-block w-100" src="https://picsum.photos/800/400?text=First slide&bg=373940" alt="First slide" />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div>
                        <img className="d-block w-100" src="https://picsum.photos/800/400?text=First slide&bg=373940" alt="First slide" />
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default HomeHeroCarousel