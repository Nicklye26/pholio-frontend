import React from "react";
import { Outlet } from "react-router-dom";
import "./rootLayout.css";

export default function RootLayout() {
  return (
    <div className="root">
      <div className="root-layout">
        <Outlet />
      </div>
    </div>
  );
}
