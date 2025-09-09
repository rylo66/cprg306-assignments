

import Link from "next/link";

export default function StudentInfo(){

  return(
    <main>
      <h1>Student Information</h1>
      <ul>
        <li><Link className="hover:bg-cyan-600 " href="https://github.com/rylo66/cprg306-assignments">Riley Yonda - Github Repo - rylo66</Link></li>
      </ul>
    </main>
  )
}