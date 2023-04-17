import { useState } from "react";
import icon_arrow from "../../assets/icons/arrow.png"

export default function Carousel({ pictures }) {
    const [isActive, setActive] = useState(0);

    const btnNext = () => {
        setActive(isActive === pictures.length - 1 ? 0 : isActive + 1);
    };

    const btnPrevious = () => {
        setActive(isActive === 0 ? pictures.length - 1 : isActive - 1);
    };

    return (
        <section className="carousel">
            {pictures.map((picture, index) => (
                <div className={isActive === index ? "slide" : "slide--hidden"}
                    key={index}
                >
                    {index === isActive && (
                        <img src={picture} alt="room" />
                    )}
                </div>
            ))}
            {pictures.length > 1 ? (
                <>
                    <button className="button btn_next" onClick={btnNext}>
                        <img src={icon_arrow} alt="button next" />
                    </button>
                    <button className="button btn_previous" onClick={btnPrevious}>
                        <img src={icon_arrow} alt="button previous" />
                    </button>
                    <div className="counter">
                        {isActive + 1}/{pictures.length}
                    </div>
                </>
            ) : null}
        </section>
    );
}