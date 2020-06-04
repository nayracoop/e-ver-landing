import React from 'react'
import { Wrapper } from '../layout'
import Cover from '../sections/Cover'
import About from '../sections/About'
import Services from '../sections/Services'
import Packages from '../sections/Packages'
import Contact from '../sections/Contact'
import Nav from '../sections/Navbar'
import Footer from '../sections/Footer'


const Home = (props) => {
    return (
        <Wrapper>
            <Nav></Nav>
            <Cover></Cover>
            <About></About>
            <Services></Services>
            <Packages></Packages>
            <Contact></Contact>
            <Footer></Footer>
        </Wrapper>
    )
}

export default Home