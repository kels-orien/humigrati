import ContactForm from "../../components/contactform"
 function Home() {
    const handleForm = (e) => {
        e.preventDefault();

        var modal = document.getElementById("form-overlay");

        if (modal.style.display === "block") {
            modal.style.display = "none";
        } else {
            modal.style.display = "block";
        }

        window.onclick = function(e) {
            if (e.target == modal) {
              modal.style.display = "none";
            }
          }
     }

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
                        <div className="btn-div">
                            <button type="button" onClick={handleForm} className ="btn">Contact Us</button>
                        </div>   
                        </div>
                    </section>
			    </div>
		</section>
        <article className="products-article">
        <section className="our-products" aria-label="Our Products demulsifiers, corrosion inhibitors scale inhibitors oil spill dispersant degreasers paraffin inhibitors paraffin solvents water clarifiers Quat biocide, THPS">
            <div className="our-header">
                <h2 className="section-title">Our Products</h2>
                <p  className="section-paragraph">Buy our tailor made chemicals solutions</p>

               
            </div>
            
            <div className="products">
                    <div className="products__name">
                        <ul className="chemical-list">
                            <li><a  href="#"className="chemical-list-button">Corrosion Inhibitors</a></li>
                            <li><a  href="#"className="chemical-list-button">Defoamers</a></li>
                            <li><a  href="#"className="chemical-list-button">Degreasers</a></li>
                            <li><a  href="#"className="chemical-list-button">Demulsifiers</a></li>
                            <li><a  href="#"className="chemical-list-button">Dewaxers</a></li>
                            <li><a  href="#"className="chemical-list-button">Dispersants</a></li>
                            <li><a href="#"className="chemical-list-button">Emulsifiers</a> </li>
                            <li><a href="#"className="chemical-list-button">Microbiocides</a></li>
                            <li><a href="#"className="chemical-list-button">Paraffin Inhibitors</a></li>
                            <li><a href="#"className="chemical-list-button">Paraffin Solvents</a></li>
                            <li><a href="#"className="chemical-list-button">Polyelectrolyte</a></li>
                            <li><a href="#"className="chemical-list-button">Scale Inhibitors</a></li>
                            <li><a href="#"className="chemical-list-button">Sludge Breakers</a></li>
                            <li><a href="#"className="chemical-list-button">Water Clarifiers</a></li>
                            <li><a href="#"className="chemical-list-button">Wetting Agents</a></li>
                        </ul>
                    </div>   
                    <div className="products__info">
                        <p>Across the globe we recognise the difficulties in oil processing, from extraction through to refinery. At Home
                            our technology platforms are at the forefront of innovation working to provide solutions from upstream through to downstream processes. Our “Functions” pages categorise our additives by effect.
                            Take a look through the pages to discover new and innovative solutions for operational challenges.
                        </p>
                        <div ><a href="#" className="view-text">View all<i className="sy ion-md-arrow-round-forward"/></a></div>
                    </div>
                  
                   
                </div>
        </section>

        


        </article>
        <section className="our-services" aria-label="Products and Applications, Crude oil analysis Effluent water monitoring">
            <div className="our-header">
                <h2 className="section-title">Our Services</h2>
                <p  className="section-paragraph">Learn more about our services</p>
            </div>
        <div className="col">
            <div className="col-2">
                <section className="image-block">
                    <header><h2 className ="t2">Products and Applications</h2></header>
                        <p className="subtitle">We have fantastic tailor made production and drilling chemicals that provide necessary chemical solutions</p>
                        <a href="#"><img src="/assets/images/refinery.jpg" className="responsive-img" alt=""/></a>
                        <a href="#" className="button">More</a>
                </section>
         </div>
         <div className="col-2">
            <section className="image-block">
                <header><h2 className ="t2">Crude Oil Analysis</h2></header>
                <p className="subtitle">  We have 15 years experience in this area it entails just a few basic parameters like specific gravity</p>
                <a href="#"><img src="/assets/images/analysis2.jpg" className="responsive-img" alt=""/></a>
                <a href="#" className="button">More</a>
            </section>
         </div>
         <div className="col-2">
            <section className="image-block">
                <header><h2 className="t2">Effluent Water Monitoring</h2></header>
                <p className="subtitle">We are experienced in collecting, Recording, and Sampling for waste water from handling vessels
</p>
                <a href="#"><img src="/assets/images/effluent-water1.jpg"  className="responsive-img" alt=""/></a>
                <a href="#" className="button">More</a>
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
                        <p> Humigrati chemical company was incorporated on February 13, 1997.
                        Since incorporation, the company has been extensively involved in the oil service projects specifically
                        in the areas of effluent water monitoring, crude oil/crude characterization analysis, bottle tests for selection
                        of effective demulsifiers, water clarifier, paraffin inhibitor, wax dissolving chemicals, microbiocides
                        and other oil field chemicals. The company through research has developed and manufactured effective chemicals for use in the oil industry from over twenty five years experience as field application engineers.
                        The company has been able to cut a niche in quality assurance/quality control (QA/QC) and timely delivery of projects to its clients.</p>
                        <a href="#" className="button">More</a>
                </section>
            </div>
            <div className="col-6">
                <section className="about-block">
                     <img src="/assets/images/building.jpg"  className="responsive-img" alt=""/>
                </section>
            </div>
        </div> 
        </section> 

        <section className="gallery bg-white">
        <div className="our-header">
                <header><h2 className="section-title">Our Gallery</h2></header>

            </div>
            <div>   
                 <div className="container-gallery">
                    <ul className="col-3">
                        <li className="img-space">
                            <div className="project-image">
                            <img src="/assets/images/warehouse.jpg"  className="responsive-img" alt=""/>
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
                            <img src="/assets/images/bottle-test.jpg"  className="responsive-img" alt="Bottle Test"/>
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
                            <img src="/assets/images/drums.jpg"  className="responsive-img" alt="Drums of Drilling Chemicals"/>
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
                            <img src="/assets/images/oil-worker-pump.jpg"  className="responsive-img" alt="Oil Worker"/>
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
                            <img src="/assets/images/plant.jpg"  className="responsive-img" alt="Plant"/>
                                 <div className="portfolio-overlay">
                                        <div className="content">

                                            <h3 className="img-fontcolor">
                                                Plant
                                            </h3>
                                            <div className="portfolio-tags">
                                                <span>Blending Plant</span>
                                            </div>
                                        </div>
                                </div>
                        </div>
                        </li>
                        <li className="img-space">
                            <div className="project-image">
                            <img src="/assets/images/drums-p.jpg"  className="responsive-img" alt="Drums of Production Chemicals"/>
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
                            <img src="/assets/images/warehouse-pt.jpg"  className="responsive-img" alt="Warehouse"/>
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
                            <img src="/assets/images/bottle-test.jpg"  className="responsive-img" alt="Bottle Test"/>
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
                            <img src="/assets/images/blending-plant.jpg"  className="responsive-img" alt="Blending Plant"/>
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
                            <img src="/assets/images/bottle-test.jpg"  className="responsive-img" alt="Bottle Test"/>
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
                            <img src="/assets/images/drums-p.jpg"  className="responsive-img" alt="Drums"/>
                                 <div className="portfolio-overlay">
                                        <div className="content">

                                        <h3 className="img-fontcolor">
                                                Production
                                            </h3>
                                            <div className="portfolio-tags">
                                                <span>Production Chemical</span>
                                            </div>
                                        </div>
                                </div>
                        </div>
                        </li>
                        <li className="img-space">
                            <div className="project-image">
                            <img src="/assets/images/blending-plant.jpg"  className="responsive-img" alt="Blending Plant"/>
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
                    </ul>

                 </div>
            </div> 
            <div id="form-overlay" >
               <div className="close" onClick={handleForm} >
                    <i className="ion-md-close"></i>
            </div>
            <div className="contact-div-1 top-margin">
                <div className="contact-div-2">
                    <form className="contact-fm" action="https://formspree.io/xknvalaj" method="POST">
                        <div className="contact-name">
                            <label className="contact-name-label">
                                Name
                        </label>
                            <div className="contact-name-fs">
                                <input type="text"  className="contact-name-input" id="name" name="name"  required="required" />
                            </div>
                            <div className="contact-name-ls">
                                <div className="contact-name-ls-2">    
                                </div>
                            </div>
                        </div>
                        <div className="contact">
                            <label className="contact-name-label">
                                Email
                        </label>
                            <div className="contact-name-fs">
                                <input type="email"  className="contact-name-input" id="email" name="email"  required="required"/>
                            </div>
                            <div className="contact-name-ls">
                                <div className="contact-name-ls-2">
                                </div>
                            </div>
                        </div>
                        <div className="contact">
                            <label className="contact-name-label">
                                Message
                         </label>
                            <div className="contact-name-fs">
                                <textarea type="text"  placeholder="Type message here..." className="contact-name-txt" id="msg" name="msg" rows="4" cols="50" required="required"/>
                            </div>
                            <div className="contact-name-ls">
                                <div className="contact-name-ls-2">
                                </div>
                            </div>
                        </div>
                        <div className="contact">

                            <button className ="contact-button"  type="submit">Submit</button>
                            <div className="contact-name-ls">
                                <div className="contact-name-ls-2">
                                </div>
                            </div>
                        </div>
                    </form>

                </div>
            </div>

        </div>
        </section>    
        </React.Fragment>
    )
}

export default Home


