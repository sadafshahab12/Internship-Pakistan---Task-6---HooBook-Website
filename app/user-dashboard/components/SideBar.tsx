import Link from 'next/link'
import React from 'react'

const SideBar = () => {
  return (
    <div>
         <div className="sidenav bg-green-300 h-50 row-span-2">
          <nav>
            <Link href={"/curr-book"}>Current Booking</Link>
            <Link href={"/past-book"}>Past Booking</Link>
            <Link href={"/profile"}>Profile Settings</Link>
          </nav>
         </div>
    </div>
  )
}

export default SideBar
