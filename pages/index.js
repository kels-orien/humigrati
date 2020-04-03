import Layout from "../components/layout";
import Home from "./home"

function HomePage() {
    return (
        <main className="page">
            <Layout title={"Homepage | Humigrati Chemical Company Limited"}>
              <Home/>
            </Layout>
            
        </main>
    )
}

export default HomePage