import Head from 'next/head'
import Link from 'next/link'

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
          <script src="https://cdn.polyfill.io/v2/polyfill.min.js"/>
        </Head>
        
        </div>
    )
}
