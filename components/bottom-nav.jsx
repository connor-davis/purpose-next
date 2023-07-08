"use client";

import { NavigationMenuLink } from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  sideNavigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import { SignOutButton } from "@clerk/nextjs";
import { SignedIn } from "@clerk/nextjs";

const BottomNavigation = () => {
  return (
    <SignedIn>
      <NavigationMenu className="flex flex-col">
        <NavigationMenuList className="flex flex-col w-[300px] h-full space-x-0 overflow-y-auto p-1">
          <NavigationMenuItem className="w-full p-1">
            <Link href="/user-profile" legacyBehavior passHref>
              <NavigationMenuLink className={sideNavigationMenuTriggerStyle()}>
                Profile
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem className="w-full p-1">
            <SignOutButton>
              <button className={sideNavigationMenuTriggerStyle()}>
                Logout
              </button>
            </SignOutButton>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </SignedIn>
  );
};

export default BottomNavigation;
