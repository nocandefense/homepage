function Nav() {
    const menuItems = ["home", "about", "notes", "projects", "games",
        "contact"];
    return (
        <nav className="bg-transparent p-2 m-7 h-full rounded-md border-4">
            {menuItems.map((item, index) => (<a href="#" className="p-4 underline text-green-600 hover:text-green-800 visited:text-purple-600">{item}</a>))}
        </nav>
    );
}

export default Nav;
