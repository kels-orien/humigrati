import Layout from "../../components/layout";


function ContactUs() {
    return (
        <Layout title={"Contact Us | Humigrati Chemical Company Limited"}>
            <div className="bg-white top-align">
                <div className="contactus">

                        <h1 className="title">Contact Us</h1>
                </div>
                <div className="contact-div-1">
                    <div className="contact-div-2">
                        <form className="contact-fm" action="https://formspree.io/xknvalaj" method="POST">
                            <div className="contact-name">
                                <label className="contact-name-label">
                                    Name
                        </label>
                                <div className="contact-name-fs">
                                    <input type="text" className="contact-name-input" id="name" name="name" required="required" />
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
                                    <input type="email" className="contact-name-input" id="email" name="email" required="required" />
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
                                    <textarea type="text" placeholder="Type message here..." className="contact-name-txt" id="msg" name="msg" rows="4" cols="50" required="required" />
                                </div>
                                <div className="contact-name-ls">
                                    <div className="contact-name-ls-2">
                                    </div>
                                </div>
                            </div>
                            <div className="contact">

                                <button className="contact-button" type="submit">Submit</button>
                                <div className="contact-name-ls">
                                    <div className="contact-name-ls-2">
                                    </div>
                                </div>
                            </div>
                        </form>

                    </div>
                </div>

            </div>

        </Layout>
    )
}

export default ContactUs
