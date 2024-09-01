import React from "react";
import Overview from "./Overview";
import Chat from "../../components/Chat";
import UserCard from "../../components/UserCard";
import AssignTable from "./AssignTable";

const CustomerHome = () => {
  console.log("Home is present");
  return (
    <div className="flex ml-7 px-6 w-full h-full">
      {/* center parts */}
      <div className="mt-7 w-5/6 py-12">
        <Overview />
        <div className="bg-slate-100 mt-2 rounded-md">
          <AssignTable />
        </div>
      </div>
      {/* left part */}
      <div className="h-full bg-slate-200 w-2/6 mx-2 rounded-md flex flex-col space-y-4 px-2 py-1">
        <button
          className="w-full"
          onClick={() => document.getElementById("my_modal_3").showModal()}
        >
          <UserCard chat={true} />
        </button>
        <button
          className="w-full"
          onClick={() => document.getElementById("my_modal_3").showModal()}
        >
          <UserCard chat={true} />
        </button>{" "}
        <button
          className="w-full"
          onClick={() => document.getElementById("my_modal_3").showModal()}
        >
          <UserCard chat={true} />
        </button>
      </div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <Chat />
        </div>
      </dialog>
    </div>
  );
};

export default CustomerHome;
