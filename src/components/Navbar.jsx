import React from "react";
import { Link } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import logo from "/Users/mario/Documents/NSU Files/Summer 24/CSE299/Food_Donation_Plat/src/assets/food-donation.png";

const Navbar = () => {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 50px",
        backgroundColor: "#000000",
        color: "#ffffff",
      }}
    >
      <div>
        <img
          src={logo}
          alt="logo"
          style={{ height: "40px", marginRight: "15px" }}
        />
        <span style={{ fontSize: "24px", fontWeight: "bold" }}>give grub</span>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <Link to="/" style={{ textDecoration: "none", color: "#ffffff" }}>
          Home
        </Link>
        <Link to="/how-it-works" style={{ textDecoration: "none", color: "#ffffff" }}>
          How It Works
        </Link>
        <Link to="/about-us" style={{ textDecoration: "none", color: "#ffffff" }}>
          About Us
        </Link>
        <Link to="/top-donors" style={{ textDecoration: "none", color: "#ffffff" }}>
          Top Donors
        </Link>
        <Link to="/get-started" style={{ textDecoration: "none" }}>
        <button
          style={{
            padding: "10px 20px",
            backgroundColor: "#ffffff",
            color: "#000000",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Get Started
        </button>
        </Link>
        <Link to="/account" style={{ textDecoration: "none", color: "#ffffff" }}>
        <AccountCircleIcon style={{ fontSize: "30px" }} />
        </Link>
        <Link to="/admin-dashboard" style={{ textDecoration: "none", color: "#ffffff" }}>
        Admin
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;


