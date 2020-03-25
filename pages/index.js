import Layout from "../components/layout";
import Home from "./home"

function HomePage() {
    return (
        <div className="page">
            <Layout title={"Homepage | Humigrati Chemical Company Limited"}>
              <Home/>
            </Layout>
            
        </div>
    )
}

export default HomePage