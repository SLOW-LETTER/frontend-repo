import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import NavItems from "./navbar-items";

export default function NavBar() {
  const router = useRouter();
  return (
    <>
      <header className="navbar-container">
        <div className="navbar-logo-container">
          <Link href="/">
            <a>
              <Image
                src="/project-logo.svg"
                layout="fill"
                alt=""
              />
            </a>
          </Link>
        </div>

        {router.pathname === "/" ? null : <NavItems />}
      </header>
      <style jsx>
        {`
          .navbar-container {
            width: 100%;
            height: 3.5rem;
            background: rgba(255, 255, 255, 1);
            opacity: 1;
            position: absolute;
            top: 0px;
            left: 0px;
            box-shadow: 0px 4px 100px rgba(0, 0, 0, 0.25);
            z-index: 99999;
          }
          .navbar-logo-container {
            width: 2.5rem;
            height: 2.5rem;
            opacity: 1;
            position: absolute;
            top: 0.52rem;
            left: 1.5rem;
          }
        `}
      </style>
    </>
  );
}