import React from "react";

import { Link } from "react-router-dom";

import "./Footer.css";

//TODO: fix the image link so it doesn't reload
export default function Footer() {
  return (
    <div>
      <div>
        <div className="footer__links">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/dezadkins/Pet-Portal"
          >
            <i className="fab fa-github-square" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/dez-adkins-64981a36/"
          >
            <i className="fab fa-linkedin" />
          </a>
        </div>
      </div>
    </div>
  );
}
