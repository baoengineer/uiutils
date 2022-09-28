import React from "react";

export default function Index() {
  return (
    <div className="hero min-h-screen">
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-4xl font-bold">ui utilities toolkit</h1>
          <p className="mb-5">a set of utility helpers for UI development</p>
          <label htmlFor="drawer" className="drawer-button btn btn-primary">
            pick a tool
          </label>
        </div>
      </div>
    </div>
  );
}
