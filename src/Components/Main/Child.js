import {
    html,
    render,
    useState,
    useEffect
  } from "https://unpkg.com/htm/preact/standalone.module.js";
  import { getUsers } from "./users.js";
  import { Parent } from "./Parent.js";
  
  function App() {
    // useState hook
    const [users, setUsers] = useState([]);
  
    // useEffect hook is used here to load user data asynchronously (pulled from .json file)
    useEffect(() => {
      getUsers().then((Data) => {
        setUsers(Data);
      });
    }, []);
  
    return html`
    <${Parent} title="Popular User List">
      Users with the most events attended this year:
    </${Parent}>
      <ul>
        ${users.map(
          (user) =>
            html` <li key="${user}" class="test">
              ${user.username} | ${user.favSport} | ${user.numEvents}
            </li>`
        )}
      </ul>
    `;
  }
  
  render(html` <${App} /> `, document.getElementById("app"));
  