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
            <Cover 
            slideImage='pack'
            text='Creamos experiencias a la medida de tus ideas'
            textSize='150'
            btnText='Ver más'
            ></Cover>
            <About></About>
            <Services></Services>
            <Packages></Packages>
            <Contact></Contact>
            <Footer></Footer>
        </Wrapper>
    )
}

export default Home