import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import stylesheet from "public/styles/app.css";
import { Drawer, Navbar } from "~/components";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "uiutil - an indie ui development toolkit.",
  description:
    "utilities and tools for UI development. all in one place. personalized.",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en" data-theme="lofi">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="flex flex-col lg:h-screen lg:w-screen overflow-hidden font-mono bg-secondary">
        <header>
          <Navbar />
        </header>
        <main className="flex-1">
          <Drawer content={<Outlet />} />
        </main>
        <Scripts />
        <ScrollRestoration />
        <LiveReload />
      </body>
    </html>
  );
}

export function links() {
  return [{ rel: "stylesheet", href: stylesheet }];
}
