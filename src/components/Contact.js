import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = props => (
  <div id="contact">
    <h1>CONTACT ME</h1>
    <a href="halickioscar@gmail.com">
      <FontAwesomeIcon className="contact" icon={["fab", "google"]} />
    </a>
    <a href="https://www.linkedin.com/in/oscar-halicki-50907514a/?originalSubdomain=fr">
      <FontAwesomeIcon className="contact" icon={["fab", "linkedin"]} />
    </a>
    <a href="https://github.com/IHopeSheIs18" target="blank">
      <FontAwesomeIcon className="contact" icon={["fab", "github"]} />
    </a>
  </div>
);

export default Contact;
