# Shop Point - ECommerce Website

**Shop Point** is an eCommerce website that allows users to browse products, add them to their cart, and complete the checkout process using Visa. Admins can manage categories, products, orders, and users through a dedicated dashboard.

## Features

### User Features:
- **Login/Signup**: Users can sign up and log in to the platform.
- **Product Browsing**: Users can view products, filter by categories, and see detailed product pages.
- **Add to Cart**: Users can add products to their shopping cart and modify quantities.
- **Checkout & Payment**: Users can checkout and make payments via Visa (integrated via Stripe or PayPal).
- **Order History**: Users can view their order history and see the status of their orders.

### Admin Features:
- **Admin Login**: Admins can log in to a secure dashboard.
- **Dashboard**: Admins can view overall statistics such as sales, active orders, and more.
- **Category Management**: Admins can add, edit, or delete product categories.
- **Product Management**: Admins can add, edit, or remove products.
- **Order Management**: Admins can view all orders and update their statuses (e.g., shipped, delivered).
- **User Management**: Admins can view and manage users.

---

## Technology Stack

- **Frontend**: React.js (or Vue.js, Angular)
- **Backend**: Node.js with Express.js (or Django)
- **Database**: MongoDB (or PostgreSQL)
- **Authentication**: JWT or sessions
- **Payment Integration**: Stripe (or PayPal) for Visa card payments
- **Admin Dashboard**: Custom admin panel (built with React.js)

---

## Prerequisites

- Node.js (LTS version)
- MongoDB or PostgreSQL database
- Stripe or PayPal account for payment processing
- Git for version control

---

## Installation Steps

Follow these steps to get your development environment up and running.

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/shop-point.git
cd shop-point
