function Header() {
    return(
        <header>
            <nav className="nav">
                <img src="../public/favicon.ico" />
                <ul className="nav-items">
                    <li>Home</li>
                    <li>Contact</li>
                    <li>About</li>
                </ul>
            </nav>
        </header>
    )
}

function MainContent() {
    return(
        <div>
            <h1>Hello! This is my favoirite things to do.</h1>
            <ol>
                <li>Play Computer Games</li>
                <li>Basketball</li>
                <li>Programming</li>
            </ol>
        </div>
    )
}

function Footer() {
    return(
        <footer>
            <small>© 2022 Romeo Jr Montealegre Bardillon</small>
        </footer>
    )
}

function Page() {
    return(
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}
ReactDOM.render(<Page />, document.getElementById("root"));