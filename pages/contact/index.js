import Layout from "../../components/layout";


function Contact() {


    return (
        <Layout title={"Contact Us | Humigrati Chemical Company Limited"}>
            <div className="bg-white top-align">
                <div className="text-center m-bottom">  
                    <h1 className="section-title">Contact Us</h1>
                </div>
                <div className="contact-container">

                    <div className="col">
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
                        <div className="contact-div-2">
                            <div className="contact-details-header">
                                <h3>Let's Get in Touch</h3>
                                <p>We' are very approachable and would love to speak to you.
                                feel free to call, send us an email, or simply complete the enquiry form.</p>

                            </div>

                            <div>
                                <div className="contact">
                                    <span><i className="bottom-icon ion-md-pin" /></span>22B Dugbo Lane Udu Enerhen Road Warri, Delta State</div>

                            </div>

                            <div>
                                <div className="contact"><span><i className="bottom-icon ion-md-mail" />humigrati@yahoo.com</span></div>
                            </div>
                            <div className="contact"><span><i className="bottom-icon ion-md-mail" />humigratiltd@yahoo.com</span></div>
                            <div>
                            <div className="contact"><span><i className="bottom-icon ion-md-call" /></span>+234816975813</div>
                            <div className="contact"><span><i className="bottom-icon ion-md-call" /></span>+2348053763760</div>
                        </div>
                        </div>
                        
                    </div>

                </div>


            </div>
        </Layout >
    )
}


export default Contact
