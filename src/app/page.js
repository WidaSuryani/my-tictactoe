import Image from "next/image";
import styles from "./page.module.css";
import Square from "./component/square";

export default function Home() {
  return (
    <>
      <div className="columns-3">
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}
