

import Link from 'next/link';
import ContactForm from "../../components/contactform"
 

function Home() {
    return (
        <React.Fragment>
            <section className="banner" aria-label="Optimising Oil Operations">
                <div className="container">
                    <section className="description-wrapper" aria-label="Humigrati has been extensively involved in  oil service projects specifically in the areas of effluent water monitoring,
                             crude oil and crude characterization analysis, bottle tests">
                        <div className="col-xs-12">
                            <h1 className="title">Improving Oil Operations</h1>
                            <div className="oil-operations"><p className="title-paragraph">
                                As more oil is drilled new and challenging conditions arise requiring for more advanced
                                chemical solutions. Our products help our customers obtain more efficient operations,
                                increased flow assurance, process cost benefits and improved environmental profiling.
                            </p></div>
                            <ContactForm />
                        </div>
                    </section>
                </div>
            </section>
            <article className="products-article">
                <section className="our-products" aria-label="Our Products demulsifiers, corrosion inhibitors scale inhibitors oil spill dispersant degreasers paraffin inhibitors paraffin solvents water clarifiers Quat biocide, THPS">
                    <div className="our-header">
                        <h2 className="section-title s-padding">Our Products</h2>
                        <p className="section-paragraph">Buy our tailor made chemicals solutions</p>
                    </div>

                    <div className="products">
                        <div className="products__name">
                            <ul className="chemical-list">
                                <li><Link href="/functions"><a href="#" className="chemical-list-button">Corrosion Inhibitors</a></Link></li>
                                <li><Link href="/functions"><a href="#" className="chemical-list-button">Defoamers</a></Link></li>
                                <li><Link href="/functions"><a href="#" className="chemical-list-button">Degreasers</a></Link></li>
                                <li><Link href="/functions"><a href="#" className="chemical-list-button">Demulsifiers</a></Link></li>
                                <li><Link href="/functions"><a href="#" className="chemical-list-button">Dewaxers</a></Link></li>
                                <li><Link href="/functions"><a href="#" className="chemical-list-button">Dispersants</a></Link></li>
                                <li><Link href="/functions"><a href="#" className="chemical-list-button">Emulsifiers</a></Link></li>
                                <li><Link href="/functions"><a href="#" className="chemical-list-button">Microbiocides</a></Link></li>
                                <li><Link href="/functions"><a href="#" className="chemical-list-button">Paraffin Inhibitors</a></Link></li>
                                <li><Link href="/functions"><a href="#" className="chemical-list-button">Paraffin Solvents</a></Link></li>
                                <li><Link href="/functions"><a href="#" className="chemical-list-button">Polyelectrolyte</a></Link></li>
                                <li><Link href="/functions"><a href="#" className="chemical-list-button">Scale Inhibitors</a></Link></li>
                                <li><Link href="/functions"><a href="#" className="chemical-list-button">Sludge Breakers</a></Link></li>
                                <li><Link href="/functions"><a href="#" className="chemical-list-button">Water Clarifiers</a></Link></li>
                                <li><Link href="/functions"><a href="#" className="chemical-list-button">Wetting Agents</a></Link></li>
                            </ul>
                        </div>
                        <div className="products__info">
                            <p>Across the globe we recognise the difficulties in oil processing, from extraction through to refinery. At Home
                            our technology platforms are at the forefront of innovation working to provide solutions from upstream through to downstream processes. Our “Functions” pages categorise our additives by effect.
                        </p>
                            <div>
                                <Link href="/functions"><a className="view-text">View all<i className="sy ion-md-arrow-round-forward" /></a></Link></div>
                        </div>
                    </div>
                </section>
            </article>
            <section className="our-services" aria-label="Products and Applications, Crude oil analysis Effluent water monitoring">
                <div className="our-header">
                    <h2 className="section-title">Our Services</h2>
                    <p className="section-paragraph">Learn more about our services</p>
                </div>
                <div className="col">
                    <div className="col-2">
                        <section className="image-block">
                            <header><h2 className="t2">Products and Applications</h2></header>
                            <p className="subtitle">We have fantastic tailor made production and drilling chemicals that provide necessary chemical solutions</p>
                            <a href="service"><img src="/assets/images/refinery.jpg" className="responsive-img" alt="Products and application" /></a>
                            <Link href="/service"><a className="view-text p-left" >Products and Applications<i className="sy ion-md-arrow-round-forward" /></a></Link>
                        </section>
                    </div>
                    <div className="col-2">
                        <section className="image-block">
                            <header><h2 className="t2">Crude Oil Analysis</h2></header>
                            <p className="subtitle">We have 15 years experience in this area it entails just testing specific parameters  from crude oil,</p>
                            <a href="service"><img src="/assets/images/analysis.jpg" className="responsive-img" alt="Crude oil analysis" /></a>
                            <Link href="/service"><a className="view-text p-left">Crude Oil Analysis<i className="sy ion-md-arrow-round-forward" /></a></Link>
                        </section>
                    </div>
                    <div className="col-2">
                        <section className="image-block">
                            <header><h2 className="t2">Effluent Water Monitoring</h2></header>
                            <p className="subtitle">We are experienced in collecting, Recording, and Sampling for waste water from handling vessels</p>
                            <a href="service"><img src="/assets/images/effluent-water1.jpg" className="responsive-img" alt="Effluent water" /></a>
                            <Link href="/service"><a className="view-text p-left">Effluent Water Monitoring<i className="sy ion-md-arrow-round-forward" /></a></Link>
                        </section>
                    </div>
                </div>



            </section>


            <section className="about-us-home bg-white">
                <div className="our-header">
                    <header><h2 className="section-title">About Our Company</h2></header>

                </div>
                <div className="about-section col">
                    <div className="col-6">
                        <section className="about-block">
                            <p>Humigrati Chemical Company Limited was incorporated on February 13, 1997.
                            Since incorporation, the company has been extensively involved in the oil service projects specifically
                            in the areas of effluent water monitoring, crude oil/crude characterization analysis, bottle tests for selection
                            of effective demulsifiers, water clarifier, paraffin inhibitor, wax dissolving chemicals, microbiocides
                            and other oil field chemicals. The company through research has developed and manufactured effective chemicals for use in the oil industry from over twenty five years experience as field application engineers.
                        The company has been able to cut a niche in quality assurance/quality control (QA/QC) and timely delivery of projects to its clients.</p>

                        </section>
                    </div>
                    <div className="col-6">
                        <section className="about-block">
                        <Link href="/about"><a ><img src="/assets/images/building.jpg" className="responsive-img" alt="Office building" /></a></Link>
                        </section>
                    </div>
                </div>
            </section>

            <section className="gallery bg-white">
                <div className="our-header s-padding">
                    <header><h2 className="section-title">Our Gallery</h2></header>

                </div>
                <div>
                    <div className="container-gallery">
                        <ul className="col-3">
                            <li className="img-space">
                                <div className="project-image">
                                    <img src="/assets/images/warehouse.jpg" className="responsive-img" alt="warehouse" />
                                    <div className="portfolio-overlay">
                                        <div className="content">

                                            <h3 className="img-fontcolor">
                                                Our Warehouse
                                            </h3>
                                            <div className="portfolio-tags">
                                                <span> With Chemical Products</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="img-space">
                                <div className="project-image">
                                    <img src="/assets/images/demulsifier-test-bottles.jpg" className="responsive-img" alt="Demulsifier bottle test" />
                                    <div className="portfolio-overlay">
                                        <div className="content">

                                            <h3 className="img-fontcolor">
                                                Testing
                                            </h3>
                                            <div className="portfolio-tags">
                                                <span>Demulsifier Bottle Testing</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="img-space">
                                <div className="project-image">
                                    <img src="/assets/images/drums.jpg" className="responsive-img" alt="Drums of Drilling Chemicals" />
                                    <div className="portfolio-overlay">
                                        <div className="content">

                                            <h3 className="img-fontcolor">
                                                Drilling
                                            </h3>
                                            <div className="portfolio-tags">
                                                <span>Drilling</span>
                                                <span> Chemicals</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="img-space">
                                <div className="project-image">
                                    <img src="/assets/images/oil-worker-pump.jpg" className="responsive-img" alt="Oil Worker" />
                                    <div className="portfolio-overlay">
                                        <div className="content">

                                            <h3 className="img-fontcolor">
                                                Chemicals
                                            </h3>
                                            <div className="portfolio-tags">
                                                <span>Chemical Application</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="img-space">
                                <div className="project-image">
                                    <img src="/assets/images/worker-with-ppe.jpg" className="responsive-img" alt="Worker with Personal Protection Equipment" />
                                    <div className="portfolio-overlay">
                                        <div className="content">

                                            <h3 className="img-fontcolor">
                                                Worker
                                            </h3>
                                            <div className="portfolio-tags">
                                                <span>Using PPE</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="img-space">
                                <div className="project-image">
                                    <img src="/assets/images/drums-p.jpg" className="responsive-img" alt="Drums of Production Chemicals" />
                                    <div className="portfolio-overlay">
                                        <div className="content">

                                            <h3 className="img-fontcolor">
                                                Drums of Chemical Products
                                            </h3>
                                            <div className="portfolio-tags">
                                                <span>Production Chemicals</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="img-space">
                                <div className="project-image">
                                    <img src="/assets/images/warehouse-pt.jpg" className="responsive-img" alt="Warehouse" />
                                    <div className="portfolio-overlay">
                                        <div className="content">

                                            <h3 className="img-fontcolor">
                                                Warehouse
                                            </h3>
                                            <div className="portfolio-tags">
                                                <span>Warehouse with Products</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="img-space">
                                <div className="project-image">
                                    <img src="/assets/images/bottle-test.jpg" className="responsive-img" alt="Bottle Test" />
                                    <div className="portfolio-overlay">
                                        <div className="content">

                                            <h3 className="img-fontcolor">
                                                Testing
                                            </h3>
                                            <div className="portfolio-tags">
                                                <span>Bottle Testing</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="img-space">
                                <div className="project-image">
                                    <img src="/assets/images/blending-plant.jpg" className="responsive-img" alt="Blending Plant" />
                                    <div className="portfolio-overlay">
                                        <div className="content">

                                            <h3 className="img-fontcolor">
                                                Blending Plant
                                            </h3>
                                            <div className="portfolio-tags">
                                                <span>Chemical Blending</span>
                                                <span> Plant</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="img-space">
                                <div className="project-image">
                                    <img src="/assets/images/field-engineer.jpg" className="responsive-img" alt="Field Engineer" />
                                    <div className="portfolio-overlay">
                                        <div className="content">

                                            <h3 className="img-fontcolor">
                                                Field Engineer
                                            </h3>
                                            <div className="portfolio-tags">
                                                <span>Working offshore</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="img-space">
                                <div className="project-image">
                                    <img src="/assets/images/drums-p.jpg" className="responsive-img" alt="Drums" />
                                    <div className="portfolio-overlay">
                                        <div className="content">

                                            <h3 className="img-fontcolor">
                                                Production
                                            </h3>
                                            <div className="portfolio-tags">
                                                <span>Production Chemicals</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="img-space">
                                <div className="project-image">
                                    <img src="/assets/images/pipeline.jpg" className="responsive-img" alt="Pipeline" />
                                    <div className="portfolio-overlay">
                                        <div className="content">

                                            <h3 className="img-fontcolor">
                                                oil Pipeline
                                            </h3>
                                            <div className="portfolio-tags">
                                                <span>Chemical Application</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>

                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Home


