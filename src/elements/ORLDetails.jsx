import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";
import FooterTwo from "../component/footer/FooterTwo";

class ORLDetails extends Component {
    render() {
        return (
            <React.Fragment>

                {/* Start Pagehelmet  */}
                <PageHelmet pageTitle='Service Details' />
                {/* End Pagehelmet  */}

                <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />

                {/* Start Breadcrump Area */}
                <div className="rn-page-title-area pt--120 pb--190 bg_image bg_image--5" data-black-overlay="5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="rn-page-title text-center pt--100">
                                    <h2 className="title theme-gradient">ORL (Oto-Rhino-Laryngologie)</h2>
                                    <p>Diagnostic et traitement des troubles liés à l'oreille, au nez et à la gorge</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Breadcrump Area */}

                {/* Start Page Wrapper */}
                <div className="rn-service-details ptb--120 bg_color--1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="service-details-inner">
                                    <div className="inner">
                                        {/* Start Single Area */}
                                        <div className="row sercice-details-content pb--80 align-items-center">
                                            <div className="col-lg-6 col-12">
                                                <div className="thumb">
                                                    <img className="w-100" src="/assets/images/service/orl_image.jpeg" alt="Service Images" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-12">
                                                <div className="details mt_md--30 mt_sm--30">
                                                    <p>Nos spécialistes ORL sont là pour diagnostiquer et traiter une gamme variée de troubles liés à l'oreille, au nez et à la gorge. Que ce soit pour des problèmes auditifs, des infections ORL, des troubles de la déglutition ou des obstructions nasales, nous offrons des soins spécialisés et personnalisés pour répondre à vos besoins de santé.</p>
                                                    <p>Nous proposons des consultations complètes, des examens diagnostiques avancés, des traitements médicaux et chirurgicaux, ainsi que des soins de suivi pour assurer votre bien-être général et votre qualité de vie. Notre équipe est dédiée à fournir des soins de haute qualité dans un environnement accueillant et attentionné.</p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Single Area */}

                                        {/* Start Single Area */}
                                        <div className="row sercice-details-content pb--80 align-items-center">
                                            <div className="col-lg-6 col-12 order-2 order-lg-1">
                                                <div className="details mt_md--30 mt_sm--30">
                                                    <h4 className="title">Services spécialisés</h4>
                                                    <p>Nos services ORL comprennent le diagnostic et le traitement des affections telles que les infections de l'oreille, les sinusites, les allergies nasales, les troubles de l'audition, les troubles de l'équilibre, les polypes nasaux, les amygdales enflammées, les adénoïdes hypertrophiées et bien plus encore.</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-12 order-1 order-lg-2">
                                                <div className="thumb position-relative">
                                                    <img className="w-100" src="/assets/images/service/orl_consultation.jpeg" alt="Consultation" />
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Single Area */}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Page Wrapper */}

                {/* Start Back To Top */}
                <div className="backto-top">
                    <ScrollToTop showUnder={160}>
                        <FiChevronUp />
                    </ScrollToTop>
                </div>
                {/* End Back To Top */}

                <FooterTwo />

            </React.Fragment>
        )
    }
}
export default ORLDetails;
