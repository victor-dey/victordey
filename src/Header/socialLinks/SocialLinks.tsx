import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const SocialLinks = () => {
  return (
    <div>
      <a href="https://github.com/victor-dey/" target="_blank">
        <FontAwesomeIcon
          className="hover:scale-105 transition-all ease duration-200"
          icon={faGithub}
          size="2x"
        />
      </a>
      <a href="https://www.linkedin.com/in/vdey/" target="_blank">
        <FontAwesomeIcon
          className="hover:scale-105 transition-all ease duration-200"
          icon={faLinkedin}
          size="2x"
        />
      </a>
    </div>
  );
};

export default SocialLinks;
