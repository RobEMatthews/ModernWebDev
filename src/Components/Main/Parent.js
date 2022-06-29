// Intend to pull data from the .json file which has username/password data and send data to child (data down)

import {
    html,
    useEffect
  } from "https://unpkg.com/htm/preact/standalone.module.js";
  
  export function Parent({ title, children }) {
    useEffect(() => {
      document.title = title;
    }, [title]);
  
    return html`
      <header>
        <h1>${title}</h1>
        ${children}
      </header>
    `;
  }
  