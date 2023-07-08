import { currentUser } from "@clerk/nextjs";
import React from "react";
import Logo from "../logo";
import MainNavigation from "../main-nav";
import BottomNavigation from "../bottom-nav";
import { SignedIn } from "@clerk/nextjs";
import { SignedOut } from "@clerk/nextjs";

const AuthenticationGuard = async ({ children }) => {
  return (
    <>
      <SignedIn>
        <div className="flex items-start w-screen h-screen">
          <div className="hidden lg:flex flex-col w-[300px] h-full border-r border-neutral-800 bg-neutral-950">
            <Logo />
            <MainNavigation />
            <BottomNavigation />
          </div>
          <div className="flex flex-col w-full h-full overflow-y-auto">
            <div className="flex flex-col w-full h-full p-3 app-bg">
              {children}
            </div>
          </div>
        </div>
      </SignedIn>

      <SignedOut>
        <div className="flex flex-col w-screen h-screen p-3 app-bg">
          {children}
        </div>
      </SignedOut>
    </>
  );
};

export default AuthenticationGuard;
