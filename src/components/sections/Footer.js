import React from 'react'
import styled from 'styled-components'
import Wrapper from '../layout/Wrapper'
import SectionContainer from '../layout/SectionContainer'
import Image from '../snippets/Image'
import FooterNav from '../snippets/FooterNav'

const FooterMainContainer = styled.footer`
`

const FooterContainer = styled(Wrapper)`
    background: ${(props) => props.theme.colors.primary};
    color: #fff;
`

const FooterWrapper = styled(SectionContainer)`
    display: flex;
    justify-content: space-between;    
    padding-top: 35px;
    padding-bottom: 35px;
    @media (max-width: ${(props) => props.theme.pageWidth.l}px) {
        flex-direction: column;
        justify-content: flex-start; 
        align-items: flex-start;
    }
`


const LeftBlock = styled.div`
    max-width: 420px;
`

const FooterLogo = styled(Image)`
    margin-bottom: 35px;
`

const Text = styled.p`
    font-family: 'rotundalight', sans-serif;
    font-size: .875rem;
    line-height: 1.5;
    margin-bottom: 35px;
`

const RightBlock = styled.div`
`
const FooterNavbar = styled(FooterNav)`
    ul {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        li {
            margin-top: 8px;
            margin-bottom: 8px;
            a {
                padding: 8px;
                border-bottom: 2px dotted transparent;
                transition: .2s ease-in-out;
                &:hover {
                    border-bottom: 2px dotted #fff;
                }
            }            
        }
        ul {
            display: none;
            flex-direction: row;
            justify-content: center;
            margin-top: 80px;
            li {
                padding: 0;
                margin: 0;
                position: relative;
                &:first-of-type {
                    a::after {
                       content: '|';
                       position: absolute; 
                       right: 0;
                    }
                }
                a {
                    font-family: 'rotundalight', sans-serif;
                    font-size: .925rem;
                    padding: 5px 15px;
                    display: block;
                }
            }
        }
        @media (max-width: ${(props) => props.theme.pageWidth.l}px) {
            align-items: flex-start;
            li {
                margin: 10px 0;
                a {
                    padding: 12px 0px;
                    font-size: .925rem;
                }
            }
            ul {
                margin-top: 0px;
                padding-top: 0;
                flex-direction: column;
                li {
                    margin-top: 15px;
                    &:first-of-type {
                        a::after {
                            content: none;
                        }
                    }
                    a {
                        padding: 5px 0;
                        font-size: .85rem;
                    }
                }
            }
        }
    }
`

const SubFooter = styled.div`
    background: ${(props) => props.theme.colors.secondary};
    padding-top: 10px;
    padding-bottom: 10px;
    div {
        padding-top: 0;
        padding-bottom: 0;
        display: flex;
        align-items: center;
        @media (max-width: ${(props) => props.theme.pageWidth.l}px) {
            flex-direction: column;
            align-items: flex-start;
            padding-top: 11px;
            padding-bottom: 11px;
        }
    }
`

const LicenceImg = styled(Image)`
    margin-right: 15px;
    @media (max-width: ${(props) => props.theme.pageWidth.l}px) {
        margin-bottom: 15px;
    }
`

const LicenceText = styled.p`
    color: #fff;
    font-size: 10px;
    font-family: 'rotundalight', sans-serif;
    line-height: 1.5;

`
const Footer = (props) => {
    return (
        <FooterMainContainer>
            <FooterContainer>
                <FooterWrapper>
                    <LeftBlock>
                        <FooterLogo imgHeight={props.imgHeight} imgSrc={props.imgSrc}></FooterLogo>
                        <Text>{props.text}</Text>
                    </LeftBlock>
                    <RightBlock>
                        <FooterNavbar />
                    </RightBlock>                    
                </FooterWrapper>
            </FooterContainer>
            <SubFooter>
                <SectionContainer>
                    <LicenceImg imgHeight={props.licenceImgHeight} imgSrc={props.licenceImgSrc}></LicenceImg>
                    <LicenceText>{props.licenceText}</LicenceText>
                </SectionContainer>
            </SubFooter>
        </FooterMainContainer>
    )
}

export default Footer