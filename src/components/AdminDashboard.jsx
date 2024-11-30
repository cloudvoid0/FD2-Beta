import React from "react";
import { Link } from "react-router-dom";
import { Button, Card, Typography } from "@mui/material";

const AdminDashboard = () => {
  return (
    <div style={{ height: "100vh", backgroundColor: "#f4f4f4", padding: "2rem", overflowY: "auto" }}>
      {/* Header */}
      <header style={{ textAlign: "center", marginBottom: "2rem" }}>
        <Typography variant="h4" style={{ fontWeight: "bold", marginBottom: "0.5rem" }}>
          Admin Dashboard
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Manage all aspects of the GiveGrub platform.
        </Typography>
      </header>

      {/* Cards Section */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem", justifyContent: "center" }}>
        {/* Cards */}
        {[
          { title: "View Donations", description: "Track all the food donations made by donors.", link: "/view-donations" },
          { title: "Manage Users", description: "View and manage donor and nonprofit accounts.", link: "/manage-users" },
          { title: "Track Analytics", description: "Analyze donation data and generate reports.", link: "/track-analytics" },
          { title: "Settings", description: "Configure platform settings and preferences.", link: "/settings" },
        ].map((item, index) => (
          <Card
            key={index}
            style={{
              width: "250px",
              padding: "1.5rem",
              textAlign: "center",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseOver={(e) => (e.currentTarget.style.transform = "translateY(-5px)")}
            onMouseOut={(e) => (e.currentTarget.style.transform = "translateY(0)")}
          >
            <Typography variant="h6" style={{ marginBottom: "1rem" }}>
              {item.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" style={{ marginBottom: "1.5rem" }}>
              {item.description}
            </Typography>
            <Link to={item.link} style={{ textDecoration: "none" }}>
              <Button variant="contained" color="primary">
                Go to {item.title.split(" ")[1]}
              </Button>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
