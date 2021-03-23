import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;


    form{
        width: 70%;
        height: fit-content;
        padding: 30px;
        background: ${props => props.theme.ternary_color};

        display: flex;
        justify-content: center;
        flex-direction: column;

        h1{
            text-align: center;
            text-transform: uppercase;
        }

        label{
            margin-top: 20px;
            font-weight: bold;
        }
        input, textarea{
            width: 100%;
            outline: none;
            padding-left: 15px;
        }
        input{
            height: 35px;
        }
        textarea{
            padding-top: 15px;
        }
        button{
            width: 200px;
            margin: 0 auto;
            margin-top: 20px;
            padding: 10px 0;
            border: none;
            background: black;
            color: ${props => props.theme.ternary_color};
            
            &:hover{
                background: #fff;
                color: #000;
            }
        }

    }
`