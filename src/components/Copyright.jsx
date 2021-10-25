function Copyright() {
    let d = new Date();

    return (
        <div className="max-w-full">
            <p>
                <span>&#169;</span> Brock Callahan {d.getFullYear()}
            </p>
            <p>This page is licensed under the <a className="text-blue-700"
                href="https://creativecommons.org/licenses/by-nd/4.0/">Creative Commons Attribution-NoDerivatives 4.0 International (CC BY-ND 4.0)</a>
            </p>
        </div>
    );
}

export default Copyright;