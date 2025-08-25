import React from "react";

function SingleNav({ isActive, id, title, icon, onClick }) {
  return (
    <button
      className={`nav-link ${isActive ? "active" : ""}`}
      onClick={() => onClick(id)}
      type="button"
      role="tab"
    >
      <span>
        <i className={icon}></i>
      </span>
      {title}
    </button>
  );
}

const ProfileNavTab = ({ activeTab, setActiveTab }) => {
  return (
    <nav>
      <div className="nav nav-tabs tp-tab-menu flex-column" role="tablist">
        <SingleNav
          isActive={activeTab === "profile"}
          id="profile"
          title="Profile"
          icon="fa-regular fa-user-pen"
          onClick={setActiveTab}
        />
        <SingleNav
          isActive={activeTab === "information"}
          id="information"
          title="Information"
          icon="fa-regular fa-circle-info"
          onClick={setActiveTab}
        />
        <SingleNav
          isActive={activeTab === "order"}
          id="order"
          title="My Orders"
          icon="fa-light fa-clipboard-list-check"
          onClick={setActiveTab}
        />
        <SingleNav
          isActive={activeTab === "password"}
          id="password"
          title="Change Password"
          icon="fa-regular fa-lock"
          onClick={setActiveTab}
        />
      </div>
    </nav>
  );
};

export default ProfileNavTab;
