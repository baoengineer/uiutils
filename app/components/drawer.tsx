import type { ReactNode } from "react";
import React, { useState } from "react";
import { Link } from "@remix-run/react";

interface Props {
  content?: ReactNode;
}

const Drawer = ({ content }: Props) => {
  const [opened, setOpened] = useState(false);

  const showMenu = () => {
    setOpened(true);
  };
  const hideMenu = () => {
    setOpened(false);
  };
  const toggleMenu = () => {
    setOpened(!opened);
  };

  return (
    <div className="drawer drawer-end">
      <input
        id="drawer"
        checked={opened}
        type="checkbox"
        onChange={toggleMenu}
        className="drawer-toggle"
      />
      <div className="drawer-content">{content}</div>
      <div className="drawer-side">
        <label className="drawer-overlay" onClick={hideMenu} />
        <ul
          className="menu p-4 overflow-y-auto w-90 bg-base-100 text-base-content flex-nowrap lg:h-2/3 lg:rounded-md lg:mt-32 lg:mr-8"
          onMouseEnter={showMenu}
        >
          <li>
            <Link to="/svg-to-css">number base converter</Link>
          </li>
          <li>
            <Link to="/svg-to-css">unix time converter</Link>
          </li>
          <li>
            <Link to="/svg-to-css">color converter</Link>
          </li>
          <li>
            <Link to="/svg-to-css">json format/validate</Link>
          </li>
          <li>
            <Link to="/svg-to-css">base64 string encode/decode</Link>
          </li>
          <li>
            <Link to="/svg-to-css">base64 image encode/decode</Link>
          </li>
          <li>
            <Link to="/svg-to-css">url encode/decode</Link>
          </li>
          <li>
            <Link to="/svg-to-css">url parser</Link>
          </li>
          <li>
            <Link to="/svg-to-css">html preview</Link>
          </li>
          <li>
            <Link to="/svg-to-css">svg to react</Link>
          </li>
          <li>
            <Link to="/svg-to-css">svg to css</Link>
          </li>
          <li>
            <Link to="/svg-to-css">pug to html</Link>
          </li>
          <li>
            <Link to="/svg-to-css">html to pug</Link>
          </li>
          <li>
            <Link to="/svg-to-css">html to jsx</Link>
          </li>
          <li>
            <Link to="/svg-to-css">json to csv</Link>
          </li>
          <li>
            <Link to="/svg-to-css">csv to json</Link>
          </li>
          <li>
            <Link to="/svg-to-css">backslash escape/unescape</Link>
          </li>
          <li>
            <Link to="/svg-to-css">string case converter</Link>
          </li>
          <li>
            <Link to="/svg-to-css">regexp tester</Link>
          </li>
          <li>
            <Link to="/svg-to-css">text diff</Link>
          </li>
          <li>
            <Link to="/svg-to-css">lorem ipsum generator</Link>
          </li>
          <li>
            <Link to="/svg-to-css">random string generator</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Drawer;
