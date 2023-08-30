"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

import Profile from "@components/Profile";


const UserProfile = ({ params }) => {

  const [posts, setPosts] = useState([]);
  const username = useSearchParams().get("name");

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${params.id}/posts`);
      const data = await response.json();

      setPosts(data);
    };

    fetchPosts();
  }, []);

  return (

    <Profile
      name="User"
      desc={`Welcome to ${username}'s profile page. You can find all of their posts here.`}
      data={posts}
    />
  );
};

export default UserProfile;