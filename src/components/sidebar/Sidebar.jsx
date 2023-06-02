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
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebbarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <li>
              <NavLink to="/" className="sidebarList__item link">
                <LineStyle className="sidebarIcon" />
                Home
              </NavLink>
            </li>
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
            <li>
              <NavLink className="sidebarList__item link" to="/users">
                <PermIdentity className="sidebarIcon" />
                Users
              </NavLink>
            </li>
            <li>
              <NavLink to="/products" className="sidebarList__item link">
                <Storefront className="sidebarIcon" />
                Products
              </NavLink>
            </li>
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
