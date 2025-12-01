# 🛒 React E-Commerce – Frontend Application

A modern e-commerce frontend application built with **React**, **Vite**, **React Router**, and **Context API + useReducer** architecture.  
Includes product listing, product details, cart management, authentication (fake auth), protected routes, and a fully responsive UI.

🔗 **Live Demo:**  
https://react-ecommerce-seven-eta.vercel.app/products

---

## 🚀 Technologies Used

- **React 18**
- **Vite** (lightweight build tool)
- **React Router DOM v6**
- **Context API + useReducer** (global cart state management)
- **LocalStorage Auth** (simple login/register system)
- **Pure CSS** (component-scoped styles)
- **Vercel Deployment**

---

## 🧩 Features

### 🛍️ Product Features
- Responsive **product listing grid**
- Dynamic **product detail page**  
  `/product/:id`
- “Related Products” section based on category

### 🛒 Cart (Shopping Cart)
- Global cart state with Context + Reducer
- **Add to Cart**
- **Increase / Decrease** item quantity
- **Remove item**
- **Subtotal, shipping, and total price** calculation
- Live cart counter in Navbar

### 🔐 Authentication (Fake / LocalStorage)
- Register → saves user data to `localStorage`
- Login → validates email & password
- Maintains session using `loggedIn` flag

### 🔒 Protected Routes
Unauthenticated users **cannot** access:
- `/cart`
- `/checkout`

They are automatically redirected to `/login`.

### 🎨 UI / UX
- Fully responsive interface
- Mobile-first layout
- Modern, clean design
- Hover & focus effects
- Component-based CSS architecture

---
