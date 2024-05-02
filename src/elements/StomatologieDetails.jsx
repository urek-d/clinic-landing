import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";
import FooterTwo from "../component/footer/FooterTwo";

class StomatologieDetails extends Component {
    render() {
        return (
            <React.Fragment>

                {/* Start Pagehelmet  */}
                <PageHelmet pageTitle='Service Details' />
                {/* End Pagehelmet  */}

                <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />

                {/* Start Breadcrump Area */}
                <div className="rn-page-title-area pt--120 pb--190 bg_image bg_image--7" data-black-overlay="5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="rn-page-title text-center pt--100">
                                    <h2 className="title theme-gradient">Stomatologie</h2>
                                    <p>Des soins spécialisés pour la santé bucco-dentaire</p>
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
                                                    <img className="w-100" src="/assets/images/service/stomatologie_image.jpeg" alt="Service Images" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-12">
                                                <div className="details mt_md--30 mt_sm--30">
                                                    <p>Notre équipe de stomatologie est spécialisée dans le diagnostic et le traitement des affections buccales et dentaires. Nous offrons une gamme complète de services pour prendre soin de votre santé bucco-dentaire, notamment des consultations de routine, des traitements de carie, des interventions chirurgicales et des soins de réhabilitation.</p>
                                                    <p>Nos services incluent également la prévention et le traitement des maladies des gencives, des anomalies de l'articulation temporo-mandibulaire (ATM) et des troubles de l'occlusion. Que vous ayez besoin d'un nettoyage dentaire de routine ou d'une intervention chirurgicale complexe, notre équipe est là pour vous fournir des soins personnalisés et de haute qualité.</p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Single Area */}

                                        {/* Start Single Area */}
                                        <div className="row sercice-details-content pb--80 align-items-center">
                                            <div className="col-lg-6 col-12 order-2 order-lg-1">
                                                <div className="details mt_md--30 mt_sm--30">
                                                    <h4 className="title">Soins dentaires préventifs et conservateurs</h4>
                                                    <p>Nous mettons l'accent sur la prévention des maladies bucco-dentaires et offrons des conseils sur l'hygiène bucco-dentaire, l'alimentation et les habitudes de vie saines. Nos services de soins conservateurs comprennent le traitement des caries, les obturations dentaires et les traitements des canaux radiculaires pour préserver la santé de vos dents.</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-12 order-1 order-lg-2">
                                                <div className="thumb position-relative">
                                                    <img className="w-100" src="/assets/images/service/stomatologie_consultation.jpeg" alt="Consultation" />
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
export default StomatologieDetails;
