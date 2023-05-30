import React from "react";
import "./Topbar.css";
import { NotificationsNone, Language, Settings } from "@mui/icons-material";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Mohit Admin</span>
        </div>
        <div className="topRight">
          <div className="topbarIcon__Container">
            <NotificationsNone />
            <span className="topbarIcon__Badge">2</span>
          </div>
          <div className="topbarIcon__Container">
            <Language />
          </div>
          <div className="topbarIcon__Container">
            <Settings />
          </div>
          <img
            src="https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZSUyMHBob3RvfGVufDB8fDB8fHww&w=1000&q=80"
            alt=""
            className="topbar__Avatar"
          />
        </div>
      </div>
    </div>
  );
}
