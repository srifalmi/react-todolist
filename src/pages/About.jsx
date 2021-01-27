import React from "react";
import Paper from "../COMPONENTS/paper/Paper";
import Container from "../Layout/Container";
import { Link } from "react-router-dom";
import AboutContent from "../COMPONENTS/aboutContent/AboutContent";

const About = () => {
  return (
    <Paper>
      <Container
        flexDirection="column"
        justifyContent="space-between"
        height="100%"
      >
        <AboutContent />
      </Container>
    </Paper>
  );
};
export default About;
