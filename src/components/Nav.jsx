import { Link } from "react-router-dom";

function Nav() {
    const menuItems = ["home", "about", "notes", "projects", "games",
        "contact"];
    return (
        <nav className="bg-transparent p-2 m-7 h-full rounded-md border-4">
            {
                menuItems.map((item, index) => (<Link to={"/" + item}> {item}</Link>))
            }
        </nav >
    );
}

export default Nav;
