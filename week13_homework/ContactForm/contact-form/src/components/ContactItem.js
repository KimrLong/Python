import React, {useState} from "react";
import {SpanBadge} from 'react-bootstrap';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const ContactItem = ({contact, onDelete}) => {

    const [showDetails, setShowDetails] = useState(false);
    return <><li>
        <div className= "row">
            <div className="col-8">
                <div onClick={()=>setShowDetails(!showDetails)}>
                    {showDetails
                    ?
                    <div>
                        {contact.name} <br/>
                        {contact.address} <br/>
                        {contact.city} <br/>
                        {contact.number} <br/>
                        {contact.email} <br/>
                    </div>
                    :
                    <div>{contact.name} {contact.city}, {contact.state}</div>

                    }
                </div> 
            </div>
            <div className="col-4 text-right pr-2">

                <button className="button btn" onClick={()=>onDelete(conatct.id)}>
                    <SpanBadge>
                        <FontAwesomeIcon icon={["fas", "trash"]} color="grey"/>
                    </SpanBadge>
                </button>



            </div>




            
        </div>
        </li>

    </>;
};

export default ContactItem;