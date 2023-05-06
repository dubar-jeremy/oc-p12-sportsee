import sportSeeLogo from '/src/assets/images/sportsee-logo.svg';


// write js doc
/**
 * @returns {JSX.Element} - JSX element
 * @description - Header of the app
 * @example
 * <Header />
 */
export const Header = (): JSX.Element => {
    return (
        <header>
            <div className="logo-container">
                <img className="logo" src={sportSeeLogo} alt=""/>
                <span className="title">SportSee</span>
            </div>
            <nav className="main-navigation-bar">
                <ul className="nav-list">
                    <li>
                        <a href="#">Accueil</a>
                    </li>
                    <li>
                        <a href="#">Profil</a>
                    </li>
                    <li>
                        <a href="#">Réglages</a>
                    </li>
                    <li>
                        <a href="#">Communauté</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}