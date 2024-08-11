import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";
import "./app.css";
import Hero from "./components/hero/hero";




function Home() {
  return (
<div>

<Hero /> 
<div className="bg-black text-white-500 mx-auto">
  <img src="Ducati-Storia.jpg" alt="motro" />
  <h1 className="text-center text-4xl">
    Ducati History
  </h1>
</div>
<div className="flex bg-black justify-center size-auto">
  <iframe src="https://www.youtube.com/embed/5kQkypFmBs0?rel=0"/>
  <div className="text-2xl text-center">    
  A journey through time: the main characters and models that have made history
From humble beginnings back in 1926 to glorious victory in championships around the world, Ducati has shaped its identity with its innovations and winning spirit.
Borgo Panigale: a museum, a factory, a tale to tell.
Whatever your age and wherever you come from, and regardless of whether you are a fan of the brand or a motorsport enthusiast, you can delve into our past at the Ducati Museum and experience our present in the factory, seeing just how our motorcycles are born.
  </div>
</div>
<div className=" bg-white">
    <Marquee pauseOnHover direction="right" speed={100}>
      <img src="lenovo.svg"/>
      <img src="akra.svg"/>
      <img src="audi.svg"/>
      <img src="flex.svg"/>
      <img src="monster.svg"/>
      <img src="net.svg"/>
      <img src="next.svg"/>
      <img src="shell.svg"/>
      <img src="tim.svg"/>
      <img src="uni.svg"/>
    </Marquee>
  </div>
</div>

  );
}

export default Home;
