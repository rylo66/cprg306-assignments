import Link from "next/link";
import StudentInfo from "./week-2/student-info";
import Page from "./week-2/page";

export default function Home(){

  return(
    <main>
      <h1>CPRG306 Assignments</h1>
      <ul>
        <li><Link href="./week-2">Week 2 Assignment</Link></li>
      </ul>
    </main>
  )
}