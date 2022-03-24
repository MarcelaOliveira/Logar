import Styled from "styled-components";

export const StyledForms = Styled.div`
     background: rgb(2, 0, 36);
    background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 19%,
    rgba(0, 200, 241, 1) 100%
    input[type= "submit"]{
       border-radius: 50px;
    }
    .input{
        border-radius: 8px;
    }
    .register{
        border-radius: 50px;
        border-color: #00ACEE;
        width: 400px;
        color: #fff;
    }
    .register: hover{
        color: white;
        background-color: #00ACEE;
    }
    h1{
        color: #00ACEE;
        font-weight:  400;
    }
    /* h1 {
        position: center;
    }  
    button.btn {
        color: white;
        border: none;
        background-color: blue;
    }
    button.deslogar{
        border: none;
        color: blue;
        font-size: 15px;
    } */
`;
