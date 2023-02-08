import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root {
  /* Fonts */
  --font-option-1: "Kumbh Sans", sans-serif;
  --font-option-2: "Roboto Slab", serif;
  --font-option-3: "Space Mono", monospace;

  /* Colors */
  /* Primary */
  --orange: #f87070;
  --light-blue: #70f3f8;
  --purple: #d881f8;
  /* Secondary */
  --gray: #d7e0ff;
  --dark-blue: #1e213f;
  --white: #ffffff;
  --washed-out-white: #eff1fa;
  --very-dark-blue: #161932;
  --border-bottom: #e3e1e1;

  /* Measures */
  --modal-padding: 1.8em;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  /* border: 1px solid red; */
}

html, body, #root {
    width: 100%;
    height: 100%;
}

body {
  background-color: var(--dark-blue);
  font-family: ${({ font }) => font};
  margin: 0;
  padding: 0;
}

h1,
h2,
h3,
h4,
p {
  font-weight: 700;
}

h1 {
  font-size: 6.25em;
  line-height: 7.75rem;
  letter-spacing: -0.3125rem;
}

h3,
h4 {
  text-transform: uppercase;
}

h2 {
  font-size: 1.75rem;
  line-height: 1rem;
}

h3 {
  font-size: 1rem;
  line-height: 1.1875rem;
  letter-spacing: 0.9375rem;
}

h4 {
  font-size: 0.8125rem;
  line-height: 1rem;
  letter-spacing: 0.3125rem;
}

h5 {
  font-size: 1.125rem;
  margin: 0;
}

p {
  font-size: 0.875rem;
  line-height: 1.125rem;
}

#root {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
}

#overlay {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.font-option-1 {
  font-family: var(--font-option-1);
}

.font-option-2 {
  font-family: var(--font-option-2);
}

.font-option-3 {
  font-family: var(--font-option-3);
}
`;

export default GlobalStyles;
