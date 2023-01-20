import React from "react";
import {
  TiSocialLinkedinCircular,
  TiSocialInstagramCircular,
  TiSocialGithubCircular,
} from "react-icons/ti";
import "./styles.css";
function SocialLinks() {
  return (
    <div className="social-container">
      <h3 className="title-social">Desenvolvido por Paulo Felipe</h3>
      <a
        target={"_blank"}
        href="https://www.linkedin.com/in/paulo-felipe-torres-ara%C3%BAjo-45337723b/"
      >
        {" "}
        <TiSocialLinkedinCircular size={35} className="social-icon" />
      </a>
      <a target={"_blank"} href="https://www.instagram.com/paullofelipe_/">
        {" "}
        <TiSocialInstagramCircular size={35} className="social-icon" />
      </a>
      <a
        target={"_blank"}
        href="https://github.com/PFelipe15"
        className="social-icon"
      >
        {" "}
        <TiSocialGithubCircular size={35} className="social-icon" />
      </a>
    </div>
  );
}

export default SocialLinks;
