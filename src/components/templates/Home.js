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
                sectionTitle={content.sections.contact.title}
                sectionText={content.sections.contact.text}>
            </Footer>
        </Wrapper>
    )
}

export default Home