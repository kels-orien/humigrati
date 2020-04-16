import React from 'react'

function contactform() {
    return (
        <div className="contact-div-1">
            <div className="contact-div-2">
                <form className="contact-fm">
                    <div className="contact-name">
                        <label className="contact-name-label">
                            Name
                        </label>
                        <div className="contact-name-fs">
                            <input type="text" autocomplete="off" class="contact-name-input" id="name" name="name" value="" />
                        </div>
                        <div className="contact-name-ls">
                            <div className="contact-name-ls-2">
                            </div>
                        </div>
                    </div>
                    <div className="contact-name">
                        <label className="contact-name-label">
                            Email
                        </label>
                        <div className="contact-name-fs">
                            <input type="email" autocomplete="off" class="contact-name-input" id="email" name="email" value="" />
                        </div>
                        <div className="contact-name-ls">
                            <div className="contact-name-ls-2">
                            </div>
                        </div>
                    </div>
                    <div className="contact-name">
                        <label className="contact-name-label">
                            Message
                         </label>
                        <div className="contact-name-fs">
                            <textarea type="text" autocomplete="off" placeholder="Type message here..." class="contact-name-txt" id="msg" name="msg" value="" rows="4" cols="50" />
                        </div>
                        <div className="contact-name-ls">
                            <div className="contact-name-ls-2">
                            </div>
                        </div>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default contactform