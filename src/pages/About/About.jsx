import Pulldown from "../../components/Pulldown/Pulldown";
import Banner from "../../components/Banner/Banner";
import image from "../../assets/images/aboutBackground.png";



export default function About() {
    return (
        <>
            <Banner
                class="about_background"
                image={image}
                alt="Forest and mountains panaroma"
            />
            <section className="about">
                <Pulldown title="Fiabilité">
                    <span>
                        Les annonces postées sur Kasa garantissent une fiabilité
                        totale. Les photos sont conformes aux logements, et
                        toutes les informations sont régulièrement vérifiées par
                        nos équipes.
                    </span>
                </Pulldown>
                <Pulldown title="Respect">
                    <span>
                        La bienveillance fait partie des valeurs fondatrices de
                        Kasa. Tout comportement discriminatoire ou de
                        perturbation du voisinage entraînera une exclusion de
                        notre plateforme.
                    </span>
                </Pulldown>
                <Pulldown title="Service">
                    <span>
                        Nos équipes se tiennent à votre disposition pour vous
                        fournir une expérience parfaite. N'hésitez pas à nous
                        contacter si vous avez la moindre question.
                    </span>
                </Pulldown>
                <Pulldown title="Sécurité">
                    <span>
                        La sécurité est la priorité de Kasa. Aussi bien pour nos
                        hôtes que pour les voyageurs, chaque logement correspond
                        aux critères de sécurité établis par nos services. En
                        laissant une note aussi bien à l'hôte qu'au locataire,
                        cela permet à nos équipes de vérifier que les standards
                        sont bien respectés. Nous organisons également des
                        ateliers sur la sécurité domestique pour nos hôtes.
                    </span>
                </Pulldown>
            </section>
        </>
    );
}