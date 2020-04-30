import Layout from "../../components/layout"

function Functions() {
    return (
        <Layout title={"Functions | Humigrati Chemical Company Limited"}>
            <div className=" bg-white  use-margin">
                <div className="text-center">  
                    <h className="section-title">Functions</h>
                    <p className="section-paragraph">
                        
                        In the oil and gas industries, there's only one way to keep your edge
                        - innovation. Navigate through our functions to find a novel solution to your oil and gas challenges.
                    </p>
                </div>
                <section className="gallery">
            <div className="our-header">
                
                    <header><h2 className="section-title">Our functions</h2></header>

                </div>
                <div>
                    <div className="container-gallery">
                        <ul className="col-3">
                            <li className="img-space">
                                <div className="card">
                                    <div>
                                        <img src="/assets/images/corrosion-pipe.jpg" className="card-img" alt="corrosion-pipe" />
                                    </div>
                                    <div className="card-caption">
                                        <header className="card-title">Corrosion Inhibitor</header>
                                    </div>
                                    <section className="card-p">
                                    COAT 505 is a corrosion inhibitor that is completely soluble in fresh water
                                     and heavy brine solutions such as saturated sodium chloride and calcium chloride waters.
                                    </section>
                                </div>
                            </li>
                            <li className="img-space">
                                <div className="card">
                                    <div>
                                        <img src="/assets/images/defoamer.jpg" className="card-img" alt="Defoamer bubbles" />
                                    </div>
                                    <div className="card-caption">
                                        <header className="card-title">Defoamer</header>
                                    </div>
                                    <section className="card-p">
                                    Defoamer is a silicone defoamer designed to provide maximums foam control in nonaqueous systems. 
                                    DF W300 is specially formulated to provide the performance of a high viscosity fluid with ease of handling of a lower viscosity fluid.
                                    </section>
                                </div>
                            </li>
                            <li className="img-space">
                                <div className="card">
                                    <div className="card-img">
                                        <img src="/assets/images/degreaser-foamer.jpg" className="card-img" alt="foamer Photo by Rodion Kutsaev on Unsplash" />
                                    </div>

                                    <div className="card-caption">
                                        <header className="card-title">Degreaser</header>
                                    </div>
                                    <section className="card-p">
                                    DR 3100 is a medium-duty degreaser having the ability to penetrate and remove accumulations of dirt and grease. 
                                    DR 3100 has been specially formulated to provide a versatile multipurpose cleaner.
                                    </section>
                            
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            </div>   
        </Layout>

    )
}


export default Functions