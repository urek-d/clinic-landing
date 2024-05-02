import React, { Component , Fragment } from "react";
import Slider from "react-slick";
import {Link} from "react-router-dom";
import { slickDot } from "../page-demo/script";
import Scrollspy from 'react-scrollspy';
import ScrollToTop from 'react-scroll-up';
import Particles from "react-tsparticles";
import { FiChevronUp , FiX , FiMenu } from "react-icons/fi";
import ServiceList from "../elements/service/ServiceList";
import CounterOne from "../elements/counters/CounterOne";
import Testimonial from "../elements/Testimonial";
import Team from "../elements/Team";
import BlogContent from "../elements/blog/BlogContent";
import BrandTwo from "../elements/BrandTwo";
import FooterTwo from "../component/footer/FooterTwo";
import Contact from "../elements/contact/ContactTwo";
import Helmet from "../component/common/Helmet";

const SlideList = [
    {
        textPosition: 'text-center',
        category: '',
        title: " Bienvenue à Cliniqur Medical TellA'A",
        description: "Découvrez notre engagement envers la santé, le bien-être et le confort de nos patients. À la Clinique Medical TellA'A, nous mettons l'accent sur l' excellence médicale et le service attentionné pour répondre à tous vos besoins de santé..",
        buttonText: 'Contactez nous.',
        buttonLink: '/contact'
    }
]


const list = [
    {
        image: 'image-1',
        category: 'Medecin generaliste',
        title: "Explorez l'expérience médicale diversifiée du Dr. ........, "
    },
    {
        image: 'image-2',
        category: 'cardioloque',
        title: "Explorez l'expérience médicale diversifiée du Dr.........., "
    },
    {
        image: 'image-3',
        category: 'gynecologue',
        title: "Explorez l'expérience médicale diversifiée du Dr. .........,"
    },
    {
        image: 'image-4',
        category: 'Dentiste',
        title: "Explorez l'expérience médicale diversifiée du Dr. ........., "
    },
    {
        image: 'image-3',
        category: 'Orl',
        title: "Explorez l'expérience médicale diversifiée du Dr. ........., "
    },
    {
        image: 'image-5',
        category: 'Ophtamologue',
        title: "Explorez l'expérience médicale diversifiée du Dr. ........., "
    },
    
]
class HomeParticles extends Component{
    constructor(props) {
        super(props);
        this.menuTrigger = this.menuTrigger.bind(this);
        this.CLoseMenuTrigger = this.CLoseMenuTrigger.bind(this);
        this.stickyHeader = this.stickyHeader.bind(this);

       //  this.subMetuTrigger = this.subMetuTrigger.bind(this);
        window.addEventListener('load', function() {
            console.log('All assets are loaded');
        })
    }
    menuTrigger() {
        document.querySelector('.header-wrapper').classList.toggle('menu-open')
    }
    CLoseMenuTrigger() {
        document.querySelector('.header-wrapper').classList.remove('menu-open')
    }
    stickyHeader () {}
    render(){
        const PostList = BlogContent.slice(0 , 5);
        
        window.addEventListener('scroll', function() {
            var value = window.scrollY;
            if (value > 100) {
                document.querySelector('.header--fixed').classList.add('sticky')
            }else{
                document.querySelector('.header--fixed').classList.remove('sticky')
            }
        });

        var elements = document.querySelectorAll('.has-droupdown > a');
        for(var i in elements) {
            if(elements.hasOwnProperty(i)) {
                elements[i].onclick = function() {
                    this.parentElement.querySelector('.submenu').classList.toggle("active");
                    this.classList.toggle("open");
                }
            }
        }
        
        return(
            <Fragment>
                <Helmet pageTitle="TellA'A" />

                {/* Start Header Area  */}
                <header className="header-area formobile-menu header--fixed default-color">
                    <div className="header-wrapper" id="header-wrapper">
                        <div className="header-left">
                            <div className="logo">
                                <a href="/">
                                    <img className="logo-1" src="" alt="Logo Images"/>
                                    <img className="logo-2" src="" alt="Logo Images"/>
                                </a>
                            </div>
                        </div>
                        <div className="header-right">
                            <nav className="mainmenunav d-lg-block">
                                <Scrollspy className="mainmenu" items={['home','service', 'about', 'portfolio','team','testimonial','blog', 'contact']} currentClassName="is-current" offset={-200}>
                                    <li><a href="#home">Acceuil</a></li>
                                    <li><a href="#service">Service</a></li>
                                    <li><a href="#about">A Propos</a></li>
                                    <li><a href="#portfolio">Parcours</a></li>
                                    <li><a href="#team">Equipe</a></li>
                                    <li><a href="#testimonial">Temoignage</a></li>
                                    <li><a href="#blog">Blog</a></li>
                                    <li><a href="#contact">Contact</a></li>
                                </Scrollspy>
                            </nav>
                           
                            {/* Start Humberger Menu  */}
                            <div className="humberger-menu d-block d-lg-none pl--20">
                                <span onClick={this.menuTrigger} className="menutrigger text-white"><FiMenu /></span>
                            </div>
                            {/* End Humberger Menu  */}
                            <div className="close-menu d-block d-lg-none">
                                <span onClick={this.CLoseMenuTrigger} className="closeTrigger"><FiX /></span>
                            </div>
                        </div>
                    </div>
                </header>
                {/* End Header Area  */}

                {/* Start Slider Area   */}
                
                <div className="slider-activation slider-creative-agency with-particles" id="home">
                    <div className="frame-layout__particles">
                        <Particles className="particle"  
                            options={{
                                style:{
                                    position: "absolute"
                                },
                                fpsLimit: 100,
                                interactivity: {
                                detectsOn: "canvas",
                                events: {
                                    onClick: {
                                    enable: true,
                                    mode: "push",
                                    },
                                    onHover: {
                                    enable: true,
                                    mode: "repulse",
                                    },
                                    resize: true,
                                },
                                modes: {
                                    bubble: {
                                        distance: 100,
                                        duration: 2,
                                        opacity: 0.8,
                                        size: 10,
                                        color: "#888",
                                    },
                                    push: {
                                    quantity: 4,
                                    },
                                    repulse: {
                                        distance: 100,
                                        duration: 0.4,
                                        color: "#888",
                                    },
                                },
                                },
                                particles: {
                                color: {
                                    value: "#888",
                                },
                                links: {
                                    color: "#888",
                                    distance: 150,
                                    enable: true,
                                    opacity: 0.5,
                                    width: 1,
                                },
                                collisions: {
                                    enable: true,
                                },
                                move: {
                                    direction: "none",
                                    enable: true,
                                    outMode: "bounce",
                                    random: false,
                                    speed: 6,
                                    straight: false,
                                   
                                },
                                number: {
                                    density: {
                                        enable: true,
                                        value_area: 2000,
                                    },
                                    value: 80,
                                },
                                opacity: {
                                    value: 0.5,
                                },
                                shape: {
                                    type: "circle",
                                },
                                size: {
                                    random: true,
                                    value: 5,
                                },
                                },
                                detectRetina: true,
                            }}
                        />
                    </div>
                    <div className="bg_image bg_image--36" data-black-overlay="5">
                            {SlideList.map((value , index) => (
                                <div className="slide slide-style-2 slider-paralax d-flex align-items-center justify-content-center" key={index}>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className={`inner ${value.textPosition}`}>
                                                    {value.category ? <span>{value.category}</span> : ''}
                                                    {value.title ? <h1 className="title theme-gradient">{value.title}</h1> : ''}
                                                    {value.description ? <p className="description">{value.description}</p> : ''}
                                                    {value.buttonText ? <div className="slide-btn"><a className="rn-button-style--2 btn-primary-color" href={`${value.buttonLink}`}>{value.buttonText}</a></div> : ''}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                </div>
                {/* End Slider Area   */}

                {/* Start Service Area  */}
                <div className="service-area creative-service-wrapper ptb--120 bg_color--1" id="service">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-12">
                                <div className="section-title text-left mb--30">
                                    <h2>Nos Services</h2>
                                    <p>Découvrez la gamme complète de services médicaux spécialisés offerts par la Clinique Medical TellA'A. Notre équipe de professionnels expérimentés est dédiée à votre santé et votre bien-être, offrant des soins personnalisés et de haute qualité à chaque étape de votre parcours médical..</p>
                                </div>
                            </div>
                        </div>
                        <div className="row creative-service">
                            <div className="col-lg-12">
                                <ServiceList item="7" column="col-lg-4 col-md-6 col-sm-6 col-12 text-left" />
                            </div>
                        </div>
                    </div>
                </div>  
                {/* End Service Area  */} 

                {/* Start About Area */}
                <div className="about-area ptb--120 bg_color--5" id="about">
                    <div className="about-wrapper">
                        <div className="container">
                            <div className="row row--35 align-items-center">
                                <div className="col-lg-5">
                                    <div className="thumbnail">
                                        <img className="" src="/assets/images/about/about-3.jpeg" alt="About Images"/>
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="about-inner inner">
                                        <div className="section-title">
                                            <h2 className="title">A Propos</h2>
                                            <p className="description">  À Tella'A, nous sommes déterminés à fournir des soins de qualité supérieure dans un environnement chaleureux et sécurisé. Notre équipe dévouée de professionnels de la santé s'engage à offrir une approche centrée sur le patient, où chaque individu est traité avec compassion et respect.

Explorez nos services et découvrez pourquoi la clinique medicale Tella'A est votre partenaire de confiance pour votre bien-être.  </p>
                                        </div>
                                        <div className="row mt--30">
                                            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                                <div className="about-us-list">
                                                    <h3 className="title">Qui Nous Sommes</h3>
                                                    <p>À Tella'A, nous sommes une équipe dévouée de professionnels de la santé unis par notre passion pour le bien-être de nos patients et notre engagement envers l'excellence médicale. Nous croyons en une approche centrée sur le patient, où chaque individu est traité avec compassion, dignité et respect.</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                                <div className="about-us-list">
                                                    <h3 className="title">Qui Nous Sommes</h3>
                                                    <p>Nous sommes fiers de servir notre communauté avec intégrité, éthique et dévouement. Notre objectif est d'offrir des soins de qualité supérieure dans un environnement respectueux, attentionné et sûr, en utilisant les technologies les plus avancées et les meilleures pratiques pour assurer les meilleurs résultats pour nos patients.</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                                <div className="about-us-list">
                                                    <h3 className="title">Qui Nous Sommes</h3>
                                                    <p>À Tella'A, nous sommes là pour vous accompagner dans votre quête de bien-être. Nous sommes honorés de faire partie de votre parcours de santé et nous nous engageons à être là pour vous, à chaque étape du chemin..</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End About Area */}

                {/* Start Portfolio Area */}
                
                <div className="portfolio-area pt--120 pb--140 bg_color--1" id="portfolio">
                    <div className="rn-slick-dot">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="section-title service-style--3 text-left mb--15 mb_sm--0">
                                        <h2 className="title">Nos portfolio</h2>
                                        <p>Explorez notre portfolio pour voir quelques exemples des cas traités avec succès par notre équipe médicale. Chaque cas représente notre engagement envers l'excellence clinique et le bien-être de nos patients. Nous sommes fiers de partager ces réussites avec vous..</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="slick-space-gutter--15 slickdot--20">
                                        <Slider {...slickDot}>
                                            {list.map((value , index) => (
                                                <div className="portfolio" key={index}>
                                                    <div className="thumbnail-inner">
                                                        <div className={`thumbnail ${value.image}`}></div>
                                                        <div className={`bg-blr-image ${value.image}`}></div>
                                                    </div>
                                                    <div className="content">
                                                        <div className="inner">
                                                            <p>{value.category}</p>
                                                            <h4><a href="/portfolio-details">{value.title}</a></h4>
                                                            <div className="portfolio-button">
                                                                <a className="rn-btn" href="/portfolio-details">Expérience Médicale</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <Link className="link-overlay" to="/portfolio-details"></Link>
                                                </div>
                                            ))}
                                        </Slider>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Portfolio Area */} 
                


                {/* Start CounterUp Area */}
                <div className="rn-counterup-area pt--140 p pb--110 bg_color--5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center">
                                    <h3 className="fontWeight500">FAit amusant</h3>
                                </div>
                            </div>
                        </div>
                        <CounterOne />
                    </div>
                </div>
                {/* End CounterUp Area */}

                {/* Start Team Area  */}
                <div className="rn-team-area ptb--120 bg_color--1" id="team">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="section-title service-style--3 text-left mb--25 mb_sm--0">
                                    <h2 className="title">Notre Équipe Qualifiée</h2>
                                    <p>Découvrez les membres dévoués de notre équipe expérimentée à la clinique medicale Tella'A. Ensemble, nous sommes engagés à vous offrir des soins de qualité, adaptés à vos besoins uniques.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <Team column="col-lg-4 col-md-6 col-sm-6 col-12" />
                        </div>
                    </div>
                </div>
                {/* End Team Area  */}

                {/* Start Testimonial Area */}
                <div className="rn-testimonial-area bg_color--5 ptb--120" id="testimonial">
                    <div className="container">
                        <Testimonial />
                    </div>
                </div>
                {/* End Testimonial Area */}
                

                {/* Start Blog Area */}
                <div className="rn-blog-area pt--120 pb--140 bg_color--1" id="blog">
                    <div className="container">
                        <div className="row align-items-end">
                            <div className="col-lg-6">
                                <div className="section-title text-left">
                                    <h2>Dernières Actualités</h2>
                                    <p>Découvrez les dernières mises à jour, annonces et événements passionnants concernant la clinique medicale Tella'A. Restez à jour avec les dernières avancées médicales, les conseils de santé, et les nouvelles de notre établissement..</p>
                                </div>
                            </div>
                        </div>
                        <div className="row mt--55 mt_sm--30 rn-slick-dot slick-space-gutter--15 slickdot--20 row--0">
                            <div className="col-lg-12">
                                <Slider {...slickDot}>
                                    {PostList.map((value , i ) => (
                                        <div className="blog blog-style--1" key={i}>
                                            <div className="thumbnail">
                                                <a href="#">
                                                    <img src={`/assets/images/blog/blog-${value.images}.jpg`} alt="Blog Images"/>
                                                </a>
                                            </div>
                                            <div className="content">
                                                <p className="blogtype">{value.category}</p>
                                                <h4 className="title"><a href="/blog-details">{value.title}</a></h4>
                                                <div className="blog-btn">
                                                    <a className="rn-btn text-white" href="/blog-details">lire Plus</a>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                        </div>    
                    </div>    
                </div>
                {/* End Blog Area */}

                {/* Start Contact Us */}
                <div className="rn-contact-us ptb--120 bg_color--5" id="contact">
                    <Contact />
                </div>
                {/* End Contact Us */}


                {/* Start Brand Area */}
                <div className="rn-brand-area bg_color--1 ptb--120">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <BrandTwo />
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Brand Area */}

                 {/* Start Footer Style  */}
                 <FooterTwo />
                {/* End Footer Style  */}
                
                {/* Start Back To Top */}
                <div className="backto-top">
                    <ScrollToTop showUnder={160}>
                        <FiChevronUp />
                    </ScrollToTop>
                </div>
                {/* End Back To Top */}

            </Fragment>
        )
    }
}
export default HomeParticles;