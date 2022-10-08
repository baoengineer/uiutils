import React, { useEffect } from "react";
import { Link } from "@remix-run/react";
import { themeChange } from "theme-change";
import { themes } from "~/constants";

const Navbar = () => {
  useEffect(() => {
    themeChange(false);
  }, []);

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost normal-case text-xl font-mono">
          uiutils
        </Link>
      </div>
      <div className="flex-none block lg:hidden">
        <label
          htmlFor="drawer"
          className="drawer-button btn btn-square btn-ghost"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-5 h-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
            />
          </svg>
        </label>
      </div>
      <div className="flex justify-end flex-1 px-2">
        <div className="flex items-stretch">
          <div className="dropdown dropdown-end">
            <label
              tabIndex={0}
              className="btn btn-ghost rounded-btn lowercase "
            >
              customize
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content bg-base-200 text-base-content rounded-t-box rounded-b-box top-px max-h-96 h-[70vh] w-52 overflow-y-auto shadow-2xl mt-16"
            >
              <div className="grid grid-cols-1 gap-3 p-3">
                {themes.map((theme) => {
                  return (
                    <div
                      key={theme.id}
                      className="outline-base-content overflow-hidden rounded-sm outline outline-2 outline-offset-2"
                      data-set-theme={theme.id}
                      data-act-class="outline"
                    >
                      <div
                        data-theme={theme.id}
                        className="bg-base-100 text-base-content w-full cursor-pointer font-sans"
                      >
                        <div className="grid grid-cols-5 grid-rows-3">
                          <div className="col-span-5 row-span-3 row-start-1 flex gap-1 py-3 px-4">
                            <div className="flex-grow text-sm font-bold">
                              {theme.name}
                            </div>
                            <div className="flex flex-shrink-0 flex-wrap gap-1">
                              <div className="bg-primary w-2 rounded" />
                              <div className="bg-secondary w-2 rounded" />
                              <div className="bg-accent w-2 rounded" />
                              <div className="bg-neutral w-2 rounded" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
