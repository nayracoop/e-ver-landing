import React from 'react'
import styled from 'styled-components'

const Form = styled.form`
    flex-basis: 55%;
    border-radius: 20px;
    box-shadow: ${(props) => props.theme.colors.shadow};
    display: flex;
    max-width: 700px;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 45px;
    @media (max-width: ${(props) => props.theme.pageWidth.l}px) {
        flex-basis: 100%;
        margin-top: 45px;
        padding: 45px 25px;
    }
`

const Label = styled.label`
    flex-basis: 45%;
    font-family: 'rotundamedium', sans-serif;
    font-size: 1.2rem;
    margin-bottom: 35px;
    color: ${(props) => props.theme.colors.primary};
    &.textarea-label {
        flex-basis: 100%;
    }
    @media (max-width: ${(props) => props.theme.pageWidth.m}px) {
        flex-basis: 100%;
        font-size: 1rem;
    }
`

const Input = styled.input`
    display: block;
    margin-top: 15px;
    height: 40px;
    width: calc(100% - 10px);
    border-radius: 8px;
    border: 1px solid #cecece;
    font-family: 'rotundalight', sans-serif;
    font-size: 1.125rem;
    color: ${ (props) => props.theme.colors.text};
    padding-left: 10px;
    transition: .2s ease-in-out;
    &:hover,
    &:focus {
        border: 1px solid ${(props) => props.theme.colors.primary};
    }
    &[type="submit"] {
        background: ${ (props) => props.theme.colors.gradient}; 
        border-radius: 45px;
        border: 0;
        color: #fff;
        padding: 12px 80px;
        font-family: 'rotundaregular', sans-serif;
        font-size: 1.2rem;
        height: unset;
        width: auto;
        margin-left: auto;
        &:hover {
            cursor: pointer;
            background: ${ (props) => props.theme.colors.gradienthover}; 
        }
        @media (max-width: ${(props) => props.theme.pageWidth.m}px) {
            font-size: 1.125rem;
            width: 100%;
        }
    }
`
const Textarea = styled.textarea`
    display: block;
    width: calc(100% - 20px);
    margin-top: 15px;
    border-radius: 8px;
    border: 1px solid #cecece;
    padding: 10px;
    font-family: 'rotundalight', sans-serif;
    font-size: 1.125rem;
    color: ${ (props) => props.theme.colors.text};
    transition: .2s ease-in-out;
    &:hover,
    &:focus {
        border: 1px solid ${(props) => props.theme.colors.primary};
    }
`

const ContactForm = (props) => {
    return (
        <Form>
            <Label>
                Nombre
                <Input type="text" name="name" />
            </Label>

            <Label>
                Nombre empresa
                <Input type="text" name="company-name" />
            </Label>

            <Label>
                Email
                <Input type="text" name="email" />
            </Label>

            <Label>
                Teléfono
                <Input type="text" name="phone" />
            </Label>

            <Label className="textarea-label">
                Mensaje
                <Textarea rows="5"/>
            </Label>

            <Input type="submit" value="Enviar" />
        </Form>
    )
}

export default ContactForm