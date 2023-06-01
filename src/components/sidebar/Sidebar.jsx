import React from "react";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
} from "@mui/icons-material";
import "./Sidebar.css";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebbarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li className="sidebarList__item active">
                <LineStyle className="sidebarIcon" />
                Home
              </li>
            </Link>
            <li className="sidebarList__item">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarList__item">
              <TrendingUp className="sidebarIcon" />
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebbarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link className="link" to="/users">
              <li className="sidebarList__item">
                <PermIdentity className="sidebarIcon" />
                Users
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebarList__item">
                <Storefront className="sidebarIcon" />
                Products
              </li>
            </Link>
            <li className="sidebarList__item">
              <AttachMoney className="sidebarIcon" />
              Transactions
            </li>
            <li className="sidebarList__item">
              <BarChart className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebbarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarList__item">
              <MailOutline className="sidebarIcon" />
              Mail
            </li>
            <li className="sidebarList__item">
              <DynamicFeed className="sidebarIcon" />
              Feedback
            </li>
            <li className="sidebarList__item">
              <ChatBubbleOutline className="sidebarIcon" />
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebbarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarList__item">
              <WorkOutline className="sidebarIcon" />
              Manage
            </li>
            <li className="sidebarList__item">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarList__item">
              <Report className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
