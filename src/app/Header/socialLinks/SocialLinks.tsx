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
            className="hover:scale-105 transition-all ease duration-200"
            icon={faGithub}
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
            className="hover:scale-105 transition-all ease duration-200"
            icon={faLinkedin}
          />
        </a>
      </div>
    </div>
  );
};

export default SocialLinks;
