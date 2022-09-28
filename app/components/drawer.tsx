import React from "react";
import { Link } from "@remix-run/react";

const Drawer = ({ content }) => {
  return (
    <div className="drawer drawer-end">
      <input id="drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/*<label htmlFor="drawer" className="drawer-button btn btn-primary">*/}
        {/*  Open drawer*/}
        {/*</label>*/}
        {content}
      </div>
      <div className="drawer-side">
        <label htmlFor="drawer" className="drawer-overlay" />
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          <li>
            <Link to="/svg-to-css">SVG to CSS</Link>
          </li>
          <li>
            <Link to="/svg-to-css">Pug to HTML</Link>
          </li>
          <li>
            <Link to="/svg-to-css">HTML to Pug</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Drawer;
