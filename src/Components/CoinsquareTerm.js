import React from "react";
import styled from "styled-components";

import CoinsquareC from "../assets/Terms/Coinsquare/coinsquareC.jpg";
import CoinsquarePic from "../assets/Terms/Coinsquare/coinsquarePic.jpg";

const StyledWrapper = styled.div`
  display: ${props => props.display || "flex"};
  flex-direction: ${props => props.flexDirection || "row"};
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};
  padding: ${props => props.padding};
  margin: ${props => props.margin};

  @media (max-width: 761px) {
    flex-direction: ${props => props.mobileFlexDirection || "column"};
  }
`;

const StyledTableOfContents = styled.div`
  width: 20%;
  min-height: 40%;
  border: solid 2px white;
  border-radius: 5px;
  margin: 20px 10px 20px 20px;
  padding: 38px 25px 25px 25px;
  z-index: 1;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.2);
  position: fixed;

  @media (max-width: 761px) {
    position: relative;
    width: auto;
    margin: 20px;
  }
`;

const StyledArticleWrapper = styled.div`
  width: 70%;
  border: solid 2px white;
  border-radius: 5px;
  margin: 20px 20px 20px 10px;
  margin-left: 28%;
  padding: 25px;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.2);

  @media (max-width: 761px) {
    width: auto;
    margin: 20px;
    margin-left: none;
  }
`;

const StyledList = styled.ul`
  margin: 20px 5px;
  padding-left: 15px;
  list-style: circle outside;
  word-wrap: break-word;
`;

const StyledLink = styled.a`
  color: ${props => props.color || "#b7b7b7"} !important;
  font-size: ${props => props.fontSize || "1em"} !important;
  font-family: ${props => props.fontFamily || "opensans-bold"} !important;
  line-height: 25px;

  &:hover {
    color: ${props => props.hoverColor || "#00a5ff"} !important;
  }
`;

const StyledText = styled.span`
  color: ${props => props.color || "#b7b7b7"};
  font-size: ${props => props.fontSize || "1em"};
  font-family: ${props => props.fontFamily};
  line-height: ${props => props.lineHeight || "25px"};
  z-index: 100;
  padding: ${props => props.padding};
  margin: ${props => props.margin || "0 0 20px 0"};

  @media (max-width: 835px) {
    font-size: 15px;
  }
`;

const StyledImage = styled.img`
  width: ${props => props.width};
  height: ${props => props.height};
  border-radius: ${props => props.borderRadius};
  margin: ${props => props.margin};
`;

const StyledLine = styled.hr`
  margin: ${props => props.margin || "10px 0px"};
  border: solid #e3e3e3;
  border-width: 1px 0 0;
  clear: both;
  height: 0;
`;

const CoinsquareTerm = () => {
  return (
    <StyledWrapper>
      <StyledTableOfContents>
        <StyledText
          color="#00a5ff"
          fontSize="20px"
          fontFamily={"opensans-bold"}
          margin="16px 0 20px 0"
        >
          Table of Contents
        </StyledText>
        <StyledLine margin="17px 0px" />
        <StyledList>
          <li>
            <StyledLink href="#Intro">Intro</StyledLink>
          </li>
          <li>
            <StyledLink href="#Info">Employer Info</StyledLink>
          </li>
          <li>
            <StyledLink href="#Goals">Goals</StyledLink>
          </li>
          <li>
            <StyledLink href="#Description">Job Description</StyledLink>
          </li>
          <li>
            <StyledLink href="#Relation">Academic Relation</StyledLink>
          </li>
          <li>
            <StyledLink href="#Featured">Featured Aspect</StyledLink>
          </li>
          <li>
            <StyledLink href="#Extras">Extras</StyledLink>
          </li>
          <li>
            <StyledLink href="#Ack">Acknowledgments</StyledLink>
          </li>
        </StyledList>
      </StyledTableOfContents>
      <StyledArticleWrapper>
        <StyledWrapper mobileFlexDirection="row">
          <StyledText
            color="#00a5ff"
            fontSize="20px"
            fontFamily="opensans-bold"
            margin="auto 0"
          >
            Coinsquare - Canada's Cryptocurrency Exchange
          </StyledText>
          <StyledImage
            src={CoinsquareC}
            height="50px"
            width="50px"
            borderRadius="30px"
            margin="0 0 0 15px"
          />
        </StyledWrapper>
        <StyledLine margin="10px 0px" />
        <StyledText lineHeight="50px" fontFamily="opensans-bold">
          Student Web Developer
          <br />
        </StyledText>
        <StyledText lineHeight="50px" fontFamily="opensans-bold">
          Toronto, Ontario, Canada
          <br />
        </StyledText>
        <StyledText lineHeight="50px" fontFamily="opensans-bold">
          May 2018 - December 2018
          <br />
        </StyledText>
        <StyledImage src={CoinsquarePic} />
        <hr />
        <StyledText>
          <span id="Intro">
            <span style={{ fontFamily: "opensans-bold" }}>Introduction: </span>
            Welcome to my first work term report! This has been my very first
            work term placement, and it has been an absolutely amazing
            experience. Throughout this report I will talk about the company I
            had my placement with, some goals I set for myself, and what the
            overall experience was like. I hope you enjoy, and for any other
            information feel free to contact me!
            <br />
            <br />
          </span>

          <span id="Info">
            <span style={{ fontFamily: "opensans-bold" }}>
              Employer Information:{" "}
            </span>
            I was lucky enough to secure my first 8 month co-op placement at a
            Toronto based company called Coinsquare. Coinsquare is aiming to be
            a 21st century financial institution by managing, trading, and
            marketing crypto assets. In other words, they are a cryptocurrency
            trading platform! This was super cool as I am interested in
            cryptocurrencies and blockchain technology, so this was a perfect
            fit. The company was started in 2014 by Virgil Rostand who is now
            CTO after joining forces with Cole Diamond(CEO). Coinsquare prides
            itself on being the most trusted Canadian cryptocurrency exchange
            through support, security, and service as they have never lost a
            coin and are a financially recognized and registered MSB. This is
            realy reflected in the company values, and it was cool to see people
            prideful and caring about their work. I was a web developer on the
            Solutions/Engineering team, so I was able to interact and work with
            people from all over the company, which was an awesome experience.
            At the time of writing Coinsquare is about 140 employees strong, and
            I felt honoured to be one of them!
            <br />
            <br />
          </span>

          <span id="Goals">
            <span style={{ fontFamily: "opensans-bold" }}>Goals: </span>
            Before beginning this placement I had created two sets of goals for
            myself. The first set of goals were for the first term, and the
            second set was for the second term. I crafted these goals with no
            prior knowledge of what exactly I would be doing, or how the
            development process flowed, but I was motivated and committed to
            learn, grow and work my hardest to meet these goals! The first set
            of goals I set for myself were:
            <ol>
              <li>
                Become familiar with advanced Javascript (ES6, asynchronous
                actions and functional programming)
              </li>
              <li>
                Research React, Redux and Coinsquare's codebase. Familiarize
                myself with conventions, best practices and gitflow
              </li>
              <li>
                Write, Commit, Push and Merge my first peice of code into
                Coinsquare's codebase
              </li>
            </ol>
            After some late nights, lots of caffiene, and support from my team,
            I can say pridefully that I managed to accomplish all three of these
            goals within the first two months of my placement! I chose these
            goals specifically because I knew they would directly benefit me in
            my day to day work as a developer, and they would help me hit the
            gound running at full force the quicker I managed to complete them.
            The skills that these goals reflect are also super in demand and
            useful to have even after this placement. Learning Javascript and
            React were some web development skills that I really wanted to
            learn, and practicing them directly in a real world scenario were
            imparative to my success. The first two goals were accomplished with
            the help of multiple resources including udemy courses that were
            offered to me, side project development (including this website!),
            and the always open for questions mentality my co-workers had. The
            third goal was then completed shortly after the first two, as I saw
            the previous goals as prequisites. Once I was confident in my
            abilities, I was given a few small tasks to complete and eventually
            got to contribute to the product that it is today!
            <br />
            After completing my first set of goals, I was gaining confidence,
            and looking to take on more challenging work! I wanted to establish
            and lay out my next milestones in order to start working on them as
            soon as possible. With that mentality and motivation, I crafted my
            second set of goals:
            <ol>
              <li>
                Be a fully functioning team member (Take on real feature work,
                become self sufficient, and take accountability)
              </li>
              <li>
                Explore Backend Work (Ask to participate in backend tasks, and
                start to explore the platform repositories)
              </li>
              <li>
                Contribute to the Development Process (Find something that I can
                either create or improve in the development lifecycle at
                Coinsquare)
              </li>
            </ol>
            The first item on the list would eventually come with more time and
            experience. As I progressed as a developer, I was given more
            in-depth and challending work that really helped me to learn and
            grow in my role. Just before the halfway mark of my placement I was
            really beginning to feel like a full time employee, and not just
            doing "intern" work. I was doing real work, that also came with real
            responsibility! This was great as it gave me a glimpse of what
            software development looked like in the industry, and I was
            participating in everything.
            <br />
            Also right around the halfway point of my placement, I was eager to
            learn more so I inquired about possibly taking on some backend work.
            I wanted to round out my web development skills and become more
            "Full Stack". I started researching our backend code, and the
            technologies we used (Node, Express, MySQL, Postgres, Knex) and with
            the permission of my leads, I was able to start tackling some
            backend tickets. This was not only amazing experience, but it also
            resolved some blockers I would have when developing on the frontend.
            I no longer needed to wait on or ping the platform team for
            something we needed, I could go and do it myself!
            <br />
            Lastly, the final goal was something I was constantly observing to
            see if there was anything I could improve. Turns out, this was
            something simpler than I had imagined. Through the use of
            Atlassian's Confluence, I was able to craft and share documentation
            on a few pain points we had throughout the development/onboarding
            process. I realized the need for good documentation when I was going
            through setting up my backend environment. The process was
            constantly changing, and I always had to keep bugging a more senior
            backend developer for help configuring my environment. Once I was
            all set up, I refined some of the backend documentation that was
            already there for setting up an environment, and also created new
            pages on setting up your backend environment from a frontend
            developer's perspective. As this was the case for me, I created the
            docs in hope they would be useful for other new frontend developers
            later down the line!
            <br />
            Looking back on the goals I set for myself, I feel like they were
            appropriate and challenged me in various ways. I believe setting
            personal goals and striving to meet them not only help in personal
            success, but makes whatever it is you are doing more worthwhile!
            CHECK
            <br />
            <br />
          </span>

          <span id="Description">
            <span style={{ fontFamily: "opensans-bold" }}>Description: </span>
            This is the desc section
            <br />
            <br />
          </span>

          <span id="Relation">
            <span style={{ fontFamily: "opensans-bold" }}>Relation: </span>
            This is the desc section This spot of my site is where I record my
            experiences and learnings from my university co-op placements. I
            will have 3 work terms in the duration of my degree, two 8 month
            placements and one 4 month placement. So far I have completed my
            first 8 month placement and it has been awesome! To view each co-op
            work term report, select the company from the dropdown hamburger
            menu in the top left of the nav bar! As a viewer you should be able
            to get a good understanding of each placement through my
            experiences, as well as identify my goals and how I accomplished
            them. This spot of my site is where I record my experiences and
            learnings from my university co-op placements. I will have 3 work
            terms in the duration of my degree, two 8 month placements and one 4
            month placement. So far I have completed my first 8 month placement
            and it has been awesome! To view each co-op work term report, select
            the company from the dropdown hamburger menu in the top left of the
            nav bar! As a viewer you should be able to get a good understanding
            of each placement through my experiences, as well as identify my
            goals and how I accomplished them.
            <br />
            <br />
          </span>

          <span id="Featured">
            <span style={{ fontFamily: "opensans-bold" }}>Featured: </span>
            This is the desc section This spot of my site is where I record my
            experiences and learnings from my university co-op placements. I
            will have 3 work terms in the duration of my degree, two 8 month
            placements and one 4 month placement. So far I have completed my
            first 8 month placement and it has been awesome! To view each co-op
            work term report, select the company from the dropdown hamburger
            menu in the top left of the nav bar! As a viewer you should be able
            to get a good understanding of each placement through my
            experiences, as well as identify my goals and how I accomplished
            them. This spot of my site is where I record my experiences and
            learnings from my university co-op placements. I will have 3 work
            terms in the duration of my degree, two 8 month placements and one 4
            month placement. So far I have completed my first 8 month placement
            and it has been awesome! To view each co-op work term report, select
            the company from the dropdown hamburger menu in the top left of the
            nav bar! As a viewer you should be able to get a good understanding
            of each placement through my experiences, as well as identify my
            goals and how I accomplished them.
            <br />
            <br />
          </span>

          <span id="Extras">
            <span style={{ fontFamily: "opensans-bold" }}>Extras: </span>
            This is the extras section This spot of my site is where I record my
            experiences and learnings from my university co-op placements. I
            will have 3 work terms in the duration of my degree, two 8 month
            placements and one 4 month placement. So far I have completed my
            first 8 month placement and it has been awesome! To view each co-op
            work term report, select the company from the dropdown hamburger
            menu in the top left of the nav bar! As a viewer you should be able
            to get a good understanding of each placement through my
            experiences, as well as identify my goals and how I accomplished
            them. This spot of my site is where I record my experiences and
            learnings from my university co-op placements. I will have 3 work
            terms in the duration of my degree, two 8 month placements and one 4
            month placement. So far I have completed my first 8 month placement
            and it has been awesome! To view each co-op work term report, select
            the company from the dropdown hamburger menu in the top left of the
            nav bar! As a viewer you should be able to get a good understanding
            of each placement through my experiences, as well as identify my
            goals and how I accomplished them.
            <br />
            <br />
          </span>

          <span id="Ack">
            <span style={{ fontFamily: "opensans-bold" }}>
              Acknowledgments:{" "}
            </span>
            This is the ack section
            <br />
            <br />
          </span>
        </StyledText>
      </StyledArticleWrapper>
    </StyledWrapper>
  );
};

export default CoinsquareTerm;