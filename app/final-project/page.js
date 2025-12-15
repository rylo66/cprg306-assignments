"use client";

import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";

export default function SignInPage() {

    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    async function handleSignIn() {
        try {
            await gitHubSignIn();
        } catch (error) {
            console.log(error);
        }
    }

    async function handleSignOut() {
        try {
            await firebaseSignOut();
        } catch (error) {
            console.log(error);
        }
    }

    console.log(user);

    return (
    <main
        className="min-h-screen flex flex-col items-center justify-center gap-8 bg-cover bg-center"
        style={{
        backgroundImage:
            "url('https://acmg.ca/app/uploads/2025/10/Hiking-4.jpg')",
        }}>        
    <h1 className="text-4xl font-mono font-extrabold mb-2 text-white bg-black/10 px-2 py-1 rounded-2xl backdrop-blur ">Welcome to BirdsEye Health and Fitness Tracker</h1>

          <div>

    <section className="flex flex-col items-center justify-center gap-5 rounded-2xl border border-white/30 bg-black/10 backdrop-blur-md p-8 shadow-xl font-mono font-bold">
    {user ? (
        <>
        <div className="flex flex-col items-center justify-center gap-3 text-center">
            <p className="text-2xl font-semibold ">
            Welcome, {user.displayName}
            </p>
            <div className="flex flex-row items-center justify-center gap-4">
            <img
            src={user.photoURL}
            alt="User Profile"
            className="w-14 h-14 border-2  rounded-full"
            />
            <p className="break-all">{user.email}</p>
            </div>
        </div>

        <Link
            href="/final-project/main-pages/"
            className="rounded-lg px-4 py-2 border-y border-white/70 hover:bg-white/30 transition"
        >
            Get Started with BirdsEye Health and Fitness Tracker
        </Link>

        <button
            type="button"
            onClick={handleSignOut}
            className="text-lg rounded px-4 py-2 hover:bg-white/30 transition cursor-pointer"
        >
            Sign Out
        </button>
        </>
    ) : (
        <>
        <p className="text-xl text-center">
            Sign in to continue
        </p>

        <button
            type="button"
            onClick={handleSignIn}
            className="text-lg rounded px-4 py-2 hover:bg-white/30 transition cursor-pointer"
        >
            Sign In!
        </button>
        </>
    )}
    </section>

          </div>
        </main >
    );
}
