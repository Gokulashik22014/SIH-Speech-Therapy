import React from "react";
import Overview from "./Overview";
import Review from "./Review";
import User from "../../components/User";
import Chat from "./Chat";

const Home = () => {
  console.log("Home is present");
  return (
    <div className="flex ml-7 px-6 w-full h-full">
      {/* center parts */}
      <div className="mt-7 w-5/6 py-12">
        <Overview />
        <Review />
      </div>
      {/* left part */}
      <div className="w-2/6 h-full ml-4">
        <div className="bg-slate-200 rounded-md py-6 px-3 h-1/2">
          <User apptime={"10:00Pm"} endtime={"11:00Pm"} />
          <User apptime={"10:00Pm"} endtime={"11:00Pm"} />
          <User apptime={"10:00Pm"} endtime={"11:00Pm"} />
        </div>
        <div className="bg-slate-200 rounded-md py-6 px-3 h-1/2 mt-2">
          <button className="w-full" onClick={() => document.getElementById("my_modal_3").showModal()}>
            <User chat={true} />
          </button>
          <button className="w-full" onClick={() => document.getElementById("my_modal_3").showModal()}>
            <User chat={true} />
          </button>
          <button className="w-full" onClick={() => document.getElementById("my_modal_3").showModal()}>
            <User chat={true} />
          </button>
        </div>
      </div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <Chat/>
        </div>
      </dialog>
    </div>
  );
};

export default Home;
