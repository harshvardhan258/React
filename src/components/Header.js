import React from "react";
import Link from "./Link";

export default function Header() {
  return (
    <div className="ui secondary pointing menu">
      <Link href="/" className="item">
        Accordian
      </Link>
      <Link href="/list" className="item">
        Search
      </Link>
      <Link href="/dropdown" className="item">
        DropDown
      </Link>
      <Link href="/translate" className="item">
        Translate
      </Link>
    </div>
  );
}
