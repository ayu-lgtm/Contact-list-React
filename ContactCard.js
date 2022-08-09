import React, { useState } from "react";

const ContactCard = (props) => {
    const [showAge, setShowAge] = useState(false);
    return (
        //console.log(props);
        <div className="contact-card">

            <img className="img"
                src={props.img} alt="profile-pic" >
            </img>

            <div className="user-details">
                <p><strong>Name : </strong>{props.name}</p>
                <p><strong>Email : </strong>{props.email}</p>
                <p><strong>Gender : </strong>{props.gender}</p>
                <p><strong>Phone No : </strong>{props.phone}</p>
                <p><button onClick={() => setShowAge(!showAge)}>Show Age</button>&nbsp;&nbsp;{showAge ? <span><strong>Age : </strong>{props.age}</span> : null}</p>
            </div>
        </div>
    );
}

export default ContactCard;