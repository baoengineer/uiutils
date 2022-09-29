const addNamespace = (svg: string) => {
  if (svg.indexOf(`http://www.w3.org/2000/svg`) < 0) {
    svg = svg.replace(/<svg/g, `<svg xmlns='http://www.w3.org/2000/svg'`);
  }
  return svg;
};

const encodeSVG = (svg: string) =>
  svg
    .replace(/'/g, `"`)
    .replace(/>\s{1,}</g, `><`)
    .replace(/\s{2,}/g, ` `)
    .replace(/[\r\n%#()<>?[\\\]^`{|}]/g, encodeURIComponent);

export const SVGtoCSS = (svg: string, readyCSS: boolean = true) => {
  if (!svg) {
    return "";
  }
  const encoded = encodeSVG(addNamespace(svg));
  const css = `background-image: url('data:image/svg+xml,${encoded}');`;
  return readyCSS ? css : encoded;
};
export const CSStoSVG = (css: string) => {
  if (!css) {
    return "";
  }
  const replaced = css
    .trim()
    .replace(/background-image:\s{0,}url\(/, ``)
    .replace(/["']{0,}data:image\/svg\+xml,/, ``)
    .replace(/["']\);{0,}$/, ``);
  return decodeURIComponent(replaced);
};
