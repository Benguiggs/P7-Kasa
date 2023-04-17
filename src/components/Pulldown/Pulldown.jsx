import { useState } from "react";
import icon_arrow from "../../assets/icons/arrow.png"

export default function Pulldown(props) {
    const [isExtend, setExtend] = useState(false);

    return (
        <div className="pulldown">
            <div className="pulldown_header">
                {props.title}
                <div>
                    <button onClick={() => setExtend(previousState => !previousState)}>
                        <img
                            className={`arrow ${isExtend ? "arrow--up" : "arrow--down"}`}
                            src={icon_arrow}
                            alt={isExtend ? "close button" : "open button"}
                        />
                    </button>
                </div>
            </div>
            {Array.isArray(props.content) ? (
                <ul className={isExtend ? "content" : "content--hidden"}>
                    {props.content.map((equipment, index) => (
                        <li key={`${equipment}-${index}`}>{equipment}</li>
                    ))}
                </ul>
            ) : (
                <div className={isExtend ? "content" : "content--hidden"}>
                    {props.content}
                    {props.children}
                </div>
            )}
        </div>
    );
}