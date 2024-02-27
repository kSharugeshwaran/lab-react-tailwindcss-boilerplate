import React from "react";

function MainSection() {
    return (
      <main className="py-5">
        <section className="px-[9.2rem]">
          <button className="bg-blue-500 mb-5 rounded-md p-2 text-white font-bold">
            Button One
          </button>
          <div
            className="p-2 mb-4 lg:w-auto h-full border-2 tracking-wide border-red-500 text-sm text-red-500 rounded-md bg-red-100"
            role="alert"
          >
            <span className="font-bold mr-2">Alert!</span>{" "}
            <span className="font-medium">This is </span>
            <span className="font-semibold">awesome!</span>
          </div>
        </section>
        <section className="py-5 px-3 w-96 m-auto">
          <div className="shadow-lg flex space-x-5 justify-center lg:w-auto p-3 rounded-sm">
            <div className="flex items-center">
              <img
                className="w-32"
                src="https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/Kalvium-Logo.png"
                alt=""
              />
            </div>
            <div className="">
              <h1 className="text-2xl font-semibold">Kalvium Store</h1>
              <p>You have new course!</p>
            </div>
          </div>
        </section>
      </main>
    );
  }

  export default MainSection