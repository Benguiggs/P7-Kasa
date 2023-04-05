import React, {useState} from 'react';
import "../components/PanelDescription.scss";


export function PanelDescription(props){

const [ContentView, setContentView] = useState(true);

const showContent = () => {
    setContentView(!ContentView)
};
const contentStyle = (ContentView ? "view" : "hidden") + "panel__description__content";
    return (
    <div className='PanelDescription'>
<p className='panel__description__title'>
    <span>{props.title}</span>
    <i className="fas fa-chevron-down" onClick={showContent}></i>
    </p>
{ ContentView ? "view" : "hidden"}
<p className={contentStyle}>{props.content}</p>
</div>
    );
}
