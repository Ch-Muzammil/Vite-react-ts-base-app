import React from "react";
import { Outlet } from "react-router-dom";
import type { WebMainLayoutProps } from "../typescript/interfaces";

const WebMainLayout: React.FC<WebMainLayoutProps> = () => {
  return (
    <div>
      <header>
        header
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        footer
      </footer>
    </div>
  );
};

export default WebMainLayout;
