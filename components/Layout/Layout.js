import Head from 'next/head'
import Link from 'next/link'
import Style from "../../css/index.scss"


export default function Layout(props) {
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
        <div>
             <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <meta name="description" content="At Humigrati, we have been providing chemicals to the oilfield production market 
for many years with adaptable solutions for ever changing conditions and regulations. Our portfolio
 includes demulsifiers, corrosion inhibitors, sludge breakers, biocides, primary and secondary emulsifiers, and many more. "></meta>
          <title>{props.title}</title>
          <style dangerouslySetInnerHTML={{__html: Style}}/>
        </Head>
        
        
				
					
			
            <header className ="header">
                
                <div className="header__container">
                    <div className="header__container__in"><a className="header__container__in__-1">HUMIGRATI</a></div>
                    <div className="header__ul">
                            <div className="header__menu-box">
                             <li className="header__menu-box__in active">Home</li>   
                             <li className="header__menu-box__in">Services</li>
                             <li className="header__menu-box__in">About Us</li>
                             <li className="header__menu-box__in">Clients</li>               
                             <li className="header__menu-box__in">Contact Us</li>
                    </div>
                </div>
                </div> 
            </header>
			<header className ="header-mb">
                <div className="topnav">
                    <a href="#home" className="active-mb">HUMIGRATI</a>
                    <div id="myLinks">
                        <a className = "nav-mb-font" href="#services">Services</a>
                        <a className = "nav-mb-font" href="#about">About Us</a>
                        <a className = "nav-mb-font" href="#clients">Clients</a>
                        <a className = "nav-mb-font" href="#contactus">Contact Us</a>
                </div>
                <a  href="" className="icon" onClick={handleClick}>
                
                 <span className="burger-mb"><i className="icon ion-md-menu"></i></span>
                </a>
                
                </div>
            </header>	
        </div>
    )
}
