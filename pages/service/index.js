import Layout from "../../components/layout"
import Link from 'next/link'


function Service() {
  return (
    <Layout title={"Services | Humigrati Chemical Company Limited"}>

      <div className=" bg-white about-section col use-margin">
        <div className="col">
          <div className="col-2">
            <section className="image-block">
              <header><h2 className="t2">Products and Applications</h2></header>
              <p className="subtitle">In posuere eleifend odio. Quisque semper augue mattis maecenas ligula.</p>
              <a href="#"><img src="/assets/images/refinery.jpg" className="responsive-img" alt="" /></a>
              <a href="#" className="button">More</a>
            </section>
          </div>
          <div className="col-2">
            <section className="image-block">
              <header><h2 className="t2">Crude Oil Analysis</h2></header>
              <p className="subtitle">In posuere eleifend odio. Quisque semper augue mattis maecenas ligula.</p>
              <a href="#"><img src="/assets/images/refinery.jpg" className="responsive-img" alt="" /></a>
              <a href="#" className="button">More</a>
            </section>
          </div>
          <div className="col-2">
            <section className="image-block">
              <header><h2 className="t2">Effluent Water Monitoring</h2></header>
              <p className="subtitle">In posuere eleifend odio. Quisque semper augue mattis maecenas ligula.</p>
              <a href="#"><img src="/assets/images/refinery.jpg" className="responsive-img" alt="" /></a>
              <a href="#" className="button">More</a>
            </section>
          </div>
        </div>

      </div>

    </Layout>

  )
}

export default Service