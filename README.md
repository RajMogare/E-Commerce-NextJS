# E-Commerce Website

An e-commerce web application built with Next.js, Tailwind CSS, Redux for state management, PayPal for payment integration, and Clerk for user authentication. The project uses TypeScript for better type safety. It allows users to browse products, add them to the cart, manage their accounts, and securely purchase items using PayPal. Registration and login are required for making a purchase.

### Live Demo: [E-Commerce Website](https://e-commerce-nextjs-orpin.vercel.app/)

### GitHub Repository: [View on GitHub](https://github.com/RajMogare/E-Commerce-NextJS.git)

### Video Walkthrough: [Watch on Google Drive](https://drive.google.com/file/d/1KhojKfxtZGPitoV-1AZ4jGZDuGigJI8a/view?usp=sharing)

## Features

- **User Authentication**: Users can register and log in using Clerk.
- **Browse Products**: View a catalog of products with detailed information.
- **Shopping Cart**: Add products to the cart and manage quantities.
- **Payment Integration**: Secure PayPal payment gateway for seamless transactions.
- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop).
- **Protected Routes**: Non-logged-in users must register or log in before checking out.

## Technologies Used

- **Next.js**: For building a fast, server-side rendered React application.
- **Tailwind CSS**: For rapid and responsive UI design.
- **PayPal**: For handling secure payments.
- **Clerk**: For user authentication (login/register).
- **Redux**: For managing global application state (cart, user session, etc.).
- **TypeScript**: For static type checking and robust code structure.

## Getting Started

To run this project locally, follow the steps below:

### Prerequisites

- Node.js (v16 or later)
- Git
- PayPal Developer Account
- Clerk Account for authentication

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/RajMogare/E-Commerce-NextJS.git
   ```
2. Navigate into the project directory:

   ```bash
   cd E-Commerce-NextJS
   ```
3. Install dependencies:
    ```bash
    Install dependencies:
    ```
4. Create a .env.local file for environment variables (replace with your keys):
   ```bash
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
   CLERK_SECRET_KEY=
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
   NEXT_PUBLIC_PAYPAL_CLIENT_ID=
   ```
5. Run the development server:

  ```bash
  npm run dev


