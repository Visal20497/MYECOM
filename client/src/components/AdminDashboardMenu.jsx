import React from "react";
import { Link } from "react-router-dom";
import { FaUserShield } from "react-icons/fa";
import { MdCategory } from "react-icons/md";
import { FaProductHunt } from "react-icons/fa";
import { FaBorderAll } from "react-icons/fa";

function AdminDashboardMenu() {
  let navStyle = { textDecoration: "none" };

  return (
    <>
      <ul className="list-group">
        <Link style={navStyle} to={"/dashboard/admin/create-category"}>
          <li className="list-group-item list-group-item-action dashboard">
            <MdCategory /> Create Category
          </li>
        </Link>
        <Link style={navStyle} to={"/dashboard/admin/create-product"}>
          <li className="list-group-item list-group-item-action dashboard">
            <FaProductHunt /> Create Product
          </li>
        </Link>
        <Link style={navStyle} to={"/dashboard/admin/products"}>
          <li className="list-group-item list-group-item-action dashboard">
            <FaProductHunt /> Products
          </li>
        </Link>
        <Link style={navStyle} to={"/dashboard/admin/users"}>
          <li className="list-group-item list-group-item-action dashboard">
            <FaUserShield /> Users
          </li>
        </Link>
        <Link style={navStyle} to={"/dashboard/admin/all-orders"}>
          <li className="list-group-item list-group-item-action dashboard">
            <FaBorderAll /> Orders
          </li>
        </Link>
      </ul>
    </>
  );
}

export default AdminDashboardMenu;
