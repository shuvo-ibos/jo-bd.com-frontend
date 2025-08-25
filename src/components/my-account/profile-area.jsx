'use client';
import React, { useEffect, useState } from "react";
import ProfileShape from "./profile-shape";
import NavProfileTab from "./nav-profile-tab";
import ProfileInfo from "./profile-info";
import ChangePassword from "./change-password";
import MyOrders from "./my-orders";
import { useGetUserOrdersQuery } from "@/redux/features/order/orderApi";
import Loader from "../loader/loader";
import { useRouter } from "next/navigation";
import ErrorMsg from "../common/error-msg";
import Cookies from "js-cookie";
import ProfileNavTab from "./profile-nav-tab";

const ProfileArea = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("profile");
  const { data: orderData, isError, isLoading } = useGetUserOrdersQuery();

  useEffect(() => {
    const isAuthenticate = Cookies.get("userInfo");
    if (!isAuthenticate) {
      router.push("/login");
    }
  }, [router]);

  if (isLoading) {
    return (
      <div className="d-flex align-items-center justify-content-center" style={{ height: "100vh" }}>
        <Loader loading={isLoading} />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="d-flex align-items-center justify-content-center" style={{ height: "100vh" }}>
        <ErrorMsg msg="There was an error" />
      </div>
    );
  }

  return (
    <section className="profile__area pt-120 pb-120">
      <div className="container">
        <div className="profile__inner p-relative">
          <ProfileShape />
          <div className="row">
            <div className="col-xxl-4 col-lg-4">
              <div className="profile__tab mr-40">
                <ProfileNavTab activeTab={activeTab} setActiveTab={setActiveTab} />
              </div>
            </div>
            <div className="col-xxl-8 col-lg-8">
              <div className="profile__tab-content">
                {activeTab === "profile" && <NavProfileTab orderData={orderData} />}
                {activeTab === "information" && <ProfileInfo />}
                {activeTab === "order" && <MyOrders orderData={orderData} />}
                {activeTab === "password" && <ChangePassword />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileArea;
