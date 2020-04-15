import Layout from "../components/layout";
import Home from "./home"

function HomePage() {
    return (
        <html lang="en">
            <div className="page">
                <Layout title={"Homepage | Humigrati Chemical Company Limited"}>
                 <Home/>
                </Layout>
            
        </div>
        </html>
    )
}

export default HomePage