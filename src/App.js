import React, { useState, useEffect } from "react";
import "./App.css";

// ========== DATA CONSTANTS ==========
const menuItems = [
  {
    id: 1,
    name: "Classic Cheeseburger",
    price: 12.99,
    emoji: "🍔",
    category: "Burgers",
    description: "Beef patty, cheddar cheese, lettuce, tomato",
    popular: true,
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop",
  },
  {
    id: 2,
    name: "Bacon Burger",
    price: 15.99,
    emoji: "🥓",
    category: "Burgers",
    description: "Crispy bacon, beef patty, pepper jack cheese",
    popular: true,
    image:
      "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=400&h=300&fit=crop",
  },
  {
    id: 3,
    name: "Margherita Pizza",
    price: 18.99,
    emoji: "🍕",
    category: "Pizza",
    description: "Fresh mozzarella, tomato, basil",
    popular: true,
    image:
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop",
  },
  {
    id: 4,
    name: "Pepperoni Pizza",
    price: 20.99,
    emoji: "🍕",
    category: "Pizza",
    description: "Spicy pepperoni, mozzarella, tomato sauce",
    popular: false,
    image:
      "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&h=300&fit=crop",
  },
  {
    id: 5,
    name: "Spaghetti Carbonara",
    price: 14.99,
    emoji: "🍝",
    category: "Pasta",
    description: "Eggs, pecorino, pancetta, black pepper",
    popular: true,
    image:
      "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=400&h=300&fit=crop",
  },
  {
    id: 6,
    name: "Fettuccine Alfredo",
    price: 13.99,
    emoji: "🍝",
    category: "Pasta",
    description: "Creamy parmesan sauce, garlic",
    popular: false,
    image:
      "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=400&h=300&fit=crop",
  },
  {
    id: 7,
    name: "California Roll",
    price: 16.99,
    emoji: "🍣",
    category: "Sushi",
    description: "Crab, avocado, cucumber",
    popular: true,
    image:
      "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=400&h=300&fit=crop",
  },
  {
    id: 8,
    name: "Rainbow Roll",
    price: 19.99,
    emoji: "🍣",
    category: "Sushi",
    description: "Assorted fish, avocado, cucumber",
    popular: false,
    image:
      "https://images.unsplash.com/photo-1553621042-f6e147245754?w=400&h=300&fit=crop",
  },
  {
    id: 9,
    name: "Chocolate Cake",
    price: 7.99,
    emoji: "🍰",
    category: "Desserts",
    description: "Rich chocolate, ganache",
    popular: true,
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop",
  },
  {
    id: 10,
    name: "Ice Cream Sundae",
    price: 5.99,
    emoji: "🍦",
    category: "Desserts",
    description: "Vanilla, chocolate syrup, cherry",
    popular: false,
    image:
      "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=300&fit=crop",
  },
  {
    id: 11,
    name: "Caesar Salad",
    price: 9.99,
    emoji: "🥗",
    category: "Salads",
    description: "Romaine, parmesan, croutons, caesar dressing",
    popular: false,
    image:
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&h=300&fit=crop",
  },
  {
    id: 12,
    name: "Greek Salad",
    price: 10.99,
    emoji: "🥗",
    category: "Salads",
    description: "Feta, olives, cucumber, tomato",
    popular: true,
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop",
  },
];

const categories = [
  "All",
  "Burgers",
  "Pizza",
  "Pasta",
  "Sushi",
  "Desserts",
  "Salads",
];

const services = [
  {
    id: 1,
    icon: "🚚",
    title: "Free Delivery",
    description: "On orders over $30",
    color: "#ff6b35",
  },
  {
    id: 2,
    icon: "🎉",
    title: "Catering",
    description: "For events & parties",
    color: "#ffd700",
  },
  {
    id: 3,
    icon: "🏠",
    title: "Dine In",
    description: "Cozy atmosphere",
    color: "#ff6b35",
  },
  {
    id: 4,
    icon: "📅",
    title: "Reservations",
    description: "Book your table",
    color: "#ffd700",
  },
];

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Food Blogger",
    text: "Best food in town! The burgers are amazing and delivery is super fast.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Chef",
    text: "I love their pizza! Fresh ingredients and perfect crust every time.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Regular Customer",
    text: "Great service and even better food. The sushi is incredible!",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/3.jpg",
  },
];

const aboutFeatures = [
  {
    id: 1,
    icon: "🌟",
    title: "Premium Quality",
    description: "Only the finest ingredients",
  },
  {
    id: 2,
    icon: "⚡",
    title: "Fast Delivery",
    description: "30 min or it's free",
  },
  {
    id: 3,
    icon: "❤️",
    title: "Made with Love",
    description: "Secret family recipes",
  },
];

export default function App() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isScrolled, setIsScrolled] = useState(false);

  // Checkout states
  const [showCheckout, setShowCheckout] = useState(false);
  const [checkoutStep, setCheckoutStep] = useState(1);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zipCode: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const filteredItems =
    selectedCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === selectedCategory);

  const addToCart = (item) => {
    const existing = cart.find((i) => i.id === item.id);
    if (existing) {
      setCart(
        cart.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        )
      );
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((i) => i.id !== id));
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(id);
    } else {
      setCart(
        cart.map((i) => (i.id === id ? { ...i, quantity: newQuantity } : i))
      );
    }
  };

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const deliveryFee = totalPrice > 30 ? 0 : 4.99;
  const finalTotal = totalPrice + deliveryFee;

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
    closeMobileMenu();
    setShowCart(false);
  };

  const handleProceedToCheckout = () => {
    if (cart.length === 0) return;
    setShowCart(false);
    setShowCheckout(true);
    setCheckoutStep(1);
    setOrderPlaced(false);
    setErrors({});
  };

  const handleCloseCheckout = () => {
    setShowCheckout(false);
    setCheckoutStep(1);
    setErrors({});
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  // Format card number with spaces
  const handleCardNumberChange = (e) => {
    let value = e.target.value.replace(/\s/g, '');
    value = value.replace(/[^0-9]/g, '');
    if (value.length > 16) value = value.slice(0, 16);
    
    // Add spaces every 4 digits
    let formatted = '';
    for (let i = 0; i < value.length; i++) {
      if (i > 0 && i % 4 === 0) {
        formatted += ' ';
      }
      formatted += value[i];
    }
    
    setFormData({
      ...formData,
      cardNumber: formatted,
    });
    if (errors.cardNumber) {
      setErrors({ ...errors, cardNumber: "" });
    }
  };

  // Format expiry date
  const handleExpiryChange = (e) => {
    let value = e.target.value.replace(/\//g, '').replace(/[^0-9]/g, '');
    if (value.length >= 2) {
      value = value.slice(0, 2) + '/' + value.slice(2, 4);
    }
    setFormData({ ...formData, expiryDate: value });
    if (errors.expiryDate) setErrors({ ...errors, expiryDate: "" });
  };

  // Format CVV
  const handleCvvChange = (e) => {
    let value = e.target.value.replace(/[^0-9]/g, '').slice(0, 4);
    setFormData({ ...formData, cvv: value });
    if (errors.cvv) setErrors({ ...errors, cvv: "" });
  };

  // Validate Step 1
  const validateStep1 = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[\d\s+()-]{8,}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = "Enter a valid phone number";
    }
    if (!formData.address.trim()) newErrors.address = "Address is required";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Validate Step 2
  const validateStep2 = () => {
    const newErrors = {};
    if (paymentMethod === "card") {
      const cardNumberClean = formData.cardNumber.replace(/\s/g, '');
      if (!cardNumberClean) {
        newErrors.cardNumber = "Card number is required";
      } else if (cardNumberClean.length !== 16) {
        newErrors.cardNumber = "Card number must be 16 digits";
      }
      if (!formData.expiryDate) {
        newErrors.expiryDate = "Expiry date is required";
      } else if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(formData.expiryDate)) {
        newErrors.expiryDate = "Use format MM/YY";
      }
      if (!formData.cvv) {
        newErrors.cvv = "CVV is required";
      } else if (!/^\d{3,4}$/.test(formData.cvv)) {
        newErrors.cvv = "CVV must be 3 or 4 digits";
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNextStep = () => {
    if (checkoutStep === 1) {
      if (validateStep1()) {
        setCheckoutStep(2);
        setErrors({});
      }
    } else if (checkoutStep === 2) {
      if (validateStep2()) {
        setCheckoutStep(3);
        setErrors({});
      }
    }
  };

  const handlePrevStep = () => {
    setCheckoutStep(checkoutStep - 1);
    setErrors({});
  };

  const handlePlaceOrder = () => {
    setOrderPlaced(true);
    setCart([]);
    setTimeout(() => {
      setShowCheckout(false);
      setCheckoutStep(1);
      setOrderPlaced(false);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        zipCode: "",
        cardNumber: "",
        expiryDate: "",
        cvv: "",
      });
      setErrors({});
      scrollToSection("home");
    }, 3000);
  };

  return (
    <div className="app">
      {/* Navbar */}
      <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
        <div className="logo" onClick={() => scrollToSection("home")}>
          <span className="logo-icon">🍽️</span>
          <span>FOOD HOUSE</span>
        </div>
        <div className={`nav-links ${mobileMenuOpen ? "active" : ""}`}>
          <button className="close-menu" onClick={closeMobileMenu}>
            ✕
          </button>
          {["home", "about", "menu", "services", "testimonials", "contact"].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(section);
              }}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </div>
        <div className="nav-actions">
          <button className="cart-icon" onClick={() => setShowCart(!showCart)}>
            <span>🛒</span>
            {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
          </button>
          <button className="burger-menu" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            ☰
          </button>
        </div>
      </nav>

      {/* Cart Sidebar */}
      <div className={`cart-overlay ${showCart ? "visible" : ""}`} onClick={() => setShowCart(false)} />
      <div className={`cart-sidebar ${showCart ? "open" : ""}`}>
        <div className="cart-header">
          <h3>🛒 Your Order</h3>
          <button className="cart-close-btn" onClick={() => setShowCart(false)}>✕</button>
        </div>
        <div className="cart-items">
          {cart.length === 0 ? (
            <div className="empty-cart">
              <span className="empty-cart-icon">🛒</span>
              <p>Your cart is empty</p>
              <button className="empty-cart-btn" onClick={() => setShowCart(false)}>Browse Menu</button>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="cart-item-image">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="cart-item-details">
                  <div className="cart-item-name">{item.emoji} {item.name}</div>
                  <div className="cart-item-price">${item.price.toFixed(2)}</div>
                </div>
                <div className="cart-item-controls">
                  <button className="qty-btn" onClick={() => updateQuantity(item.id, item.quantity - 1)}>−</button>
                  <span className="qty-number">{item.quantity}</span>
                  <button className="qty-btn" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                </div>
              </div>
            ))
          )}
        </div>
        {cart.length > 0 && (
          <div className="cart-footer">
            <div className="cart-subtotal"><span>Subtotal</span><span>${totalPrice.toFixed(2)}</span></div>
            <div className="cart-delivery"><span>Delivery Fee</span><span>{deliveryFee === 0 ? "FREE" : `$${deliveryFee.toFixed(2)}`}</span></div>
            <div className="cart-total"><span>Total</span><span>${finalTotal.toFixed(2)}</span></div>
            <button className="checkout-btn" onClick={handleProceedToCheckout}>Proceed to Checkout →</button>
          </div>
        )}
      </div>

      {/* Checkout Modal */}
      {showCheckout && (
        <div className="checkout-modal-overlay" onClick={handleCloseCheckout}>
          <div className="checkout-modal" onClick={(e) => e.stopPropagation()}>
            <button className="checkout-close" onClick={handleCloseCheckout}>✕</button>
            
            {orderPlaced ? (
              <div className="order-success">
                <div className="success-icon">✅</div>
                <h2>Order Placed Successfully!</h2>
                <p>Thank you for your order. Your food will be delivered soon.</p>
                <div className="order-details-summary">
                  <p>Order Total: <strong>${finalTotal.toFixed(2)}</strong></p>
                  <p>Delivery to: {formData.address}</p>
                </div>
                <button className="continue-shopping" onClick={handleCloseCheckout}>Continue Shopping</button>
              </div>
            ) : (
              <>
                <div className="checkout-header">
                  <h2>Checkout</h2>
                  <div className="checkout-steps">
                    <div className={`step ${checkoutStep >= 1 ? "active" : ""}`}>
                      <span className="step-number">1</span>
                      <span>Info</span>
                    </div>
                    <div className={`step-line ${checkoutStep >= 2 ? "active" : ""}`}></div>
                    <div className={`step ${checkoutStep >= 2 ? "active" : ""}`}>
                      <span className="step-number">2</span>
                      <span>Payment</span>
                    </div>
                    <div className={`step-line ${checkoutStep >= 3 ? "active" : ""}`}></div>
                    <div className={`step ${checkoutStep >= 3 ? "active" : ""}`}>
                      <span className="step-number">3</span>
                      <span>Confirm</span>
                    </div>
                  </div>
                </div>

                <div className="checkout-body">
                  {checkoutStep === 1 && (
                    <div className="checkout-form">
                      <h3>Delivery Information</h3>
                      <div className="form-row">
                        <div className="form-group">
                          <label>Full Name *</label>
                          <input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} placeholder="John Doe" className={errors.fullName ? "error" : ""} />
                          {errors.fullName && <span className="error-message">{errors.fullName}</span>}
                        </div>
                        <div className="form-group">
                          <label>Email *</label>
                          <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="john@example.com" className={errors.email ? "error" : ""} />
                          {errors.email && <span className="error-message">{errors.email}</span>}
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group">
                          <label>Phone *</label>
                          <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="+1 234 567 8900" className={errors.phone ? "error" : ""} />
                          {errors.phone && <span className="error-message">{errors.phone}</span>}
                        </div>
                        <div className="form-group">
                          <label>Address *</label>
                          <input type="text" name="address" value={formData.address} onChange={handleInputChange} placeholder="123 Main St" className={errors.address ? "error" : ""} />
                          {errors.address && <span className="error-message">{errors.address}</span>}
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group">
                          <label>City</label>
                          <input type="text" name="city" value={formData.city} onChange={handleInputChange} placeholder="New York" />
                        </div>
                        <div className="form-group">
                          <label>Zip Code</label>
                          <input type="text" name="zipCode" value={formData.zipCode} onChange={handleInputChange} placeholder="10001" />
                        </div>
                      </div>
                    </div>
                  )}

                  {checkoutStep === 2 && (
                    <div className="checkout-form">
                      <h3>Payment Method</h3>
                      <div className="payment-methods">
                        <label className={`payment-option ${paymentMethod === "card" ? "selected" : ""}`}>
                          <input type="radio" name="paymentMethod" value="card" checked={paymentMethod === "card"} onChange={(e) => setPaymentMethod(e.target.value)} />
                          <span>💳 Credit / Debit Card</span>
                        </label>
                        <label className={`payment-option ${paymentMethod === "cash" ? "selected" : ""}`}>
                          <input type="radio" name="paymentMethod" value="cash" checked={paymentMethod === "cash"} onChange={(e) => setPaymentMethod(e.target.value)} />
                          <span>💵 Cash on Delivery</span>
                        </label>
                      </div>

                      {paymentMethod === "card" && (
                        <div className="card-details">
                          <div className="form-group">
                            <label>Card Number *</label>
                            <input
                              type="text"
                              name="cardNumber"
                              value={formData.cardNumber}
                              onChange={handleCardNumberChange}
                              placeholder="1234 5678 9012 3456"
                              maxLength="19"
                              className={errors.cardNumber ? "error" : ""}
                            />
                            {errors.cardNumber && <span className="error-message">{errors.cardNumber}</span>}
                          </div>
                          <div className="form-row">
                            <div className="form-group">
                              <label>Expiry Date *</label>
                              <input
                                type="text"
                                name="expiryDate"
                                value={formData.expiryDate}
                                onChange={handleExpiryChange}
                                placeholder="MM/YY"
                                maxLength="5"
                                className={errors.expiryDate ? "error" : ""}
                              />
                              {errors.expiryDate && <span className="error-message">{errors.expiryDate}</span>}
                            </div>
                            <div className="form-group">
                              <label>CVV *</label>
                              <input
                                type="text"
                                name="cvv"
                                value={formData.cvv}
                                onChange={handleCvvChange}
                                placeholder="123"
                                maxLength="4"
                                className={errors.cvv ? "error" : ""}
                              />
                              {errors.cvv && <span className="error-message">{errors.cvv}</span>}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {checkoutStep === 3 && (
                    <div className="order-review">
                      <h3>Review Your Order</h3>
                      <div className="review-section">
                        <h4>Delivery Details</h4>
                        <p><strong>{formData.fullName}</strong></p>
                        <p>{formData.address}</p>
                        <p>{formData.city} {formData.zipCode}</p>
                        <p>{formData.phone}</p>
                        <p>{formData.email}</p>
                      </div>
                      <div className="review-section">
                        <h4>Order Items</h4>
                        {cart.map((item) => (
                          <div key={item.id} className="review-item">
                            <span>{item.name} x{item.quantity}</span>
                            <span>${(item.price * item.quantity).toFixed(2)}</span>
                          </div>
                        ))}
                      </div>
                      <div className="review-section">
                        <h4>Payment Summary</h4>
                        <div className="review-total"><span>Subtotal:</span><span>${totalPrice.toFixed(2)}</span></div>
                        <div className="review-total"><span>Delivery Fee:</span><span>{deliveryFee === 0 ? "FREE" : `$${deliveryFee.toFixed(2)}`}</span></div>
                        <div className="review-total grand-total"><span>Total:</span><span>${finalTotal.toFixed(2)}</span></div>
                        <div className="payment-method-summary">
                          <span>Payment Method:</span>
                          <span>{paymentMethod === "card" ? "Credit/Debit Card" : "Cash on Delivery"}</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="checkout-footer">
                  {checkoutStep > 1 && <button className="back-btn" onClick={handlePrevStep}>← Back</button>}
                  {checkoutStep < 3 ? (
                    <button className="next-btn" onClick={handleNextStep}>Continue →</button>
                  ) : (
                    <button className="place-order-btn" onClick={handlePlaceOrder}>Place Order • ${finalTotal.toFixed(2)}</button>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <span className="hero-badge">Since 2015</span>
          <h1 className="hero-title">TASTE THE <span className="hero-highlight">EXTRAORDINARY</span></h1>
          <p className="hero-subtitle">Experience culinary excellence with our diverse menu from around the world</p>
          <div className="hero-buttons">
            <button className="hero-primary-btn" onClick={() => scrollToSection("menu")}>Explore Menu →</button>
            <button className="hero-secondary-btn" onClick={() => scrollToSection("contact")}>Contact Us</button>
          </div>
        </div>
        <div className="hero-floating-items">
          <div className="float-item">🍔</div>
          <div className="float-item delay-1">🍕</div>
          <div className="float-item delay-2">🍣</div>
          <div className="float-item delay-3">🍝</div>
          <div className="float-item delay-4">🍰</div>
        </div>
      </section>

      {/* Image Break 1 */}
      <div className="image-break"><img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1800&auto=format" alt="Restaurant interior" /></div>

      {/* About Section */}
      <section id="about" className="section about-section">
        <div className="section-content">
          <div className="section-header">
            <span className="section-tag">OUR STORY</span>
            <h2>Welcome to <span className="highlight">Food House</span></h2>
            <div className="section-divider"></div>
          </div>
          <p className="about-text">Founded in 2015, Food House has been serving delicious meals made with love and the freshest ingredients. Our passion for food brings people together, creating unforgettable dining experiences.</p>
          <div className="about-features">
            {aboutFeatures.map((feature, index) => (
              <div key={feature.id} className="about-feature" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Break 2 */}
      <div className="image-break"><img src="https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=1800&auto=format" alt="Fresh ingredients" /></div>

      {/* Services Section */}
      <section id="services" className="section services-section">
        <div className="section-content">
          <div className="section-header">
            <span className="section-tag">WHAT WE OFFER</span>
            <h2>Our <span className="highlight">Services</span></h2>
            <div className="section-divider"></div>
          </div>
          <div className="services-grid">
            {services.map((service) => (
              <div key={service.id} className="service-card-new">
                <div className="service-icon-new" style={{ background: service.color }}>{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Break 3 */}
      <div className="image-break"><img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1800&auto=format" alt="Delicious meal" /></div>

      {/* Menu Section */}
      <section id="menu" className="section menu-section">
        <div className="section-content">
          <div className="section-header">
            <span className="section-tag">OUR MENU</span>
            <h2>Explore <span className="highlight">Delicious Dishes</span></h2>
            <div className="section-divider"></div>
          </div>
          <div className="category-filters">
            {categories.map((cat) => (
              <button key={cat} className={`filter-btn ${selectedCategory === cat ? "active" : ""}`} onClick={() => setSelectedCategory(cat)}>{cat}</button>
            ))}
          </div>
          <div className="menu-grid">
            {filteredItems.map((item, index) => (
              <div key={item.id} className="menu-card" style={{ animationDelay: `${index * 0.05}s` }}>
                {item.popular && <span className="popular-badge">🔥 Popular</span>}
                <div className="menu-image-fixed"><img src={item.image} alt={item.name} /></div>
                <div className="menu-card-content">
                  <h3>{item.name}</h3>
                  <p className="menu-desc">{item.description}</p>
                  <div className="menu-card-footer">
                    <div className="menu-price">${item.price.toFixed(2)}</div>
                    <button className="add-to-cart" onClick={() => addToCart(item)}>Add to Cart +</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Break 4 */}
      <div className="image-break"><img src="https://images.unsplash.com/photo-1579684947550-22e945225d9a?q=80&w=1800&auto=format" alt="Pizza" /></div>

      {/* Testimonials Section */}
      <section id="testimonials" className="section testimonials-section">
        <div className="section-content">
          <div className="section-header">
            <span className="section-tag">TESTIMONIALS</span>
            <h2>What Our <span className="highlight">Customers Say</span></h2>
            <div className="section-divider"></div>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card">
                <div className="testimonial-image"><img src={testimonial.image} alt={testimonial.name} /></div>
                <div className="testimonial-rating">{"★".repeat(testimonial.rating)}</div>
                <p className="testimonial-text">"{testimonial.text}"</p>
                <h4>{testimonial.name}</h4>
                <span className="testimonial-role">{testimonial.role}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Separator */}
      <div className="cta-separator">
        <div className="cta-overlay"></div>
        <div className="cta-content">
          <h2>Ready to Order?</h2>
          <p>Get your favorite meals delivered to your doorstep</p>
          <button className="cta-btn" onClick={() => scrollToSection("menu")}>Order Now →</button>
        </div>
      </div>

      {/* Contact Section */}
      <section id="contact" className="section contact-section">
        <div className="section-content">
          <div className="section-header">
            <span className="section-tag">GET IN TOUCH</span>
            <h2>Contact <span className="highlight">Us</span></h2>
            <div className="section-divider"></div>
          </div>
          <div className="contact-container">
            <div className="contact-info">
              <div className="contact-item"><span className="contact-icon">📍</span><div><h4>Visit Us</h4><p>123 Food Street, Culinary City, FC 12345</p></div></div>
              <div className="contact-item"><span className="contact-icon">📞</span><div><h4>Call Us</h4><p>+20 111 99 20 634</p></div></div>
              <div className="contact-item"><span className="contact-icon">✉️</span><div><h4>Email Us</h4><p>omniaeldessouki6@gmail.com</p></div></div>
              <div className="contact-item"><span className="contact-icon">⏰</span><div><h4>Opening Hours</h4><p>Mon-Sun: 11am - 11pm</p></div></div>
            </div>
            <div className="social-links">
              <a href="/" className="social-link" onClick={(e) => e.preventDefault()}>📧</a>
              <a href="/" className="social-link" onClick={(e) => e.preventDefault()}>📸</a>
              <a href="/" className="social-link" onClick={(e) => e.preventDefault()}>💬</a>
              <a href="/" className="social-link" onClick={(e) => e.preventDefault()}>▶️</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo"><span className="logo-icon">🍽️</span><span>FOOD HOUSE</span></div>
          <p className="footer-text">Delivering happiness, one meal at a time.</p>
          <div className="footer-copyright">© 2025 Food House. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}