import React ,{ Component }from "react";
import { FiHeart } from "react-icons/fi";
import { FaRegEye,FaTooth,FaFemale,FaMicroscope } from "react-icons/fa";
import { GiStethoscope,GiNoseFront } from "react-icons/gi";
import { Link } from "react-router-dom";



const ServiceList = [
    {
        icon: <GiStethoscope />,
        title: 'Médecine Générale',
        description: 'Notre département de médecine générale offre des consultations complètes et des soins de suivi pour répondre à tous vos besoins de santé quotidiens. Nos médecins généralistes sont là pour vous fournir des conseils et des traitements adaptés à vos besoins individuels.'
    },
    {
        icon: <FaRegEye  />,
        title: 'Ophtalmologie',
        description: 'Nos spécialistes en ophtalmologie offrent une gamme complète de services pour la santé oculaire, y compris des examens de la vue, des traitements médicaux et chirurgicaux avancés, ainsi que des soins pour les troubles de la vision..'
    },
    {
        icon: <FaTooth />,
        title: 'Stomatologie',
        description: 'Notre équipe de stomatologie est spécialisée dans le diagnostic et le traitement des affections buccales et dentaires, offrant des services de prévention, de traitement et de réhabilitation pour maintenir votre santé bucco-dentaire optimale..'
    },
    { 
        icon: <GiNoseFront />,
        title: 'Orl',
        description: "Les spécialistes ORL de sont là pour diagnostiquer et traiter une gamme variée de troubles liés à l'oreille, au nez et à la gorge. Que ce soit pour des problèmes auditifs, des infections ORL ou des troubles de la déglutition, nous sommes là pour vous aider."
    },
    {
        icon: <FaFemale />,
        title: 'Gynécologie',
        description: 'Notre département de gynécologie propose des services de dépistage, de diagnostic et de traitement pour les problèmes de santé des femmes, ainsi que des soins spécialisés pour la santé maternelle et reproductive.'
    },
    { 
        icon: <FiHeart />,
        title: 'Cardiologie',
        description: "Les cardiologues de Clinique Medical Tella'A sont spécialisés dans le diagnostic et le traitement des maladies cardiovasculaires, offrant des services de dépistage, de suivi et de gestion des conditions cardiaques pour assurer votre santé cardiaque optimale."

        
    },
    { 
        icon: <FaMicroscope />,
        title: 'Laboratoire',
        description: "Explorez notre laboratoire de pointe, où la recherche, l'innovation et la découverte se rejoignent. Doté d'équipements de pointe et dirigé par une équipe de chercheurs passionnés, notre laboratoire est à la pointe de la science et de la technologie. De la recherche fondamentale aux avancées médicales révolutionnaires, nous sommes engagés à repousser les limites de la connaissance pour améliorer la santé et le bien-être de tous."

        
    }
]


class ServiceThree extends Component{
    render(){
        const {column } = this.props;
        const ServiceContent = ServiceList.slice(0 , this.props.item);
        
        return(
            <React.Fragment>
                <div className="row">
                    {ServiceContent.map( (val , i) => (
                        <div className={`${column}`} key={i}>
                        <Link to={`/service-details/${val.title.toLowerCase().replace(/\s+/g, '-')}`}>

                                <div className="service service__style--2">
                                    <div className="icon">
                                        {val.icon}
                                    </div>
                                    <div className="content">
                                        <h3 className="title">{val.title}</h3>
                                        <p>{val.description}</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </React.Fragment>
        )
    }
}
export default ServiceThree;
