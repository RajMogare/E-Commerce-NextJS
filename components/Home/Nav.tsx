import Image from "next/image";
import Link from "next/link";
import React from "react";
import SearchBox from "../Helper/SearchBox";
import { UserIcon } from "lucide-react";
import ShoppingCartButton from "../Helper/ShoppingCartButton";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import WishListButton from "../Helper/WishListButton";

const Nav = () => {
  return (
    <div className="h-[12vh] sticky top-0 z-[1] bg-white shadow-md ">
      <div className="flex items-center justify-between w-[95%] md:w-4/5 mx-auto h-full">
        {/* logo */}
        <Link href="/">
          <Image src="/images/logo.png" alt="logo" width={140} height={140} />
        </Link>

        {/* icons */}
        <div className="flex  items-center space-x-6">

          <SearchBox />

          {/* <HeartIcon size={26} cursor={"pointer"} /> */}
          <WishListButton/>

          {/* shopiing cart */}
          <ShoppingCartButton />
          
          {/* userbutton */}
          {/* signin user */}
          <SignedIn>
            <UserButton />
          </SignedIn>

          {/* not signed in */}
          <SignedOut>
            <SignInButton>
              <UserIcon size={26} cursor={"pointer"} />
            </SignInButton>
          </SignedOut>
        </div>
      </div>
    </div>
  );
};

export default Nav;
