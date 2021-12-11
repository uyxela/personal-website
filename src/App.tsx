import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { getTheme, storeTheme } from "./functions";
import { lightTheme, darkTheme, Theme } from "./theme";
import { IconContext } from "react-icons";
import {
  SiReact,
  SiNodedotjs,
  SiTypescript,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiAmazonaws,
  SiCplusplus,
  SiPython,
  SiGit,
  SiGraphql,
  SiSwift,
  SiGo,
  SiRust,
  SiGithub,
  SiLinkedin,
  SiMedium,
  SiTwitter
} from "react-icons/si";

const AppContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }: { theme: Theme }) => theme.background};
  color: ${({ theme }: { theme: Theme }) => theme.primary};
  transition: 1s;
`;

const ContentContainer = styled.div`
  width: 60%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  margin-top: 15vh;
  padding-bottom: 15vh;
`;

const Body = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const Wave = styled.p`
  margin: 0 40px 0 0;
  font-size: 4rem;
  cursor: pointer;
  user-select: none;
`;

const Heading = styled.h1`
  margin: 0;
  font-size: 3rem;
  font-weight: 400;
`;

const Divider = styled.div`
  width: 35%;
  min-width: 250px;
  height: 4px;
  background-color: ${({ theme }: { theme: Theme }) => theme.primary};
  margin: 40px 0 40px 0;
  transition: 1.5s;
`;

const BodyText = styled.p`
  margin: 0;
  font-size: 2rem;
  font-weight: 300;
`;

const IconGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  overflow: auto;
  ::-webkit-scrollbar {
    background: transparent;
    height: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }: { theme: Theme }) => theme.primary};
    border-radius: 10px;
  }
`;

const ItemGroup = styled.ul`
  margin: 20px 0 0 0;
`;

const Item = styled.li`
  margin-bottom: 20px;
`;

const ItemTitle = styled.a`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }: { theme: Theme }) => theme.primary};
  text-decoration: none;
  margin: 0;
`;

const ItemText = styled.p`
  font-size: 1.5rem;
  font-weight: 300;
  color: ${({ theme }: { theme: Theme }) => theme.primary};
  margin: 0;
`;

const experiences = [
  {
    role: "Mentor",
    company: "Hack Western",
    description:
      "Assisted teams of students with the design and development of their projects at one of Canada's largest student-run hackathons.",
    link: "https://linkedin.com/company/hack-western/"
  },
  {
    role: "CPO",
    company: "BitSwap",
    description:
      "Managed the operations and develop of a cryptocurrency exchange startup that reached over $4M in transaction volumes and a valuation of $10M within two months.",
    link: "https://bitswap.network/"
  },
  {
    role: "Dev",
    company: "Ursa.io",
    description:
      "Designed and prototyped a mobile app to help students make payments for postsecondary education through sustainable and equitable financing.",
    link: "https://ursa.io/"
  }
];

const projects = [
  {
    name: "Green Machine",
    description:
      "A web app that calculates and visualizes the carbon cost of running machine learning models and provides actionable insights. Winner of the MIT-IBM Green Compute Challenge at HackMIT 2020.",
    link: "https://green-compute-challenge.web.app/"
  },
  {
    name: "Acorn Qualification App",
    description:
      "An application built to help the Forest Stewardship Council remotely certify companies based on geospatial data and risk factors. Winner of the Best Qualification App and Best Use of Esri for the DocuSign Good Code Hackathon.",
    link: "https://devpost.com/software/acorn-qualification-app"
  },
  {
    name: "NeuraScale",
    description:
      "A Super Resolution Generative Adversarial Network (SRGAN) trained on the COCO 2017 Unlabeled dataset with the purpose of doubling image resolutions using deep learning. Winner of the #PoweredByTF 2.0 Challenge.",
    link: "https://devpost.com/software/neurascale"
  }
];

function App() {
  const [theme, setTheme] = useState(getTheme());

  const saveTheme = (theme: Theme) => {
    setTheme(theme);
    storeTheme(theme);
  };

  const toggleTheme = () => {
    theme === lightTheme ? saveTheme(darkTheme) : saveTheme(lightTheme);
  };

  return (
    <ThemeProvider theme={theme}>
      <IconContext.Provider
        value={{
          color: theme.primary,
          size: "50px",
          style: {
            margin: 20,
            transition: "1.5s",
            minWidth: "50px",
            cursor: "pointer"
          }
        }}
      >
        <AppContainer>
          <ContentContainer>
            <Wave onClick={toggleTheme}>👋</Wave>
            <Body>
              <Heading>
                I'm Alex, a full stack developer passionate about building
                solutions for interesting problems with technology.
              </Heading>
              <Divider />
              <BodyText>
                I'm driven towards opportunities to learn, grow, and make
                valuable connections. I enjoy experimenting with new
                technologies and working with others to create cool things. I've
                explored areas such as machine learning, mobile apps, and game
                development. I spend my time away from the screen playing
                badminton and learning the guitar.
              </BodyText>
              <br />
              <BodyText>I'm familiar with:</BodyText>
              <IconGroup>
                <SiReact
                  title="React"
                  style={{ marginLeft: 0 }}
                  onClick={() => window.open("https://reactjs.org/")}
                />
                <SiNodedotjs
                  title="Node.js"
                  onClick={() => window.open("https://nodejs.org/")}
                />
                <SiTypescript
                  title="TypeScript"
                  onClick={() => window.open("https://typescriptlang.org/")}
                />
                <SiMongodb
                  title="MongoDB"
                  onClick={() => window.open("https://mongodb.com/")}
                />
                <SiPostgresql
                  title="PostgreSQL"
                  onClick={() => window.open("https://postgresql.org/")}
                />
                <SiDocker
                  title="Docker"
                  onClick={() => window.open("https://docker.com/")}
                />
                <SiAmazonaws
                  title="Amazon Web Services"
                  onClick={() => window.open("https://aws.amazon.com/")}
                />
                <SiCplusplus title="C++" style={{ cursor: "default" }} />
                <SiPython
                  title="Python"
                  onClick={() => window.open("https://python.org/")}
                />
                <SiGit
                  title="Git"
                  onClick={() => window.open("https://git-scm.com/")}
                />
              </IconGroup>
              <br />
              <BodyText>I'm currently exploring:</BodyText>
              <IconGroup>
                <SiGraphql
                  title="GraphQL"
                  style={{ marginLeft: 0 }}
                  onClick={() => window.open("https://graphql.org/")}
                />
                <SiSwift
                  title="Swift"
                  onClick={() => window.open("https://swift.org/")}
                />
                <SiGo
                  title="Go"
                  onClick={() => window.open("https://go.dev/")}
                />
                <SiRust
                  title="Rust"
                  onClick={() => window.open("https://rust-lang.org/")}
                />
              </IconGroup>
              <Divider />
              <BodyText>A few things I've done recently:</BodyText>
              <ItemGroup>
                {experiences.map(({ role, company, description, link }) => (
                  <Item>
                    <ItemTitle href={link} target="_blank">
                      {role} @ {company}
                    </ItemTitle>
                    <ItemText>{description}</ItemText>
                  </Item>
                ))}
              </ItemGroup>
              <Divider />
              <BodyText>Some projects I've worked on:</BodyText>
              <ItemGroup>
                {projects.map(({ name, description, link }) => (
                  <Item>
                    <ItemTitle href={link} target="_blank">
                      {name}
                    </ItemTitle>
                    <ItemText>{description}</ItemText>
                  </Item>
                ))}
              </ItemGroup>
              <Divider />
              <BodyText>Find me on the web:</BodyText>
              <IconGroup>
                <SiGithub
                  title="uyxela"
                  style={{ marginLeft: 0 }}
                  onClick={() => window.open("https://github.com/uyxela/")}
                />
                <SiLinkedin
                  title="alexjy"
                  onClick={() => window.open("https://linkedin.com/in/alexjy/")}
                />
                <SiMedium
                  title="@alexjy"
                  onClick={() => window.open("https://medium.com/@alexjy/")}
                />
                <SiTwitter
                  title="aIexyu"
                  onClick={() => window.open("https://twitter.com/aIexyu")}
                />
              </IconGroup>
            </Body>
          </ContentContainer>
        </AppContainer>
      </IconContext.Provider>
    </ThemeProvider>
  );
}

export default App;
