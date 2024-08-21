import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
const socials = [{}];

const SocialLinks = () => {
  return (
    <div className="flex flex-row justify-between">
      <div className="flex flex-1">
        <a
          href="https://github.com/victor-dey/"
          className="link-base"
          target="_blank"
        >
          <FontAwesomeIcon
            className="me-1 hover:scale-105 transition-all ease duration-200"
            icon={faGithub}
            size="2x"
          />
        </a>
      </div>
      <div className="flex flex-1">
        <a
          href="https://www.linkedin.com/in/vdey/"
          className="link-base"
          target="_blank"
        >
          <FontAwesomeIcon
            className="ms-1 hover:scale-105 transition-all ease duration-200"
            icon={faLinkedin}
            size="2x"
          />
        </a>
      </div>
    </div>
  );
};

export default SocialLinks;
