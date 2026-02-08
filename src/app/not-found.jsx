"use client"

import { useRouter } from "next/navigation"

export default function NotFoundPage() {

    const router = useRouter();

    const handleButton = () => {
        router.push("/")
    }

    return (
        <div>
            <h1>The Page you are looking for doesn't exist</h1>
            <button className="bg-red-700 text-white text-4xl rounded-lg"
                onClick={handleButton}>Go to Homepage</button>
        </div>
    )
}