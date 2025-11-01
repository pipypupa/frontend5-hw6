import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
box-sizing: border-box;
}

ul{
list-style: none;
padding: 0;
margin: 0;
}

a{
text-decoration: none;
}

h2{
margin: 0;
}

::-webkit-scrollbar {
  width: 10px;              /* товщина смуги */
}


::-webkit-scrollbar-track {
  background: #ddeafb;       /* колір фону (те, що збоку повзунка) */
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background-color: #2c6eaf; /* сам повзунок */
  border-radius: 10px;
  border: 2px solid #ddeafb; /* щоб виглядало "вписано" у фон */
}
`