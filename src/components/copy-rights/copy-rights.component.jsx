import React from "react";

import { ReactComponent as Linkedin } from "../../assets/logo-linkedin.svg";

import "./copy-right.styles.css";

function CopyRights() {
  return (
    <footer>
      <div className="footer">
        <p>
          تم انشاء هذا الموقع بواسطة<b>م/ كريم غانم</b>
        </p>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://www.linkedin.com/in/karim-waheed-ghanem-99b805228?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BwRuJOshTTxSCMindJUFZiw%3D%3D"
        >
          <Linkedin className="icon" />
        </a>
      </div>
    </footer>
  );
}

export default CopyRights;
