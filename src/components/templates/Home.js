import React from 'react'
import { Element } from 'react-scroll'
import Cover from '../sections/Cover'
import About from '../sections/About'
import Services from '../sections/Services'
import Plans from '../sections/Plans'
import Contact from '../sections/Contact'
import Nav from '../sections/Navbar'
import Footer from '../sections/Footer'
import content from '../../assets/content/content.json'


const Home = (props) => {
    return (
        <div >
            <Nav
                navItems={content.sections}
            ></Nav>
            <Element name={content.sections.cover.slug}>
                <Cover
                    slides={content.sections.cover.slides}
                    textSize='150'
                ></Cover>
            </Element>
            <Element name={content.sections.about.slug}>
                <About
                    imgHeight={content.sections.about.imgHeight}
                    imgSrc={content.sections.about.imgSrc}
                    sectionTitle={content.sections.about.title}
                    sectionText={content.sections.about.text} >
                </About>
            </Element>
            <Element name={content.sections.services.slug}>
                <Services

                    sectionTitle={content.sections.services.title}
                    sectionText={content.sections.services.text}
                    services={content.sections.services.servicesList}>
                </Services>
            </Element>
            <Element name={content.sections.plans.slug}>
                <Plans
                    sectionTitle={content.sections.plans.title}
                    sectionText={content.sections.plans.text}
                    plansList={content.sections.plans.plansList}
                    btnText='Cotizar'>
                </Plans>
            </Element>
            <Element name={content.sections.contact.slug}>
                <Contact
                    sectionTitle={content.sections.contact.title}
                    sectionText={content.sections.contact.text}>
                </Contact>
            </Element>

            <Footer
                text={content.sections.footer.text}
                imgHeight={content.sections.footer.imgHeight}
                imgSrc={content.sections.footer.imgSrc}
                licenceImgSrc={content.sections.footer.licenceImgSrc}
                licenceImgHeight={content.sections.footer.licenceImgHeight}
                licenceText={content.sections.footer.licenceText}
            >
            </Footer>
        </div>
    )
}

export default Home