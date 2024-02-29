import React, { useState } from "react";

const Home = () => {
  const [showProfile, setShowProfile]=useState(false)
  const profileHandler=()=>{
    setShowProfile(!showProfile)
  }
  return (
    <>
    <div className="flex justify-end m-5">
    <button
          onClick={profileHandler}
          type="submit"
          className="px-3 py-2 text-end bg-[#0766ff] text-white font-semibold rounded-xl"
        >
          Logout
    </button>
    </div>
      <div className="flex flex-col gap-5 mt-[5%] items-center h-[100vh]">
        <div className="text-white bg-[#0766ff] text-3xl px-4 py-2 rounded-xl tracking-wider "><h1>Welcome Kuldeep Saini</h1></div>
        <button
          onClick={profileHandler}
          type="submit"
          className="px-3 py-2  bg-[#0766ff] text-white font-semibold rounded-xl"
        >
          View Your Profile
        </button>
        {showProfile && (<div className=" flex flex-col justify-center items-center  p-5 gap-4 font-medium text-white bg-black rounded-xl bg-opacity-50">
          <img
            className="user-img"
            src={require("../Images/user-icon.webp")}
            alt=""
          />
          <div>
          <p>Name: Kuldeep Saini</p>
          <p>Phone Number: 6361841906</p>
          <p>Email: kuldeepsaini5514@gmail.com</p>
          </div>
        </div>)}
      </div>
    </>
  );
};

export default Home;
