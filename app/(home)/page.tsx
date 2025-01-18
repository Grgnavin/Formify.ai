"use client";
import { useSession } from 'next-auth/react';
import React from 'react'

const HomePage = () => {
  const { data: session } = useSession();

  return (
    <div>
        {
          !session ? (
            <h3>You are not loggedIn</h3>
          ) : (
            <h1>Welcome! Mr {session.user.username}</h1>
          )
        }
    </div>
  )
}

export default HomePage;