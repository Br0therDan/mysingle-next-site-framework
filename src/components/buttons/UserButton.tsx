import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { CiLogout, CiUser } from "react-icons/ci";
// import { useAuth } from '@/contexts/AuthContext';
import Link from 'next/link';

export default function UserButton() {
  const [isOpen, setIsOpen] = useState(false);
  // const { logout } = useAuth();
  const user = {
    full_name: "John Doe",
    email: "john.doe@example.com",
    avatar_url:
      "http://k.kakaocdn.net/dn/bgzKVM/btsEf5Omu9e/eRatkcF6KkuQq0h9xTAXD1/img_640x640.jpg",
  };

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // const handleLogout = () => {
  //   logout()
  // };

  return (
    <div className="relative">
      {user && (
        <>
          <Avatar onClick={handleToggleDropdown} className="cursor-pointer h-7 w-7">
            <AvatarImage src={user.avatar_url} alt={user.full_name} />
            <AvatarFallback>{user.full_name[0]}</AvatarFallback>
          </Avatar>
          {isOpen && (
            <div className="absolute right-0 p-3 mt-2 w-60 space-y-2 bg-white border rounded-md shadow-lg z-20">
              <div className=" flex px-4 py-2 gap-3 text-sm text-gray-700">
                <div>
                  <Avatar
                    onClick={handleToggleDropdown}
                    className="cursor-pointer h-9 w-9"
                  >
                    <AvatarImage src={user.avatar_url} alt={user.full_name} />
                    <AvatarFallback>{user.full_name[0]}</AvatarFallback>
                  </Avatar>
                </div>
                <div>
                  <h1 className="text-lg font-semibold">{user.full_name}</h1>
                  <h1 className="block text-xs text-gray-500">{user.email}</h1>
                </div>
              </div>
              <div className="border-t"></div>
              <ul>
                <li className="flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"> 
                  <Link href="/dashboard/profile" className='flex'>
                    <CiUser className="h-5 w-5 mr-2" />
                    Profile
                  </Link>
                </li>
                <li
                  className="flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                  // onClick={handleLogout}
                >
                  <CiLogout className="h-5 w-5 mr-2" />
                  Logout
                </li>
              </ul>
            </div>
          )}
        </>
      )}
    </div>
  );
}
