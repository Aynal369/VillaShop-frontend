import React from "react";
import Copyright from "./Copyright";
import FooterColumns from "./FooterColumns";

const MakeMoneyWithUs = [
  { name: "Sell on Villa Shop", link: "/" },
  { name: "Sell Your Services on Villa Shop", link: "/" },
  { name: "Sell on Villa Shop Business", link: "/" },
  { name: "Sell Your Apps on Villa Shop", link: "/" },
  { name: "Become an Affiliate", link: "/" },
  { name: "Advertise Your Products", link: "/" },
  { name: "Sell-Publish with Us", link: "/" },
  { name: "Become an Villa Shop Vendor", link: "/" },
];
const ProductCategories = [
  { name: "Apple", link: "/" },
  { name: "Camera & Photo", link: "/" },
  { name: "Cell Phones", link: "/" },
  { name: "Computers & Accessories", link: "/" },
  { name: "Headphones", link: "/" },
  { name: "Smartwatches", link: "/" },
  { name: "Sports & Outdoors", link: "/" },
  { name: "Television & Video", link: "/" },
  { name: "Video Games", link: "/" },
];
const LetUsHelpYou = [
  { name: "Your Account", link: "/" },
  { name: "Your Orders", link: "/" },
  { name: "Returns & Replacements", link: "/" },
  { name: "Shipping Rates & Policies", link: "/" },
  { name: "Refund and Returns Policy", link: "/" },
  { name: "Privacy Policy", link: "/" },
  { name: "Terms and Conditions", link: "/" },
  { name: "Help Center", link: "/" },
];
const GetToKnowUs = [
  { name: "Careers", link: "/" },
  { name: "About Villa Shop", link: "/" },
  { name: "Invertors Relations", link: "/" },
  { name: "Villa Shop Devices", link: "/" },
  { name: "Customer reviews", link: "/" },
  { name: "Privacy Policy", link: "/" },
  { name: "Contact Us", link: "/" },
];

const Footer = () => {
  return (
    <footer>
      <div className="clear-both bg-dark">
        <div className="container-fluid">
          <div className="row">
            <FooterColumns
              key={1}
              Title="Make Money With Us"
              Items={MakeMoneyWithUs}
            />
            <FooterColumns
              key={2}
              Title="Product Categories"
              Items={ProductCategories}
            />
            <FooterColumns
              key={3}
              Title="Let Us Help You"
              Items={LetUsHelpYou}
            />
            <FooterColumns key={4} Title="Get to Know Us" Items={GetToKnowUs} />
          </div>
        </div>
      </div>
      <Copyright />
    </footer>
  );
};

export default Footer;
