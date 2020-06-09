import React from 'react'
import Wrapper from '../layout/Wrapper'
import Cover from '../sections/Cover'
import About from '../sections/About'
import Services from '../sections/Services'
import Packages from '../sections/Packages'
import Contact from '../sections/Contact'
import Nav from '../sections/Navbar'
import Footer from '../sections/Footer'

import content from '../../assets/content/content.json'


const Home = (props) => {
    console.log(content)
    return (
        <Wrapper>
            <Nav></Nav>
            <Cover></Cover>
            <About
                sectionTitle={content.sections.about.title} sectionText={content.sections.about.text} >
            </About>
            <Services
                sectionTitle={content.sections.services.title} sectionText={content.sections.services.text}>
            </Services>
            <Packages
                sectionTitle={content.sections.packages.title} sectionText={content.sections.packages.text}>
            </Packages>
            <Contact
                sectionTitle={content.sections.contact.title} sectionText={content.sections.contact.text}>
            </Contact>
            <Footer
                sectionTitle={content.sections.contact.title} sectionText={content.sections.contact.text}>
            </Footer>
        </Wrapper>
    )
}

export default Home