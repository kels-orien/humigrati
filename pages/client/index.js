import Layout from "../../components/layout"

function Clients() {
    return (
        <Layout title={"Clients | Humigrati Chemical Company Limited"}>
            <div className=" bg-white use-margin">
                <div className="text-center">  
                    <h className="section-title">Our Clients</h>
                </div>
                <div className="col-6">
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
        </Layout>
    )
}

export default Clients