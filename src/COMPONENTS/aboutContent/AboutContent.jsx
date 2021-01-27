/**  @jsx jsx */
import { jsx } from "@emotion/react";
import { Link } from "react-router-dom";

import Container from "../../Layout/Container";
import Item from "../../Layout/Item";
import * as styles from "./AboutContent.styles";

const AboutContent = () => {
  return (
    <section className="about-page-content-component">
      <Container flexDirection="column">
        <Item align="center">
          <h1 css={styles.AboutPageHeader}>About This App </h1>
          <h3 css={styles.AboutPageSubHeader}>
            What I Learn by Building This App
          </h3>
        </Item>
        <Item>
          <Container>
            <p css={styles.AboutPageParagraph}>
              By Building Thiss App. I have learned React since 11 November 2020
              until 27 January 2021, it's been long time ago. I have learned
              step by step and got new experience by learning React like know
              more about Styling in React, React component, React Router, Hooks,
              Props , emotion css, Local Storage, CSS to JS, Theming and many
              more ...! The most important learning code is how to solving a
              problem without panic. always learning and take an action to be a
              great programmer.
            </p>
          </Container>
        </Item>
        <Item align="center">
          <Link to="">
            <span css={styles.backToHome}>Back To Home </span>
          </Link>
        </Item>
      </Container>
    </section>
  );
};

export default AboutContent;
