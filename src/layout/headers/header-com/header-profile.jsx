'use client';
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLoggedOut } from "@/redux/features/auth/authSlice";
import { User } from "@/svg";



// setting
function ProfileLogin({active,handleActive}) {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const router = useRouter();
  // handle logout
  const handleLogout = () => {
    dispatch(userLoggedOut());
    router.push('/')
  }
  return (
    <div className="tp-header-top-menu-item tp-header-setting">
      <span
        onClick={() => handleActive('setting')}
        className="tp-header-setting-toggle"
        id="tp-header-setting-toggle"
      >
        <User/>
      </span>
      <ul className={active === 'setting' ? "tp-setting-list-open" : ""}>
          {
          user?.name && <>
          <li>
          <Link href="/profile">My Profile</Link>
        </li>
        <li>
          <Link href="/wishlist">Wishlist</Link>
        </li>
          </>

        }

        {!user?.name && <li><Link href="/login" className="cursor-pointer">Login</Link></li>}
        {!user?.name &&<li><Link href="/register" className="cursor-pointer">Register</Link> </li>}
        {user?.name &&<li><a onClick={handleLogout} className="cursor-pointer">Logout</a> </li>}

      </ul>
    </div>
  );
}

const HeaderTopRightUser = () => {
  const [active, setIsActive] = useState('');
  // handle active
  const handleActive = (type) => {
    if(type === active){
      setIsActive('')
    }
    else {
      setIsActive(type)
    }
  }
  return (
    <div className="tp-header-top-menu d-flex align-items-center justify-content-end">
      {/* <Language active={active} handleActive={handleActive} /> */}
      {/* <Currency active={active} handleActive={handleActive} /> */}
      <ProfileLogin active={active} handleActive={handleActive} />
    </div>
  );
};

export default HeaderTopRightUser;
