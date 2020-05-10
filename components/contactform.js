import React from 'react'

function contactform() {
    const handleForm = (e) => {
        e.preventDefault();

        var modal = document.getElementById("form-overlay");

        if (modal.style.display === "block") {
            modal.style.display = "none";
        } else {
            modal.style.display = "block";
        }

        window.onclick = function (e) {
            if (e.target == modal) {
                modal.style.display = "none";
            }
        }
    }


    return (

        <div>

        <div className="btn-div">
            <button type="button" onClick={handleForm} className="btn">Contact Us</button>
        </div>
            <div id="form-overlay" >
            <div aria-label="close" className="close" onClick={handleForm} >
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
                                <textarea type="text" className="contact-name-txt" id="msg" name="msg" rows="4" cols="50" required="required" />
                            </div>
                            <div className="contact-name-ls">
                                <div className="contact-name-ls-2">
                                </div>
                            </div>
                        </div>
                        <div className="contact">

                            <button aria-label="Submit" className="contact-button" type="submit">Submit</button>
                            <div className="contact-name-ls">
                                <div className="contact-name-ls-2">
                                </div>
                            </div>
                        </div>
                    </form>

                </div>
            </div>

        </div>

        </div>
        

    )
}

export default contactform