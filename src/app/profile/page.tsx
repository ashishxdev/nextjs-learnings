"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

function Profile() {
  const router = useRouter();
  // console.log(router)
  const pathName = usePathname();
  // console.log(pathName)
  const searchParams = useSearchParams();
  console.log(
    searchParams.get("age"),
    // searchParams.has("age"),
    searchParams.getAll('name'),
    "searchParams",
  );
  // http://192.168.1.6:3000/profile?name=ashish&name=kpjm&age=98

  const handleNavigate = () => {
    router.push("/products");
  };

  return (
    <div>
      <h1>Profile Component</h1>
      <button onClick={handleNavigate}>Navigate to Home Page</button>
    </div>
  );
}

export default Profile;
