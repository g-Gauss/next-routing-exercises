import React from "react";

import Link from "next/link";

const COLORS = ["red", "slateblue", "lime", "teal"];

function ScreenSaverIndexPage() {
  return (
    <main>
      <h1>Choose your color:</h1>
      <ul>
        {COLORS.map((color) => (
          <li key={color}>
            <Link href={`01-screensaver/${color}`}>{color}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default ScreenSaverIndexPage;
