import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";
import FooterTwo from "../component/footer/FooterTwo";

class OphtalmologieDetails extends Component {
    render() {
        return (
            <React.Fragment>

                {/* Start Pagehelmet  */}
                <PageHelmet pageTitle='Service Details' />
                {/* End Pagehelmet  */}

                <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />

                {/* Start Breadcrump Area */}
                <div className="rn-page-title-area pt--120 pb--190 bg_image bg_image--5" data-black-overlay="6">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="rn-page-title text-center pt--100">
                                    <h2 className="title theme-gradient">Ophtalmologie</h2>
                                    <p>Des soins spécialisés pour la santé de vos yeux</p>
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
                                                    <img className="w-100 "  src="/assets/images/service/ophtalmologie_image.jpg" alt="Service Images" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-12">
                                                <div className="details mt_md--30 mt_sm--30">
                                                    <p>Nos spécialistes en ophtalmologie offrent une gamme complète de services pour la santé oculaire. Que vous ayez besoin d'un examen de la vue de routine, de conseils sur le port de lentilles de contact, de soins pour les maladies oculaires ou de chirurgie oculaire, notre équipe est là pour vous aider.</p>
                                                    <p>Nous offrons des examens de la vue complets, y compris des tests de réfraction, des examens de la rétine et des tests de glaucome. Nous traitons également les affections oculaires courantes telles que la conjonctivite, les cataractes et le décollement de la rétine.</p>
                                                    <h4 className="title">Nos services incluent :</h4>
                                                    <ul className="liststyle">
                                                        <li>Examens de la vue complets</li>
                                                        <li>Diagnostic et traitement des maladies oculaires</li>
                                                        <li>Chirurgie réfractive et chirurgie de la cataracte</li>
                                                        <li>Prescription de lunettes et de lentilles de contact</li>
                                                        <li>Conseils en matière de santé oculaire</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Single Area */}

                                        {/* Start Single Area */}
                                        <div className="row sercice-details-content pb--80 align-items-center">
                                            <div className="col-lg-6 col-12 order-2 order-lg-1">
                                                <div className="details mt_md--30 mt_sm--30">
                                                    <h4 className="title">Chirurgie oculaire</h4>
                                                    <p>Nous proposons une variété de procédures chirurgicales pour traiter les problèmes oculaires tels que la cataracte, la myopie, l'hypermétropie et l'astigmatisme. Nos chirurgiens ophtalmologiques expérimentés utilisent des techniques avancées pour assurer des résultats optimaux et une récupération rapide.</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-12 order-1 order-lg-2">
                                                <div className="thumb position-relative">
                                                    <img className="w-100" src="/assets/images/service/ophtalmologie_surgery.jpeg" alt="Surgery" />
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Single Area */}

                                        {/* Start Single Area */}
                                        <div className="row sercice-details-content pb--80 align-items-center">
                                            <div className="col-lg-6 col-12">
                                                <div className="thumb">
                                                    <img className="w-100" src="/assets/images/service/ophtalmologie_contacts.jpeg" alt="Contact Lenses" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-12">
                                                <div className="details mt_md--30 mt_sm--30">
                                                <h4 className="title">Verres médicaux</h4>
                                                    <p> Nous proposons une large sélection de verres médicaux pour corriger divers troubles de la vision. Notre équipe peut vous aider à choisir les verres médicaux les mieux adaptés à vos besoins et à vous fournir les conseils nécessaires pour les entretenir correctement.</p>
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
export default OphtalmologieDetails;
