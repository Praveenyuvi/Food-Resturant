import { styled } from "styled-components"


const FormControl=styled.div`
display :flex;
flex-direction: column;
width: 40%;
margin: 24px 36px;


@media screen and (max-width:4500px) and (min-width:1500px )  {
    width: 20%;
}

@media screen and (max-width:710px)  {
    width: 100%;
}

`

export default FormControl
