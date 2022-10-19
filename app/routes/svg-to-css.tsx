import { Textarea } from "~/components";
import React, { useEffect, useRef, useState } from "react";
import { CSStoSVG, SVGtoCSS } from "~/utils";

export default function Index() {
  const previewElRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const svgTextareaElRef =
    useRef() as React.MutableRefObject<HTMLTextAreaElement>;
  const cssTextareaElRef =
    useRef() as React.MutableRefObject<HTMLTextAreaElement>;
  const [svg, setSVG] = useState("");
  const [css, setCSS] = useState("");
  const [svgOptions, setSVGOptions] = useState({
    preview: false,
  });
  const [cssOptions, setCSSOptions] = useState({
    readyCSS: true,
    preview: false,
  });
  const [copied, setCopied] = useState({ svg: false, css: false });

  const handleSVGChange = (value: string) => {
    setSVG(value);
    const result = SVGtoCSS(value, cssOptions.readyCSS);
    setCSS(result);
  };

  const handleSVGPaste = (e: React.ClipboardEvent<HTMLTextAreaElement>) => {
    const { value } = e.target as HTMLTextAreaElement;
    setSVG(value);
    const result = SVGtoCSS(value, cssOptions.readyCSS);
    setCSS(result);
  };

  const handleCSSChange = (value: string) => {
    setCSS(value);
    setSVG(CSStoSVG(value));
  };

  const handleCSSPaste = (e: React.ClipboardEvent<HTMLTextAreaElement>) => {
    const { value } = e.target as HTMLTextAreaElement;
    const result = CSStoSVG(value);
    setSVG(result);
  };

  const handleSVGOptionChange =
    (name: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setSVGOptions({
        ...svgOptions,
        [name]: e.target.checked,
      });
    };

  const handleCSSOptionChange =
    (name: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setCSSOptions({
        ...cssOptions,
        [name]: e.target.checked,
      });
      if (name === "readyCSS") {
        const result = SVGtoCSS(svg, e.target.checked);
        setCSS(result);
      }
    };

  const fillExampleSVG = () => {
    const example = `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg xmlns="http://www.w3.org/2000/svg" width="250" height="250">
  <g fill="none" stroke="#000" stroke-width="21">
    <circle cx="125" cy="125" r="106"/>
    <path d="M125,19 v212 M125,125 l-75,75 M125,125 l75,75"/>
  </g>
</svg>`;
    setSVG(example);
    const result = SVGtoCSS(example, cssOptions.readyCSS);
    setCSS(result);
  };

  const copy = (type: string) => (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    switch (type) {
      case "svg":
        const svgTextareaEl = svgTextareaElRef.current;
        svgTextareaEl?.select();
        setCopied({ svg: true, css: false });
        break;
      case "css":
        const cssTextareaEl = cssTextareaElRef.current;
        cssTextareaEl?.select();
        setCopied({ svg: false, css: true });
        break;
      default:
        break;
    }
    document.execCommand("copy");
  };

  useEffect(() => {
    const previewEl = previewElRef.current;
    if (previewEl && cssOptions.preview) {
      previewEl.setAttribute("style", css);
    }
  }, [css, cssOptions.preview]);

  useEffect(() => {
    setCopied({ svg: false, css: false });
  }, [css, svg, cssOptions.readyCSS]);

  return (
    <section className="flex flex-col p-6 lg:p-20 lg:h-full">
      <div className="text-white">
        <h2 className="text-xl font-bold">svg to css </h2>
        <div className="py-6 ">
          converts SVG code into a Data URI
          <div
            className="tooltip tooltip-right ml-2"
            data-tip="We can use SVG in CSS via data URI, but without encoding it
                  works only in Webkit based browsers. If encode SVG using
                  encodeURIComponent() it will work everywhere."
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
              />
            </svg>
          </div>
          <br />
          an encoded URL format that be used as a{" "}
          <code className="inline-flex p-1">background-image</code>,
          <code className="inline-flex p-1 ml-2">border-image</code>
          or
          <code className="inline-flex p-1 ml-2 mr-2">mask-image</code>
          source.
          <p>use directly in css, no need of image files.</p>
        </div>
      </div>
      <div className="w-full lg:h-full">
        <div className="flex flex-col h-full lg:flex-row">
          <div className="grid flex-grow flex-1 max-h-screen items-start card bg-base-100 rounded-box place-items-center">
            <div className="card-body w-full h-full flex flex-col py-6">
              <h2 className="card-title">SVG</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">preview</span>
                    <input
                      type="checkbox"
                      className="toggle"
                      checked={svgOptions.preview}
                      onChange={handleSVGOptionChange("preview")}
                    />
                  </label>
                </div>
                <div className="flex justify-end items-center">
                  <button
                    className="btn btn-sm btn-outline justify-end text-sm lowercase"
                    onClick={fillExampleSVG}
                  >
                    example?
                  </button>
                </div>
              </div>
              {svgOptions.preview ? (
                <div className="mockup-window border bg-base-300 py-4 h-80 w-full flex-1 md:h-full min-h-48">
                  <div className="flex justify-center p-4 bg-base-200 h-full">
                    <div
                      className="h-full w-full"
                      dangerouslySetInnerHTML={{ __html: svg }}
                    />
                  </div>
                </div>
              ) : (
                <div className="indicator w-full h-80 lg:flex-1">
                  {svg && (
                    <button
                      className="indicator-item indicator-bottom btn btn-ghost btn-xs transform-none right-4 bottom-4"
                      onClick={copy("svg")}
                    >
                      {copied.svg ? "copied" : "copy"}
                    </button>
                  )}
                  <Textarea
                    ref={svgTextareaElRef}
                    className="mt-4"
                    placeholder="enter your code or drag a svg file here"
                    value={svg}
                    onChange={handleSVGChange}
                    onPaste={handleSVGPaste}
                    isDraggable
                  />
                </div>
              )}
            </div>
          </div>
          <div className="divider divider-horizontal">to</div>
          <div className="grid flex-grow flex-1 max-h-screen items-start card bg-base-100 rounded-box place-items-center">
            <div className="card-body w-full h-full flex flex-col py-6">
              <h2 className="card-title">CSS</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">ready to use</span>
                    <input
                      type="checkbox"
                      className="toggle"
                      checked={cssOptions.readyCSS}
                      onChange={handleCSSOptionChange("readyCSS")}
                    />
                  </label>
                </div>
                <div className="form-control">
                  {cssOptions.readyCSS && (
                    <label className="label cursor-pointer">
                      <span className="label-text">preview</span>
                      <input
                        type="checkbox"
                        className="toggle"
                        checked={cssOptions.preview}
                        onChange={handleCSSOptionChange("preview")}
                      />
                    </label>
                  )}
                </div>
              </div>
              {cssOptions.preview ? (
                <div className="mockup-window border bg-base-300 py-4 h-80 md:h-full min-h-48">
                  <div className="flex justify-center p-4 bg-base-200 h-full max-h-94 overflow-auto">
                    <div
                      ref={previewElRef}
                      className="h-full w-full bg-no-repeat bg-auto"
                    />
                  </div>
                </div>
              ) : (
                <div className="indicator w-full h-80 lg:flex-1">
                  {css && (
                    <button
                      className="indicator-item indicator-bottom btn btn-ghost btn-xs transform-none right-4 bottom-4"
                      onClick={copy("css")}
                    >
                      {copied.css ? "copied" : "copy"}
                    </button>
                  )}
                  <Textarea
                    ref={cssTextareaElRef}
                    className="mt-4 "
                    placeholder="enter your code"
                    value={css}
                    onChange={handleCSSChange}
                    onPaste={handleCSSPaste}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
