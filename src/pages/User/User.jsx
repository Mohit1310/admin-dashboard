import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@mui/icons-material";
import "./User.css";
import { Link } from "react-router-dom";

export default function User() {
  return (
    <div className="user">
      <div className="user__titleContainer">
        <h1 className="user__title">Edit User</h1>
        <Link to="/newUser">
          <button className="user__addButton">Create</button>
        </Link>
      </div>
      <div className="user__container">
        <div className="user__show">
          <div className="user__showTop">
            <img
              src="https://media.vanityfair.com/photos/63974b59d6001ee3cc78578a/1:1/w_2000,h_2000,c_limit/kit-harington-Jon-Snow.png"
              alt="User"
              className="user__showImg"
            />
            <div className="user__showTopTitle">
              <span className="user__showUsername">Sherlock Holmes</span>
              <span className="user__showUserTitle">Software Engineer</span>
            </div>
          </div>
          <div className="user__showBottom">
            <span className="user__showBottom__Title">Account Details</span>
            <div className="user__showBottom__info">
              <PermIdentity className="user__showBottom__icon" />
              <span className="user__showBottom__InfoTitle">sherlock221b</span>
            </div>
            <div className="user__showBottom__info">
              <CalendarToday className="user__showBottom__icon" />
              <span className="user__showBottom__InfoTitle">10.12.2001</span>
            </div>
            <span className="user__showBottom__Title">Contact Details</span>
            <div className="user__showBottom__info">
              <PhoneAndroid className="user__showBottom__icon" />
              <span className="user__showBottom__InfoTitle">
                +91 83800-97800
              </span>
            </div>
            <div className="user__showBottom__info">
              <MailOutline className="user__showBottom__icon" />
              <span className="user__showBottom__InfoTitle">
                sherlcok@gmail.com
              </span>
            </div>
            <div className="user__showBottom__info">
              <LocationSearching className="user__showBottom__icon" />
              <span className="user__showBottom__InfoTitle">
                Baker Street, London
              </span>
            </div>
          </div>
        </div>
        <div className="user__update">
          <span className="user__updateTitle">Edit</span>
          <form className="user__updateForm">
            <div className="user__updateLeft">
              <div className="user__updateItem">
                <label>Username</label>
                <input
                  type="text"
                  placeholder="sherlock221b"
                  className="user__updateInput"
                />
              </div>
              <div className="user__updateItem">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="Sherlock Holmes"
                  className="user__updateInput"
                />
              </div>
              <div className="user__updateItem">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="sherlock@gmail.com"
                  className="user__updateInput"
                />
              </div>
              <div className="user__updateItem">
                <label>Phone</label>
                <input
                  type="text"
                  placeholder="+91 83800-97800"
                  className="user__updateInput"
                />
              </div>
              <div className="user__updateItem">
                <label>Address</label>
                <input
                  type="text"
                  placeholder="Baker Street, London"
                  className="user__updateInput"
                />
              </div>
              <div className="user__updateItem">
                <label>Username</label>
                <input
                  type="text"
                  placeholder="sherlock221b"
                  className="user__updateInput"
                />
              </div>
            </div>
            <div className="user__updateRight">
              <div className="user__updateUpload">
                <img
                  src="https://media.vanityfair.com/photos/63974b59d6001ee3cc78578a/1:1/w_2000,h_2000,c_limit/kit-harington-Jon-Snow.png"
                  alt="user"
                  className="user__updateImg"
                />
                <label htmlFor="file">
                  <Publish className="user__updateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="user__updateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
