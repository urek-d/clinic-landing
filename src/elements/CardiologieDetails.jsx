import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";
import FooterTwo from "../component/footer/FooterTwo";

class CardiologieDetails extends Component {
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
                                    <h2 className="title theme-gradient">Cardiologie</h2>
                                    <p>Diagnostic et traitement des maladies cardiovasculaires</p>
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
                                                    <img className="w-100" src="/assets/images/service/cardiologie_image.jpeg" alt="Service Images" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-12">
                                                <div className="details mt_md--30 mt_sm--30">
                                                    <p>Les cardiologues sont spécialisés dans le diagnostic et le traitement des maladies cardiovasculaires. Notre équipe propose une gamme complète de services de dépistage, de suivi et de gestion des conditions cardiaques pour assurer votre santé cardiaque optimale.</p>
                                                    <p>Nous utilisons les technologies et les techniques les plus avancées pour diagnostiquer les problèmes cardiaques et élaborer des plans de traitement personnalisés. Que ce soit pour la gestion des maladies coronariennes, des troubles du rythme cardiaque, de l'hypertension artérielle ou d'autres affections cardiaques, nous sommes là pour vous aider.</p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Single Area */}

                                        {/* Start Single Area */}
                                        <div className="row sercice-details-content pb--80 align-items-center">
                                            <div className="col-lg-6 col-12 order-2 order-lg-1">
                                                <div className="details mt_md--30 mt_sm--30">
                                                    <h4 className="title">Services spécialisés</h4>
                                                    <p>Nos services de cardiologie comprennent des consultations complètes, des tests diagnostiques avancés tels que l'électrocardiographie (ECG), l'échocardiographie, l'imagerie par résonance magnétique (IRM) cardiaque, ainsi que des procédures interventionnelles comme la cathétérisme cardiaque, l'angioplastie et la pose de stents.</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-12 order-1 order-lg-2">
                                                <div className="thumb position-relative">
                                                    <img className="w-100" src="/assets/images/service/cardiologie_consultation.jpeg" alt="Consultation" />
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
export default CardiologieDetails;
