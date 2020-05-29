import Head from '../node_modules/next/head'
import Link from 'next/link';
import Style from "../css/index.scss"


const Layout = props => {
    const handleClick = (e) => {
        e.preventDefault();
        var x = document.getElementById("myLinks");
        if (x.style.display === "block") {
            x.style.display = "none";
        } else {
            x.style.display = "block";
        }
    }

    return (
        <React.Fragment>
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>{props.title}</title>
                <meta name="description" content="At Humigrati, we have been providing chemicals to the oilfield production market 
                for many years with adaptable solutions for ever changing conditions and regulations. Our portfolio
                includes demulsifiers, corrosion inhibitors, sludge breakers, biocides, primary and secondary emulsifiers, and many more. "></meta>
                
                <style dangerouslySetInnerHTML={{ __html: Style }} />
            </Head>



            <div className="top">
                <header className="header">

                    <div className="header__container">
                        <div className="header__container__in"><Link href="/"><a className="header__container__in__-1">HUMIGRATI</a></Link></div>
                        <div className="header__ul">
                            <ul className="header__menu-box" >
                                <Link href="/"><li className="header__menu-box__in active"><a>Home</a></li></Link>
                                <Link href="/service"><li className="header__menu-box__in"><a>Services</a></li></Link>
                                <Link href="/about"><li className="header__menu-box__in"><a>About Us</a></li></Link>
                                <Link href="/client"><li className="header__menu-box__in"><a>Clients</a></li></Link>
                                <Link href="/contact"><li className="header__menu-box__in"><a>Contact Us</a></li></Link>
                            </ul>
                        </div>
                    </div>

                </header>
                <header className="header-mb">
                    <div className="topnav">
                        <div><Link href="/"><a className="active-mb">HUMIGRATI</a></Link></div>
                        <div id="myLinks">
                            <Link href="/service"><a className="nav-mb-font">Services</a></Link>
                            <Link href="/about"><a className="nav-mb-font">About Us</a></Link>
                            <Link href="/client"><a className="nav-mb-font">Clients</a></Link>
                            <Link href="/contact"><a className="nav-mb-font">Contact Us</a></Link>
                        </div>
                        <a className="icon" onClick={handleClick}>

                            <span className="burger-mb"><i className="icon ion-md-menu"></i></span>
                        </a>

                    </div>
                </header>

            </div>
            {props.children}
            <footer className="bottom">
                <div className="bottom-links">

                    <div className="col-footer">
                        <div><h2>Services</h2> </div>
                        <ul className="footer-links">
                            <li><span><i className="bottom-icon ion-md-arrow-dropright" /></span><Link href="/service"><a href="#">Products and Applications</a></Link></li>
                            <li><i className="bottom-icon ion-md-arrow-dropright" /><Link href="/service"><a>Crude Oil Analysis</a></Link></li>
                            <li><i className="bottom-icon ion-md-arrow-dropright" /><Link href="/service"><a>Effluent Water Monitoring</a></Link></li>
                        </ul>

                    </div>

                    <div className="col-footer">
                        <div>
                            <h2>Contact Us</h2>
                            <div className="contact"><span><i className="bottom-icon ion-md-pin" /></span>22B Dugbo Lane Udu Enerhen Road Warri, Delta State</div>
                            <div className="contact"><span><i className="bottom-icon ion-md-call" /></span>+234816975813</div>
                            <div className="contact"><span><i className="bottom-icon ion-md-call" /></span>+2348053763760</div>
                        </div>

                    </div>


                </div>

                <div className="inc"><div className="inc-text">©2020 Humigrati Chemical Company Ltd. All rights reserved.| <a href="disclaimer">Disclaimer</a> |  Website designed and built by <a href="https://korien.now.sh/">korien</a></div></div>
            </footer>
        </React.Fragment>
    )
}

export default Layout;