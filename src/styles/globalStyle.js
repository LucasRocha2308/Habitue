import { createGlobalStyle } from "styled-components";
export default createGlobalStyle`
*{
    margin:0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
}
    :root{
            --white: #ffffff;
            --gray: #464353;
            --green: #6ADB7E;
            --dark-green: #4D8F6A;
            --green-header: #5CC170;
            --red: #c53030;
        }
        
        
html,body{
    min-height: 100vh;
}
        
    body{
        background: var(--green);
        color: var(--white);      
    }
    body,input, button{
        font-family: 'Roboto', sans-serif;
        font-size: 1rem;
    }
    h1,h2,h3,h4,h5,h6{
        font-family: 'Roboto', sans-serif;
        font-weight: 700;
    }
    button{
        cursor: pointer;
    }
    a{
        text-decoration: none;
    }
    ul,li,ol{
        list-style: none;
    }
    `;
