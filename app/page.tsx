"use client";

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import WorkExperience from "@/components/WorkExperience";
import withTransition from "@/components/withTransition";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  
  useEffect(() => {
    // here you can add your aos options
    AOS.init({
      offset: 200,
    });
  }, []);
  
  return (
    <div className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero  />
        <Grid />
        <RecentProjects />
        <Experience />
        {/* <Clients /> */}
        {/* <Approach /> */}
        <Footer />
      </div>
    </div>
  );
};

export default Home;
