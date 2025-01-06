"use client";

import React, { useEffect, useState, Suspense } from "react";
import {
  getAllProduct,
  productByCategory,
} from "@/Request/request";
import { Product } from "@/typing";
import { Loader } from "lucide-react";

// Lazy load the ProductCard component
const ProductCard = React.lazy(() => import("./ProductCard"));

const categories = [
  "All",
  "electronics",
  "jewelery",
  "men's clothing",
  "women's clothing",
];

const AllProduct = () => {
  const [products, setProducts] = useState<Product[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const fetchProducts = async (category: string) => {
    setLoading(true);
    try {
      const fetchedProducts: Product[] =
        category === "All"
          ? await getAllProduct()
          : await productByCategory(category);
      setProducts(fetchedProducts);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts(selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="pt-8 pb-12">
      <h1 className="text-center font-bold text-4xl capitalize mb-8">
        All Products
      </h1>

      {/* Category Menu */}
      <div className="w-4/5 mx-auto gap-7 grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-3 py-2 rounded-lg capitalize font-bold hover:scale-110 transition-all duration-300 shadow-md ${
              selectedCategory === category
                ? "bg-blue-500 text-white"
                : "bg-gray-200"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Loader or Products */}
      {loading ? (
        <div className="flex items-center justify-center mt-16">
          <Loader size={32} className="animate-spin" />
        </div>
      ) : (
        <Suspense
          fallback={
            <div className="flex items-center justify-center mt-16">
              <Loader size={32} className="animate-spin" />
            </div>
          }
        >
          <div className="w-4/5 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
            {products?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </Suspense>
      )}
    </div>
  );
};

export default AllProduct;
