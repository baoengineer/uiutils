import type { ReactNode } from "react";
import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "@remix-run/react";

interface Props {
  content?: ReactNode;
}

const MENUS = {
  "svg-to-css": {
    path: "/svg-to-css",
    label: "svg to css",
    badge: "",
    disabled: false,
  },
  "svg-to-react": {
    path: "/svg-to-react",
    label: "svg to react",
    badge: "coming soon",
    disabled: true,
  },
};

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

  let location = useLocation();

  useEffect(() => {
    hideMenu();
  }, [location]);

  return (
    <div className="drawer drawer-end" style={{ height: "calc(100vh - 64px)" }}>
      <input
        id="drawer"
        checked={opened}
        type="checkbox"
        onChange={toggleMenu}
        className="drawer-toggle"
      />
      <div className="drawer-content overflow-y-hidden lg:overflow-auto">
        {content}
      </div>
      <div
        className="drawer-side lg:overflow-hidden"
        onMouseEnter={showMenu}
        onMouseLeave={hideMenu}
      >
        <label className="drawer-overlay" onClick={hideMenu} />
        <ul className="menu p-4 overflow-y-auto bg-base-100 text-base-content flex-nowrap lg:h-2/3 lg:rounded-md lg:mt-32 lg:mr-8">
          {Object.values(MENUS).map((item) => (
            <li key={item.path} className="my-1">
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `${isActive ? "active" : "inactive"} ${
                    item.disabled
                      ? "pointer-events-none"
                      : "pointer-events-auto"
                  } px-16`
                }
                onChange={hideMenu}
              >
                <div
                  className={
                    item.badge
                      ? "tooltip tooltip-bottom tooltip-open tooltip-secondary"
                      : ""
                  }
                  data-tip={item.badge}
                >
                  {item.label}
                </div>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Drawer;
