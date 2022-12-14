import React from "react";
import "./tailwind.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Browse from "./components/Browse";
import Arrived from "./components/Arrived";
import Clients from "./components/Clients";
import AsideMenu from "./components/AsideMenu";
import Footer from "./components/Footer";

function App() {
  const [items, setItems] = React.useState([]);

  React.useEffect(function () {
    (async function () {
      const response = await fetch(
        "https://prod-qore-app.qorebase.io/8ySrll0jkMkSJVk/allItems/rows?limit=7&offset=0&$order=asc",
        {
          headers: {
            "Content-Type": "application/json",
            accept: "application/json",
            "x-api-key": "e12dae64-e563-4def-b98d-3779f81e31ee", //enter the api key in the env file, for security reason { change to "x-api-key": process.env.REACT_APP_API_KEY, for using env file}
          },
        }
      );
      const { nodes } = await response.json();
      setItems(nodes);
    })();
  }, []);
  return (
    <>
      <Header />
      <Hero />
      <Browse />
      <Arrived items={items} />
      <Clients />
      <AsideMenu />
      <Footer />
    </>
  );
}

export default App;
