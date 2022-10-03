import React from "react";

export default function Index() {
  return (
    <section className="hero h-full">
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
  );
}
