import { Link } from "react-router-dom";

function Home() {
  const navLinks = [ 
    {
      navItem: "Exercsise1",
      path: "exercise1"
    },
    {
      navItem: "Exercise2",
      path: "exercise2"
    },

    {
      navItem: "Exercise3",
      path: "exercise3"
    },
    {
      navItem: "Exercise4",
      path: "exercise4"
    },
    {
      navItem: "Exercise5",
      path: "exercise5"
    },
    {
      navItem: "Exercise6",
      path: "exercise6"
    },
    {
      navItem: "Exercise7",
      path: "exercise7"
    },
    {
      navItem: "Exercise8",
      path: "exercise8"
    },
    {
      navItem: "Exercise9",
      path: "exercise9"
    },
    
  ]
  return (
      <nav className="px-20 py-4">
        <ul className="flex justify-between">
        {navLinks.map((navLink, index) => {
          return(
            <li key={index}><Link to={navLink.path}>{navLink.navItem}</Link></li>
          )
        })}
        </ul>

      </nav>
  );
}

export default Home;
