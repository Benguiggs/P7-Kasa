export default function Evaluation(props) {
    const value = props.value;
    const evaluation = [1, 2, 3, 4, 5];

    return (
        <>
            {evaluation.map((rangeElem, index) =>
                value >= rangeElem ? (
                    <span className="evaluation" key={`${rangeElem}-${index}`}>
                        &#9733;
                    </span>
                ) : (
                    <span className="empty--evaluation" key={`${rangeElem}-${index}`}>
                        &#9733;
                    </span>
                )
            )}
        </>
    );
}