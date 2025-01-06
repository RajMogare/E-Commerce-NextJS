# E-Commerce Website

🚀 A modern, fully functional E-Commerce platform built using **Next.js**, **React.js**, **Tailwind CSS**, **Redux Toolkit**, **TypeScript**, **Clerk**, and **PayPal** for secure payments.

## 🌟 Live Demo

Check out the live version of the project here: https://e-commerce-next-akwe5le6m-rajmogares-projects.vercel.app/

## 📹 Video Walkthrough

Watch the project walkthrough: https://drive.google.com/file/d/1o6pL12aG5jUYrPbSzuwSJL5CCLNAMGv2/view?usp=drive_link

## 🛠️ Features

- 🔐 **User Authentication**: 
  - Powered by Clerk for secure login and registration.
- 🛍️ **Browse Products**: 
  - Products fetched dynamically from the [Fakestore API](https://fakestoreapi.com/).
  - View product details on a dedicated page.
- 🛒 **Cart Management**: 
  - Add products to the cart and manage quantities with Redux Toolkit.
- 💖 **Wishlist Functionality**: 
  - Save your favorite products for later.
- 💳 **Secure Payments**: 
  - Integrated PayPal for seamless and secure checkouts.
- 📱 **Responsive Design**: 
  - Optimized for mobile, tablet, and desktop devices.
- 🚫 **Protected Routes**: 
  - Users must log in to proceed to checkout and other sensitive pages.

## 🖼️ Pages

1. **Home Page**: Displays a list of products.
2. **Product Details Page**: Detailed view of a selected product.
3. **Cart Page**: Manage items in your cart.
4. **Wishlist Page**: View and manage saved items.
5. **Checkout Page**: Securely pay using PayPal.

## 🧰 Tech Stack

- **Next.js**: Server-side rendering for better performance and SEO.
- **Tailwind CSS**: For building a sleek, responsive UI.
- **Redux Toolkit**: Efficient state management for cart and wishlist.
- **Clerk**: Robust authentication for login and registration.
- **PayPal API**: For handling secure payment transactions.
- **TypeScript**: Ensuring strong type safety and maintainable code.
- **Shadcn UI**: For reusable and accessible components.

## 📦 Installation

Follow these steps to run the project locally:

1. Clone the repository:
   ```bash
     git clone https://github.com/RajMogare/E-Commerce-NextJS.git
   ```

2. Navigate to the project directory
  ```bash
    cd E-Commerce-NextJS
  ```

3. Install dependencies
   ```bash
     npm install
   ```

4. Create a .env.local file and configure the following environment variables:
   ```bash
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
   CLERK_SECRET_KEY=
   NEXT_PUBLIC_PAYPAL_CLIENT_ID=
   ```

5. Run the development server:
  ```bash
  npm run dev
  ```
