import React , {useState} from 'react';

const ContactForms = () => {


    return <>

    <h1 className="text-center mt-5">Contact Form</h1>
        <div className="row mt-5">
            <div className="col-6 offset-3 formColor p-5 formFont">
                This is for the contact form


                <form>
                    <input type="text" width="300px;"/>
                    <br/>
                    <input type="text" width="300px;"/>
                    <input type="submit"/>



                </form>
            </div>
        </div>
        
    </>




}

export default ContactForms;