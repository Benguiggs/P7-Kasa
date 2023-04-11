import Carousel from "../../components/Carousel/Carousel";
import Pulldown from "../../components/Pulldown/Pulldown";
import Evaluation from "../../components/Evaluation/Evaluation";
import Tags from "../../components/Tag/Tags";
import { useParams } from "react-router-dom";
import Error from "../Error/ErrorPage";



export default function flats(props) {
    let { id } = useParams();
    let data = props.datas.find((data) => data.id === id);
    if (!data) {
        return <Error />;
    }
    return (
        <>
            <Carousel pictures={data.pictures} />
            <section className="flat">
                <header className="flat__header">
                    <div className="flat__header__title-wrap">
                        <h2 className="flat__header__title">{data.title}</h2>
                        <p className="flat__header__location">
                            {data.location}
                        </p>
                        <Tags data={data.tags} />
                    </div>
                    <div className="flat__header__host-wrap">
                        <div className="flat__header__host">
                            <p className="flat__header__host__name">
                                {data.host.name}
                            </p>
                            <img
                                className="flat__header__host__picture"
                                src={data.host.picture}
                                alt="Profile picture"
                            ></img>
                        </div>
                        <div className="flat__header__evaluation">
                            <Evaluation value={data.evaluation} />
                        </div>
                    </div>
                </header>
                <div className="flat__content">
                    <Pulldown title="Description" content={data.description} />
                    <Pulldown title="Equipements" content={data.equipments} />
                </div>
            </section>
        </>
    );
}