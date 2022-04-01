import Styled from "styled-components";

export const StyledForms = Styled.div`
    .card{
        border-radius: 10px;
    }
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
        color: #00ACEE;
    }
    .register: hover{
        color: white;
        background-color: #00ACEE;
    }
    h1{
        color: #00ACEE;
        font-weight:  400;
    }
    spam{
        color: red;
        margin-top: -2px;
    }
`;
