function Main({ children }) {
    return (
        <section className="bg-black backdrop-filter backdrop-opacity-10 p-5 shadow-sm rounded-md">
            <p>Welcome to my homepage</p>
            <p>I was working on a project with React.js, which is a JavaScript UI library, so I decided to
                rebuild my homepage with it.</p>
            {children}
        </section>
    );
}

export default Main;
