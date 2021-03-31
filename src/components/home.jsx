import React from "react";
import Grid from "./grid";
import Skill from "./skill";
import Box from "./Box/Box";
import Text from "./TextAnimation/TextA";
export default function Home() {
  return (
    <div>
      <main className="page lanidng-page">
        <Box />
        <Grid />
        <Skill />
      </main>
    </div>
  );
}
