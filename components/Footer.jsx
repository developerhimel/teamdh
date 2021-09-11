import React from "react";

export default function Footer() {
  return (
    <div>
      <footer className="p-10 footer bg-base-200 text-base-content">
        <div className="container justify-center items-center">
          <span className="footer-title">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
        <div>
          <span className="footer-title">Newsletter</span>
          <div className="form-control w-80">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="username@site.com"
                className="w-full pr-16 input input-bordered"
              />
              <button className="absolute top-0 right-0 rounded-l-none btn btn-primary">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </footer>

      <div className="p-4 footer bg-gray-900 text-gray-500 footer-center">
        <div>
          <p>
            Copyright © 2021 - All right reserved by&nbsp;
            <a className="cursor-pointer text-blue-300 hover:underline">
              Teamdh Software Industry Ltd
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
