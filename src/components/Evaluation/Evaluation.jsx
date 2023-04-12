import Heart from "../../assets/icons/Vector.png";
import EmptyHeart from "../../assets/icons/Empty_Vector.png";


export default function Evaluation(props) {
    const value = props.value;
    const evaluation = [1, 2, 3, 4, 5];

    return (
        <>
            {evaluation.map((rangeElem, index) =>
                value >= rangeElem ? (
                    <span className="evaluation" key={`${rangeElem}-${index}`}>
                    <img src={Heart} alt="heart" />  
                    </span>
                ) : (
                    <span className="empty--evaluation" key={`${rangeElem}-${index}`}>
                       <img src={EmptyHeart} alt="empty heart" /> 
                    </span>
                )
            )}
        </>
    );
}