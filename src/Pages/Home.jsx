import { useState, useEffect } from "react";
import CardReco from "../components/CardRecomended/CardReco";
import ContainerCats from "../components/ContainerCategories/ContainerCats";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { Box } from "@mui/material";

function Home() {
  return (
    <main style={{ backgroundColor: "#262626" }}>
      <Header />
      <CardReco />
      <ContainerCats />
      <Footer />
    </main>
  );
}

export default Home;