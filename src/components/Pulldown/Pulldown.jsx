import { useState } from "react";
import icon_arrow from "../../assets/icons/arrow.svg"

export default function Pulldown(props) {
    const [isExtend, setExtend] = useState(false);
    return (
        <div className="pulldown">
            <div className="pulldown_header">
                {props.title}
                <div>
                    {isExtend ? (
                        <button onClick={() => setExtend(false)}>
                            <img className="arrow_up"
                                src={icon_arrow}
                                alt="open button" />
                        </button>
                    ) : (
                        <button onClick={() => setExtend(true)}>
                            <img className="arrow_down"
                                src={icon_arrow}
                                alt="close button" />
                        </button>
                    )}
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