import BANNER1 from "./BANNER1.png"
import BANNER2 from "./BANNER2.png"
import BANNER3 from "./BANNER3.png"


export const Carousel = () => {

    return (
        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="10000">
                    <img src={BANNER1} className="d-block w-100" alt="BANNER1"/>
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                    <img src={BANNER2} className="d-block w-100" alt="BANNER2"/>
                </div>
                <div className="carousel-item">
                    <img src={BANNER3} className="d-block w-100" alt="BANNER3"/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}; 