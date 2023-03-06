import { Link } from "react-scroll";
import Exercise2 from "./Exercise2";
import Exercise3 from "./Exercise3/Exercise3";
import Exercise4 from "./Exercise4";
import Exercise5 from "./Exercise5";
import Exercise6 from "./exercise6/Exercise6";
import Exercise7 from "./Exercise7";
import Exercise8 from "./Exercise8";
import Exercise9 from "./exercise9/Exercise9";
import Exercise1 from "./Exercsise1";
import './index.css'

function App() {
  return (
    <>
      <section className="px-20 relative flex flex-col gap-10 mb-44 w-full">
        <header className="fixed py-5 top-0 z-50 bg-white w-full">
          <nav>
            <ul className="flex gap-10">
              <Link activeClass="active" smooth spy to="ex1">
                Exercise1
              </Link>
              <Link activeClass="active" smooth spy to="ex2">
                Exercise2
              </Link>
              <Link activeClass="active" smooth spy to="ex3">
                Exercise3
              </Link>
              <Link activeClass="active" smooth spy to="ex4">
                Exercise4
              </Link>
              <Link activeClass="active" smooth spy to="ex5">
                Exercise5
              </Link>
              <Link activeClass="active" smooth spy to="ex6">
                Exercise6
              </Link>
              <Link activeClass="active" smooth spy to="ex7">
                Exercise7
              </Link>
              <Link activeClass="active" smooth spy to="ex8">
                Exercise8
              </Link>
              <Link activeClass="active" smooth spy to="ex9">
                Exercise9
              </Link>
            </ul>
          </nav>
        </header>

        <section className="flex flex-col ">
          <section id="ex1" className="h-[40vh] mt-44 py-44 border border-b px-10 bg-yellow-500 text-white font-bold text-xl grid place-content-center">
            <h1>Exercise 1:</h1>
            <Exercise1 />
          </section>
          <section id="ex2" className="py-44 border border-b px-10">
            <Exercise2 />
          </section>
          <section id="ex3" className="py-44 border border-b px-10">
            <Exercise3 />
          </section>
          <section id="ex4" className="py-44 border border-b px-10">
            <Exercise4 />
          </section>
          <section id="ex5" className="py-44 border border-b px-10">
            <Exercise5 />
          </section>
          <section id="ex6" className="py-44 border border-b px-10">
            <Exercise6 />
          </section>
          <section id="ex7" className="py-44 border border-b px-10">
            <Exercise7 />
          </section>
          <section id="ex8" className="py-44 border border-b px-10 bg-green-400">
            <Exercise8 />
          </section>
          <section id="ex9" className="py-44 border border-b px-10">
            <Exercise9 />
          </section>
        </section>
      </section>
    </>

  );
}
export default App;
