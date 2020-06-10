import Layout from "../../components/layout"
import Link from 'next/link'


function Service() {
  return (
    <Layout title={"Services | Humigrati Chemical Company Limited"}>

      <div className=" bg-white use-margin">
      <div className="text-center">  
                    <h1 className="section-title m-bottom">Services</h1>
                    <p className="section-paragraph">
                        In the oil and gas industries, there's only one way to keep your edge
                        - innovation. Navigate through our Services to find a novel solution to your oil and gas challenges.
                    </p>
                </div>
        <div className="col">
          
          <div className="col-2">
            <section className="image-block">
           < a href="#"><img src="/assets/images/refinery.jpg" className="responsive-img" alt="" /></a>
              <header><h2 className="t2">Products and Applications</h2></header>
              <p className="subtitle">
                The quality and efficacy of our chemicals as attested by our clients, has proven to be excellent at delivering the required solution in the field.
              </p>
              <p>We produce the following Production chemicals: Emulsifiers, Paraffin/Wax Dispersants, Pour Point Depressants; 
                Corrosion Inhibitors, Scale Inhibitors, Microbiocides, Oil-Slick Dispersant, Rig Wash and Degreaser, Antifoam/Defoamer.</p>
              <p>We produce the following drilling chemicals:Primary Emulsifier, Secondary Emulsifier, Wetting Agent, Sludge breaker, Oil Mud Thinner.
                </p>
            </section>
          </div>
          <div className="col-2">
            <section className="image-block">
            <a href="#"><img src="/assets/images/analysis.jpg" className="responsive-img" alt="" /></a>
              <header><h2 className="t2">Crude Oil Analysis</h2></header>
              <p className="subtitle">We have 15 years experience in this area it entails just testing specific parameters like specific gravity, API, viscosity, pour point,
               basic sediment and water(BS&W) to more complex analysis that involve distillation for percentage of various fractions.</p>
            </section>
          </div>
          <div className="col-2">
            <section className="image-block">
            <a href="#"><img src="/assets/images/effluent-water1.jpg" className="responsive-img" alt="" /></a>
              <header><h2 className="t2">Effluent Water Monitoring</h2></header>
              <p className="subtitle">We are experienced in collecting, Recording, and Sampling for waste water from handling vessels,
              Humigrati is well versed in testing effluent water (water from Crude oil), collecting the samples and testing for total hydrocarbon and other parameters including heavy metals.</p>
            </section>
          </div>
        </div>

      </div>

    </Layout>

  )
}

export default Service