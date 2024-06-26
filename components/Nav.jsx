"use client";
import { useState } from "react";
import { signOut, useSession } from "next-auth/react";
import Avatar from "./Avatar";
import Button from "./Button";
import Image from "next/image";
import useAuthStore from "@/app/store/AuthStore";
import clsx from "clsx";

const Nav = ({currentUser}) => {
  const [toggleDropdown, setToggleDropdown] = useState(false);

  return (
    <nav className="flex-col-reverse flex md:flex-row gap-3 flex-end md:items-center w-full mb-7 md:mb-16 pt-3">
      <div className={clsx(
          `flex justify-between w-[100%] md:w-max`,
          currentUser?.activated === 1 && "justify-between",
          currentUser?.activated === 0 && "flex-end"
      )}>
          {currentUser?.activated !== 0 && (
              <button
                  className="block md:hidden"
                  onClick={() => {
                      document.body.classList.toggle("no-scroll");
                      document.body.classList.toggle("sidebar-open");
                  }}
              >
                  <Image
                      src={"/assets/icons/ico_menu.svg"}
                      width="25"
                      height="25"
                      alt="menu"
                  />
              </button>
          )}
        {currentUser && (
          <div className="flex relative gap-3 items-center">
            <p>{currentUser?.name}</p>
            <Avatar
              user={currentUser}
              onClick={() => {
                setToggleDropdown(!toggleDropdown);
              }}
            />

            {toggleDropdown && (
              <div className="dropdown">
                <Button
                  onClick={() => {
                    setToggleDropdown(false);
                    signOut();
                  }}
                  fullWidth
                >
                  Sign Out
                </Button>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
