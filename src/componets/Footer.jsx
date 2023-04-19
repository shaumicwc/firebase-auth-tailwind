import React from 'react';

const Footer = () => {
    return (
        <div>
            <Footer className="p-10 bg-gray-800 text-white" {...args}>
  <div>
    <svg
      width="50"
      height="50"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      clipRule="evenodd"
      className="fill-current"
    >
      <path d="M11 1l5.5 5.5-5.5 5.5v-4h-7v-3h7v-4zm-1 6h-5v1h5v-1zm0-2h-5v1h5v-1zm0-2h-5v1h5v-1z"></path>
    </svg>
    <p>
      BookNest
      <br />
      Your go-to destination for all things books
    </p>
  </div>

  <div>
    <Footer.Title>Browse</Footer.Title>
    <a className="link link-hover">New Releases</a>
    <a className="link link-hover">Bestsellers</a>
    <a className="link link-hover">Genres</a>
    <a className="link link-hover">Authors</a>
  </div>
  <div>
    <Footer.Title>Company</Footer.Title>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </div>
  <div>
    <Footer.Title>Legal</Footer.Title>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </div>
</Footer>

        </div>
    );
};

export default Footer;