"use client";
import { Button } from "@/components/ui/button";
import { addItem, CartItem, removeItem } from "@/store/cartSlice";
import { RootState } from "@/store/store";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const WishList = () => {
  const dispatch = useDispatch();
  const items = useSelector((state: RootState) => state.wishlist.items);
  const totalQuantity = items.reduce((total, item) => total + item.quantity, 0);

  const AddToCart = (item: CartItem) => {
    dispatch(addItem(item));
  };
  const removeItemhandler = (id: number) => {
    dispatch(removeItem({ id }));
  };

  return (
    <div className="mt-8 min-h-[60vh]">
      {/* check if cart is empty */}
      {items.length == 0 && (
        <div className="flex items-center w-full h-[80vh] flex-col justify-center">
          <Image
            src="/images/cart.svg"
            alt="emptycart"
            width={400}
            height={400}
            className="object-cover mx-auto"
          />
          <h1 className="mt-8 text-2xl font-semibold">
            Your WishList is empty
          </h1>

          <Link href="/">
            <Button className="mt-4">Shop Now</Button>
          </Link>
        </div>
      )}

      {items.length > 0 && (
        <div className="md:w-4/5 w-[95%] mx-auto grid grid-cols-1 xl:grid-cols-6 gap-12">
          {/* cat item */}
          <div className="rounded-lg shadow-md overflow-hidden xl:col-span-4">
            <h1 className="p-4 text-xl sm:text-2xl md:text-3xl font-bold text-white bg-blue-500">
              Your WishList {totalQuantity} items
            </h1>
            {items.map((item) => {
              return (
                <div key={item.id}>
                  <div className="flex pb-6 mt-2 p-5 border-b-[1.5px] border-opacity-25 border-gray-700 items-center space-x-10">
                    <div>
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={180}
                        height={180}
                      />
                    </div>
                    <div>
                      <h1 className="md:text-xl text-base font-bold text-black">
                        {item.title}
                      </h1>
                      <h1 className="md:text-lg text-sm font-semibold">
                        Category : {item.category}
                      </h1>
                      <h1 className="md:text-2xl text-lg font-bold text-blue-950 ">
                        ${item.price}
                      </h1>
                      <h1 className="md:text-lg text-sm font-semibold">
                        Quantity : {item.quantity}
                      </h1>

                      <div className="flex items-center mt-4 space-x-4">
                        <Button onClick={() => AddToCart(item)}>
                          Add To Cart
                        </Button>
                        <Button
                          variant={"destructive"}
                          onClick={() => removeItemhandler(item.id)}
                        >
                          Remove
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default WishList;
