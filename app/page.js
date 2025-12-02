import Link from "next/link";
import StudentInfo from "./week-2/student-info";
import Page from "./week-2/page";
import ItemList from "./week-3/item-list";
import Item from "./week-3/item";
import {styles} from "react"

export default function Home(){

  let pageStyles ="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-red-50 via-pink-400 to-blue-900 text-center";
  let buttonStyles= "bg-gradient-to-r from-red-900 via-purple-400 to-red-900 p-2 m-1 font-bold hover:from-red-300 hover:via-red-600 hover:to-red-950 rounded-3xl p-5 m-2 opacity-60 outline-2 drop-shadow-lg";
  let titleStyle= "font-bold text-4xl mb-8 p-4 drop-shadow-lg";
  let rowStyles = "flex flex-row justify-center";

  const weeks = [
    { label: "Week 2 Assignment", href: "./week-2" },
    { label: "Week 3 Assignment", href: "./week-3" },
    { label: "Week 4 Assignment", href: "./week-4" },
    { label: "Week 5 Assignment", href: "./week-5" },
    { label: "Week 6 Assignment", href: "./week-6" },
    { label: "Week 7 Assignment", href: "./week-7" },
    { label: "Week 8 Assignment", href: "./week-8" },
    { label: "Week 9 Assignment", href: "./week-9" },
    { label: "Week 10 Assignment", href: "./week-10" },
    { label: "Final Project", href: "./final-project" },
  ];

  return(
    <main className={pageStyles}>
      <h1 className={titleStyle}>CPRG306 Assignments: Riley Yonda</h1>
      <div className={rowStyles}>
        {weeks.map((week) => (
          <Link key={week.href} href={week.href} className={buttonStyles}>
            {week.label}
          </Link>
        ))}
      </div>
    </main>
  )
}