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
        <main className = "bg-white h-screen overflow-scroll items-center justify-center flex">
          
          <div className = " p-8 font-extrabold bg-gradient-to-r from-purple-600 via-fuchsia-950 to-purple-600 border-2 w-140 h-130 items-center justify-center flex flex-col rounded-2xl shadow-2xl shadow-purple-950" >
            <header>
                <h1 className = "text-center font-bold text-3xl m-4">Week 9 Authorization - Riley Yonda</h1>
            </header>
              <div className="flex justify-center m-2">
                <Link style={{ backgroundColor: "green", color: "white", borderRadius: "8px", padding: "4px" , outline: "1px solid white"}} href="/week-9/shopping-list/">Go to Week 9 Page</Link>
              </div>
            {user ? (
                <section>
                    <div className = "flex flex-col items-center justify-center gap-4">
                        <p>Welcome, {user.displayName}</p>
                        <p>{user.email}</p>
                        <img src={user.photoURL} alt="User Profile" className="w-50 h-50 border-2 border-green-600 rounded-full" />
                    </div>
                    <div className="flex justify-center">
                        <button
                            type="button"
                            onClick={handleSignOut}
                            className="text-lg bg-purple-500 text-white rounded px-2 py-1 mt-4 hover:bg-purple-600 cursor-pointer border-1 border-white">
                            Sign Out
                        </button>
                    </div>
                </section>
            ) : (
                <section className="">
                    <button
                        type="button"
                        onClick={handleSignIn}
                        className="text-lg bg-purple-500 text-white rounded px-2 py-1 mt-4 hover:bg-purple-600 cursor-pointer border-1 border-white">
                        Sign In with GitHub
                    </button>
                </section >
            )}
          </div>
        </main >
    );
}
