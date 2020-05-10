
import Layout from "../../components/layout"

function About() {
    return (
        <Layout>
            <div className=" bg-white  use-margin">
            <div className="text-center m-bottom">  
                    <h className="section-title">About Us</h>
                </div>
                <div className="col-6">
                    <section className="about-section about-block">
                        <div className="col-6">
                            <p>
                                Humigrati chemical company was incorporated on February 13, 1997.
                                Since incorporation, the company has been extensively involved in the oil service projects specifically
                                in the areas of effluent water monitoring, crude oil/crude characterization analysis, bottle tests for selection
                                of effective demulsifiers, water clarifier, paraffin inhibitor, wax dissolving chemicals, microbiocides
                                and other oil field chemicals. The company through research has developed and manufactured effective chemicals for use in the oil industry from over twenty five years experience as field application engineers.
                                The company has been able to cut a niche in quality assurance/quality control (QA/QC) and timely delivery of projects to its clients.
                        </p>
                            <p> It’s team of chemical engineers and industrial chemists with other supporting staff from other disciplines have provided services for companies having contracts and developmental projects in Shell Petroleum Development Company (SPDC), Chevron, Exxon/Mobil, Total FINA ELF, Nigerian Agip Oil Company(NAOC), Pan Ocean, Platform Petroleum, Addax Petroleum and Nigerian Petroleum Development Company(NPDC). This has been on land, swamp, Offshore and on flow production, storage and offloading (FPSO) vessels and facilities.
                            The company also operates under very strict safety policy which clearly spells out the dictum:”If it is not safe, don’t ever do it”. The company in line with this prohibits its entire staff from embarking on any night journey, use of alcohol, no smoking and insists on regular medical check-ups for its staff.
                            The company up till date has maintained an excellent record in all departments of safety with no severe injuries to staff, no lost time injuries to staff, and no life threatening accidents.
                    </p>


                        </div>

                        <div className="col-6">
                            <section className="about-block">
                                <img src="/assets/images/building.jpg" className="responsive-img" alt="building of company" />
                            </section>
                        </div>
                    </section>



                </div>

                <section className="about-block small-margin-top">
                    <div className="col-6 ">
                        <ul className="about-services">
                            <li>
                                Products and Applications
                         </li>
                            <li>
                                Crude Oil Analysis
                        </li>
                            <li>
                                Effluent Water Monitoring
                        </li>
                        </ul>
                    </div>

                </section>
                <section className="about-section about-block">

                    <div className="col-6">
                        <h1 className="section-title">Our Vision</h1>
                        <ul>
                            <li>
                                Being an integrated chemical company with the goal of serving
                                the Oil and Gas Industry needs of our clients by providing services with best value
                                for money and of international standard and quality.
                        </li>
                        </ul>
                    </div>

                    <div className="col-6">
                        <h1 className="section-title">Our Mission</h1>
                        <ul>
                            <li>
                                To place a top priority on safety in our service delivery
                        </li>

                            <li>
                                To provide our clients with the right technical advice and solution
                        </li>
                            <li>
                                To ensure that the aspirations of our clients such as cost effectiveness, zero downtime, increased production is met
                        </li>
                            <li>
                                To be a well known and reputable oilfield chemical and allied products company, in Nigeria and globally
                        </li>
                            <li>

                                To enrich our experience in the Oil and Gas Industry
                        </li>
                            <li>
                                To help position Nigeria on the path of self reliance on process chemical products and application
                        </li>
                        </ul>
                    </div>
                </section>

                <section className="about-section about-block">
                    <div className="col-6">
                        <h1 className="section-title">OUR HSE MANAGEMENT QA/QC POLICY</h1>
                        <p>In line with our principle of quality service delivery, we have in place an authentic Health, Safety and Environment (H.S.E) Management System.
                        We also ensure adherence to our excellent Quality Assurance & Quality Control Policy in service delivery to our valued clients.</p>
                    </div>
                </section>
            </div>

        </Layout>

    )
}

export default About




