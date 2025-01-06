import { addItemtoWishList, removeItemFromWishList, wishListItem } from "@/store/wishlistSlice";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { Button } from "../ui/button";
import Link from "next/link";
import { SheetClose } from "../ui/sheet";


type Props = {
  items: wishListItem[];
};

const WishListSideBar = ({ items }: Props) => {

    const dispatch=useDispatch();

    const addCardHandler=(item:wishListItem)=>dispatch(addItemtoWishList(item));
    const removeCartHandler=(id:number)=>dispatch(removeItemFromWishList({id}))
  return (
    <div className="mt-6 h-full mb-6">
      <h1 className="text-center font-bold text-lg mb-6 ">Your WishList </h1>
      {items.length == 0 && (
        <div className="flex items-center w-full h-[80vh] flex-col justify-center">
          <Image
            src="/images/cart.svg"
            alt="empty-cart"
            width={200}
            height={200}
          />
          <h1 className="mt-8 text-2xl font-bold">Your WishList is Empty !</h1>
        </div>
      )}

      {items.length > 0 && (
        <div>
          {items?.map((item) => {
            return (
              <div
                key={item.id}
                className="pb-4 border-b-2 border-gray-300 border-opacity-60 p-4"
              >
                <div>
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={60}
                    height={60}
                    className="object-cover mb-3"
                  />
                </div>
                <h1 className="w-4/5 text-sm font-semibold truncate">
                  {item?.title}
                </h1>
                <h1 className="text-base text-blue-950 font-bold">
                  ${(item?.price * item.quantity).toFixed(2)}
                </h1>
                <h1 className="text-base font-bold mb-2">
                  Quantity : {item?.quantity}
                </h1>

                <div className="flex items-center space-x-4">
                  <Button className={"sm"} variant={"destructive"} onClick={()=>removeCartHandler(item.id)}>
                    Remove
                  </Button>
                </div>
              </div>
            );
          })}

          <Link href="/wishList">
            <SheetClose>
              <Button className="w-full mb-6 mt-6">View All WishList</Button>
            </SheetClose>
          </Link>
        </div>
      )}
    </div>
  );
};

export default WishListSideBar;
