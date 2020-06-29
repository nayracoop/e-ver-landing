import React from 'react'
import Wrapper from '../layout/Wrapper'
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
        <Wrapper minHeight="100vh">
            <Nav
                btnText='Contratá e-ver'
            ></Nav>
            <Cover
                slideImage='pack'
                text='Creamos experiencias a la medida de tus ideas'
                textSize='150'
                btnText='Ver más'
            ></Cover>
            <About
                imgHeight={content.sections.about.imgHeight}
                imgSrc={content.sections.about.imgSrc}
                sectionTitle={content.sections.about.title}
                sectionText={content.sections.about.text} >
            </About>
            <Services
                sectionTitle={content.sections.services.title}
                sectionText={content.sections.services.text}
                services={content.sections.services.servicesList}>
            </Services>
            <Plans
                sectionTitle={content.sections.plans.title}
                sectionText={content.sections.plans.text}
                plansList={content.sections.plans.plansList}
                btnText='Cotizar'>
            </Plans>
            <Contact
                sectionTitle={content.sections.contact.title}
                sectionText={content.sections.contact.text}>
            </Contact>
            <Footer
                text={content.sections.footer.text}
                imgHeight={content.sections.footer.imgHeight}
                imgSrc={content.sections.footer.imgSrc}
                licenceImgSrc={content.sections.footer.licenceImgSrc}
                licenceImgHeight={content.sections.footer.licenceImgHeight}
                licenceText={content.sections.footer.licenceText}
                >
            </Footer>
        </Wrapper>
    )
}

export default Home