import { Global, css } from "@emotion/react";

const GlobalStyle = () => {
    return (
        <Global 
            styles={css`
                body {
                    margin: 0;
                    padding: 0;
                    background-color: #333333;
                    font-family: 'Spoqa Han Sans Neo', 'sans-serif';
                }
            `} 
        />
    )
}

export default GlobalStyle