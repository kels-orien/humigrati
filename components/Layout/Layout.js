import Head from 'next/head'
import Link from 'next/link'
import css from "../../css/index.scss"

export default function Layout(props) {
    return (
        <div>
             <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <meta name="description" content="At Humigrati, we have been providing chemicals to the oilfield production market 
for many years with adaptable solutions for ever changing conditions and regulations. Our portfolio
 includes demulsifiers, corrosion inhibitors, sludge breakers, biocides, primary and secondary emulsifiers, and many more. "></meta>
          <title>{props.title}</title>
          <style dangerouslySetInnerHTML={{__html: css}}/>
        </Head>
        
        
				
					
			
            <header class ="header">
                <div class="header__container">
                    <div class="header__container__in"><a class="header__container__in__-1">HUMIGRATI</a></div>
                    <div class="header__ul">
                            <div class="header__menu-box">
                             <li class="header__menu-box__in active">Services</li>   
                             <li class="header__menu-box__in">Contact Us</li>
                             <li class="header__menu-box__in">Clients</li>               
                             <li class="header__menu-box__in">About Us</li>
                        </div>
                </div>
                </div> 
            </header>
					

			
        </div>
    )
}
