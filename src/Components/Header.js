import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import Complete from '../Pages/Complete/Complete';
const Header = () => {
  return (
    <div className='container mx-auto'>
      {/* <div class="navbar bg-base-100">
        <div class="flex-1">
          <a class="btn btn-ghost normal-case text-xl" href='/'>Task Manager</a>
        </div>
        <div class="flex-none ">
          <ul class="menu menu-horizontal p-0 gap-5">
            <li><NavLink to={'/complete'}>Complete</NavLink> </li>
            <li tabindex="0">

              <NavLink to={'/todo'}>ToDo</NavLink>


            </li>
            <li><NavLink to={'/calender'}>Calender</NavLink> </li>
          </ul>
        </div>
      </div> */}
      <div class="navbar bg-base-100">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li><NavLink to={'/complete'}>Complete</NavLink> </li>
              <li tabindex="0">

                <NavLink to={'/todo'}>ToDo</NavLink>


              </li>
              <li><NavLink to={'/calender'}>Calender</NavLink> </li>
            </ul>
          </div>

        </div>
        <Link class="btn btn-ghost normal-case text-xl" to={'/'}>Task Manager</Link>
        <div class="navbar-end hidden lg:flex ">
          <ul className='menu menu-horizontal p-0 flex gap-29'>
            <li><NavLink to={'/complete'}>Complete</NavLink> </li>
            <li tabindex="0">

              <NavLink to={'/todo'}>ToDo</NavLink>


            </li>
            <li><NavLink to={'/calender'}>Calender</NavLink> </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;