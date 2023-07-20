function Navbar (){
    return (
    <>
        <nav className="navbar">
            <div className="navbar__container">
            <h1> Incentive Points </h1>
            <div className="navbar__toggle" id="mobile-menu">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
                <ul className="navbar__menu">
                    <li className="navbar__item">
                        <a href="/pointsettings" className="navbar__links">Point Settings</a>
                    </li>
                    <li className="navbar__item">
                        <a href="/addpoints" className="navbar__links">Add Points</a>
                    </li>
                    <li className="navbar__item">
                        <a href="/setpoints" className="navbar__links">Set Points</a>
                    </li>
                    <li className="navbar__item">
                        <a href="/fontsettings" className="navbar__links">Font Settings</a>
                    </li>
                    <li className="navbar__item">
                        <a href="/connectstreamlabs" className="navbar__links">Connect Streamlabs</a>
                    </li>
                    <li className="navbar__item">
                        <a href="/pointwidget" className="navbar__links">Point Widget</a>
                    </li>
                    <li className="navbar__item">
                        <a href="/" className="button2">home</a>
                    </li>
                </ul>
            </div>
        </nav>
    </>
    )
}

export default Navbar