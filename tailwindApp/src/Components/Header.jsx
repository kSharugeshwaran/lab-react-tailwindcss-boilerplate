import React from 'react';

// Header component
function Header() {
  return (
    <header>
      <nav className="bg-red-500 py-5 px-5 flex items-center space-x-4 justify-between">
        <div className="flex justify-evenly space-x-10 items-center">
          <div className="logo">
            <h1 className="text-white text-2xl font-bold lg:3xl">Kalvium</h1>
          </div>
          <div>
            <ul className="text-white flex space-x-3 justify-between">
              <li>
                <a href="">About Us</a>
              </li>
              <li>
                <a href="">Contacts</a>
              </li>
              <li>
                <a href="">Courses</a>
              </li>
            </ul>
          </div>
        </div>

        <button className="py-1 bg-transparent px-4 border-white border-[1px] rounded-md text-white">
          Login
        </button>
      </nav>
    </header>
  );
}

export default Header