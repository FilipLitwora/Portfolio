import Link from "next/link";
import { useEffect } from "react";
import { animated, useSpring } from "react-spring";
import { useScroll } from "react-use-gesture";

const Navbar = () => {
  const [{ y }, set] = useSpring(() => ({ y: 0 }));

  const bind = useScroll(
    ({ direction, velocity }) => {
      if (velocity > 0) {
        const down = direction[1] > 0;
        set({
          y: down ? -160 : 0,
        });
      }
    },
    { domTarget: window }
  );

  useEffect(bind, [bind]);

  return (
    <animated.div
      style={{
        y,
      }}
      className="fixed left-0 right-0 w-4/5 mx-auto mt-5 text-text-primary"
    >
      <nav
        className="flex justify-between w-full min-h-full px-5 text-2xl bg-color-1"
        style={{ lineHeight: "100px" }}
      >
        <h1 className="text-3xl font-bold ">Litwora</h1>
        <ul className="flex justify-between mx-5 w-1/4">
          <li>
            <Link href="#">
              <a>Link 1</a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a>Link 2</a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a>Link 3</a>
            </Link>
          </li>
        </ul>
      </nav>
    </animated.div>
  );
};

export default Navbar;
