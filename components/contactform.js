import React from 'react'

function contactform() {
    const handleForm = (e) => {
        e.preventDefault();
        var x = document.getElementById("form-overlay");
        if (x.style.display === "block") {
          x.style.display = "none";
        } else {
          x.style.display = "block";
        }
     }


    return (
        <div id="form-overlay">
            <div className="contact-div-1">
                <div className="contact-div-2">
                    <form className="contact-fm">
                        <div className="contact-name">
                            <label className="contact-name-label">
                                Name
                        </label>
                            <div className="contact-name-fs">
                                <input type="text" autocomplete="off" class="contact-name-input" id="name" name="name" />
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
                                <input type="email" autocomplete="off" class="contact-name-input" id="email" name="email" />
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
                                <textarea type="text" autocomplete="off" placeholder="Type message here..." class="contact-name-txt" id="msg" name="msg" rows="4" cols="50" />
                            </div>
                            <div className="contact-name-ls">
                                <div className="contact-name-ls-2">
                                </div>
                            </div>
                        </div>
                        <div className="contact">

                            <button class="contact-button" color="blue" disabled="" tabindex="-1" type="submit"><div tabindex="-1" class="sc-fznJRM cPWiv">Sign up</div></button>
                            <div className="contact-name-ls">
                                <div className="contact-name-ls-2">
                                </div>
                            </div>
                        </div>
                    </form>

                </div>
            </div>

        </div>

    )
}

export default contactform