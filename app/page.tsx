import Image from "next/image";

import { base_dir } from "./constants";

export default function Home() {
  return (
    <main>
      <h1>Ra&#xFA;l Montejo</h1>
      <h2>Web Developer</h2>
      <code>
        &lt;<span className="tag">portfolio</span>{" "}
        <span className="attribute">data-upload-time</span>="
        <span className="value">very soon</span>"&gt;
      </code>
    </main>
  );
}
