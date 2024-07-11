"use client";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import { useState } from "react";
import Image from "next/image";

import LOGO_ZMAT24 from "@/public/Logo.png";
import GOOGLE_ICON from "@/public/google-icon.png";
import BACKGROUND_IMAGE from "@/public/Rectangle.png";

const Login = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePhoneChange = (value: string) => {
    setForm({ ...form, phone: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // handle form submission
    console.log(form);
  };

  return (
    <div className="flex items-start justify-center h-full bg-[#101214] text-white  ">
      <div className="flex w-full h-full ">
        <div className="w-1/2 flex flex-col justify-center items-center bg-inherit p-8 rounded-lg shadow-lg ">
          <div className="flex justify-start w-full flex-row items-center space-x-5">
            <Image
              src={LOGO_ZMAT24}
              alt="Logo"
              className="mb-4 p-4 border border-gray-700 rounded-md "
              width={73}
              height={73}
            />
            <h1 className="text text-2xl font-bold">Zmat24 Crm</h1>
          </div>
          <h2 className="text-start w-full text-xl mb-2">Create an account</h2>
          <p className="text-start w-full mb-6 opacity-50">
            Empower Your Projects, Simplify Your Success!
          </p>
          <form onSubmit={handleSubmit} className="w-full">
            <div className="flex gap-4 mb-4">
              <div className="flex flex-col w-full bg-[#17191c] rounded-md border border-gray-700 p-2">
                <label className="ms-2 text-sm text-slate-100">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="Enter your first name"
                  value={form.firstName}
                  onChange={handleChange}
                  className="w-full p-1 ms-1 bg-transparent text-white focus:outline-none focus:border-none"
                  required
                />
              </div>
              <div className="flex flex-col w-full bg-[#17191c] rounded-md border border-gray-700 p-2">
                <label className="ms-2 text-sm text-slate-100">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Enter your last name"
                  value={form.lastName}
                  onChange={handleChange}
                  className="w-full p-1 ms-1 bg-transparent text-white focus:outline-none focus:border-none"
                  required
                />
              </div>
            </div>
            <div className="flex flex-col mb-4 bg-[#17191c] rounded-md border border-gray-700 p-2">
              <label className="ms-2 text-sm text-slate-100">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                value={form.email}
                onChange={handleChange}
                className="w-full p-1 ms-1 bg-transparent text-white focus:outline-none focus:border-none"
                required
              />
            </div>
            <div className="flex flex-col mb-4 bg-[#17191c] rounded-md border border-gray-700 p-2">
              <label className="ms-2 text-sm text-slate-100">
                Phone Number
              </label>
              {/* <span className="space-x-2"> */}
              <PhoneInput
                country={"us"}
                value={form.phone}
                onChange={handlePhoneChange}
                containerClass="flex items-center bg-[#17191c] rounded-md p-2"
                inputClass="bg-transparent text-white w-full focus:outline-none pl-12"
                buttonClass="bg-transparent border-none"
                dropdownClass="bg-[#17191c] text-white"
                inputStyle={{
                  width: "100%",
                  backgroundColor: "transparent",
                  color: "white",
                  border: "none",
                }}
                buttonStyle={{
                  backgroundColor: "transparent",
                  border: "none",
                  marginLeft: "0px",
                  paddingRight: "0px",
                }}
                dropdownStyle={{
                  backgroundColor: "#17191c",
                  color: "white",
                }}
              />

              {/* </span> */}
            </div>
            <div className="flex flex-col mb-4 bg-[#17191c] rounded-md border border-gray-700 p-2">
              <label className="ms-2 text-sm text-slate-100">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                value={form.password}
                onChange={handleChange}
                className="w-full p-1 ms-1 bg-transparent text-white focus:outline-none focus:border-none"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full p-3 bg-[#D2F159] text-black font-bold rounded mb-4"
            >
              Sign In
            </button>
            <button
              type="button"
              className="w-full p-3 bg-gray-800 text-white flex items-center justify-center gap-2 rounded mb-4"
            >
              <Image
                src={GOOGLE_ICON}
                alt="Google Icon"
                width={24}
                height={24}
              />
              Sign in with Google
            </button>
          </form>
          <p className="text-center">
            Do you have an account?{" "}
            <a href="#" className="text-[#D2F159]">
              Login
            </a>
          </p>
        </div>
        <div className="w-1/2  flex justify-center items-center p-8">
          <Image src={BACKGROUND_IMAGE} alt="Background" className="h-screen" />
        </div>
      </div>
    </div>
  );
};

export default Login;
