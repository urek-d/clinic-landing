import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import FooterTwo from "../component/footer/FooterTwo";

class MedecineGeneraleDetails extends Component {
    render() {
        return (
            <React.Fragment>

                {/* Start Pagehelmet  */}
                <PageHelmet pageTitle='Service Details' />
                {/* End Pagehelmet  */}

                <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />

                {/* Start Breadcrump Area */}
                <div className="rn-page-title-area pt--120 pb--190 bg_image bg_image--4" data-black-overlay="5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="rn-page-title text-center pt--100">
                                    <h2 className="title theme-gradient">Médecine Générale</h2>
                                    <p>Des soins complets pour toute la famille</p>
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
                                                    <img className="w-100" src="/assets/images/service/medecine_generale_image.jpeg" alt="Service Images" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-12">
                                                <div className="details mt_md--30 mt_sm--30">
                                                    <p>Notre département de médecine générale offre une gamme complète de services pour répondre à vos besoins de santé généraux. Que vous ayez besoin d'une consultation de routine, de soins pour une maladie aiguë ou chronique, ou de conseils sur la gestion de votre santé, nos médecins généralistes sont là pour vous aider.</p>
                                                    <p>Nous mettons l'accent sur la prévention, la détection précoce des maladies et la promotion d'un mode de vie sain. Nos services incluent les examens médicaux réguliers, le suivi des conditions médicales, la gestion des médicaments, les conseils en matière de nutrition et d'exercice, et bien plus encore.</p>
                                                    <h4 className="title">Nos services incluent :</h4>
                                                    <ul className="liststyle">
                                                        <li>Consultations médicales générales</li>
                                                        <li>Examens de santé complets</li>
                                                        <li>Gestion des maladies chroniques</li>
                                                        <li>Prise en charge des urgences médicales</li>
                                                        <li>Conseils en matière de santé et de bien-être</li>
                                                    </ul>
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
export default MedecineGeneraleDetails;
