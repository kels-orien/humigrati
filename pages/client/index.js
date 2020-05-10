import Layout from "../../components/layout"

function Clients() {
    return (
        <Layout title={"Clients | Humigrati Chemical Company Limited"}>
            <div className=" bg-white client-section use-margin">
                <div>
                <div className="text-center m-bottom">  
                    <h className="section-title">Our Clients</h>
                    <p className="section-paragraph">
                    We have in place, a prudent management board and technical team of seasoned managers, as well as consultants,
                    who through various delivery networks, ensures our clients get technical competence, reliability, promptness
                    and efficiency in our service delivery. Our quality products and after-sales support services are rendered 
                    to match internationally acceptable best practices and delivered by highly motivated and well-trained personnel 
                    from a variety of backgrounds.
                    Below is a list of some of our major clients:
                    </p>
                </div>
                <div className="faq">
                    <div className="col-8">
                    <ul className="faqs-service">
                        <li>
                            <h3>Nigerian Petroleum Development Company Limited</h3>
                        </li>
                        <li>
                            <h3>Skyward Resources Limited</h3>
                        </li>
                        <li>
                            <h3>Canline Pipeline Solutions Limited</h3>
                        </li>
                        <li>
                            <h3>Pan Ocean Oil Cooperation</h3>
                        </li>
                        <li>
                            <h3>Waterwell Services Limited</h3>
                        </li>
                        <li>
                            <h3>Smithpac Environmental Limited</h3>
                        </li>
                       
                    </ul>
                </div>
                </div>

                </div>
               
               
            </div>
        </Layout>
    )
}

export default Clients