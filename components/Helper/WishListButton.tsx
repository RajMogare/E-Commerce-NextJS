"use client"
import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import WishListSideBar from "./WishListSideBar";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { HeartIcon } from "lucide-react";

const WishListButton = () => {
  const items = useSelector((state: RootState) => state.wishlist.items);
  console.log(items);
  const totalQuantity = items.reduce((total, item) => total + item.quantity, 0);
  return (
    <div>
      <Sheet>
        <SheetTrigger>
          <div className="relative">
            <span className="absolute -top-3 -right-2 w-6 h-6 bg-green-500 flex items-center text-center justify-center flex-col text-xs text-white rounded-full">
              {totalQuantity}
            </span>
            <HeartIcon cursor={"pointer"} size={26} />
          </div>
        </SheetTrigger>
        <SheetContent className="overflow-auto h-full">
          <WishListSideBar items={items} />
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default WishListButton;
