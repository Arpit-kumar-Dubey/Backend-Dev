const express = require("express");
const router = express.Router();

// Add to cart (anonymous = cookies, logged-in = session)
router.post("/add", (req, res) => {
  const item = req.body.item;

  if (req.session.user) {
    // Logged-in user
    req.session.cart = req.session.cart || [];
    req.session.cart.push(item);
  } else {
    // Anonymous user (cookie)
    let cart = req.cookies.cart ? JSON.parse(req.cookies.cart) : [];
    cart.push(item);
    res.cookie("cart", JSON.stringify(cart));
  }

  res.send("Item added");
});

// Login & migrate cart
router.post("/login", (req, res) => {
  req.session.user = { name: "User" };

  // Move cookie cart to session
  if (req.cookies.cart) {
    const cookieCart = JSON.parse(req.cookies.cart);
    req.session.cart = [...(req.session.cart || []), ...cookieCart];

    res.clearCookie("cart");
  }

  res.send("Logged in & cart migrated");
});

// View cart
router.get("/cart", (req, res) => {
  if (req.session.user) {
    return res.json(req.session.cart || []);
  }

  const cart = req.cookies.cart ? JSON.parse(req.cookies.cart) : [];
  res.json(cart);
});

module.exports = router;