import React from "react";

export default function Index() {
  return (
    <div className="flex flex-col h-full">
      <section className="hero flex-1">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div>
            <h1 className="mb-5 text-3xl font-bold">
              an indie ui development toolkit.
            </h1>
            <p className="mb-5">
              utilities and tools for UI development.
              <br />
              all in one place.
            </p>
            <label htmlFor="drawer" className="drawer-button btn btn-secondary">
              pick a tool
            </label>
          </div>
        </div>
      </section>
      <footer className="footer items-center p-4 bg-primary text-neutral-content">
        <div className="items-center grid-flow-col">
          <svg
            width="36"
            height="36"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            className="fill-current"
          >
            <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
          </svg>
          <p>
            made with love by{" "}
            <a
              className="opacity-60 hover:opacity-30 transition-opacity"
              href="https://thebao.dev"
              target="_blank"
              rel="noreferrer"
            >
              bao
            </a>
          </p>
        </div>
        <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <a href="https://thebao.dev" target="_blank" rel="noreferrer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 30 30"
              width="30px"
              height="30px"
            >
              <g id="surface352343619">
                <path
                  style={{
                    stroke: "none",
                    fillRule: "nonzero",
                    fill: "rgb(100%,100%,100%)",
                    fillOpacity: 1,
                  }}
                  d="M 15 3 C 8.371094 3 3 8.371094 3 15 C 3 20.621094 6.871094 25.328125 12.09375 26.628906 C 12.035156 26.46875 12 26.28125 12 26.046875 L 12 23.996094 C 11.511719 23.996094 10.695312 23.996094 10.492188 23.996094 C 9.671875 23.996094 8.941406 23.644531 8.585938 22.988281 C 8.195312 22.257812 8.125 21.144531 7.152344 20.460938 C 6.863281 20.234375 7.082031 19.976562 7.414062 20.011719 C 8.03125 20.183594 8.539062 20.605469 9.019531 21.230469 C 9.5 21.859375 9.722656 22 10.617188 22 C 11.050781 22 11.699219 21.976562 12.308594 21.878906 C 12.636719 21.046875 13.203125 20.28125 13.894531 19.917969 C 9.898438 19.507812 7.992188 17.519531 7.992188 14.820312 C 7.992188 13.65625 8.488281 12.535156 9.328125 11.585938 C 9.054688 10.648438 8.707031 8.730469 9.433594 8 C 11.234375 8 12.320312 9.164062 12.582031 9.480469 C 13.476562 9.175781 14.460938 9 15.496094 9 C 16.53125 9 17.519531 9.175781 18.417969 9.484375 C 18.675781 9.171875 19.761719 8 21.566406 8 C 22.296875 8.730469 21.945312 10.65625 21.667969 11.59375 C 22.503906 12.539062 22.996094 13.660156 22.996094 14.820312 C 22.996094 17.515625 21.089844 19.503906 17.101562 19.917969 C 18.199219 20.488281 19 22.101562 19 23.3125 L 19 26.046875 C 19 26.152344 18.976562 26.226562 18.964844 26.316406 C 23.640625 24.675781 27 20.234375 27 15 C 27 8.371094 21.628906 3 15 3 Z M 15 3 "
                />
              </g>
            </svg>
          </a>
        </div>
      </footer>
    </div>
  );
}
