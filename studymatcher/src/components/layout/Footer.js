import React, { useState } from "react";
import FooterLogo from "../elements/ui/FooterLogo";
import FooterMenu from "../elements/ui/FooterMenu";
import FooterMenuData from "../../db/footermenu.json";

export default function Footer() {
  const [newFooterMenu, setNewFooterMenu] = useState(FooterMenuData);

  return (
    <footer>
      <div className="container-fluid" style={{ padding: "0px" }}>
        <div className="footer">
          <div className="container">
            <div className="row">
              <FooterLogo />
              <FooterMenu
                footerMenuList={newFooterMenu["ABOUT US"]}
                footerMenuTitle="ABOUT US"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
