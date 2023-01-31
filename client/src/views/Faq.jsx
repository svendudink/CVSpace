import React from "react";
import Faq from "react-faq-component";

const data = {
  title: "FAQ (About me)",
  rows: [
    {
      title: "Frontend or backend",
      content: `My primary focus is on back-end development, but the job market for junior back-end developers is competitive. I am excited to begin my career as a front-end developer and eventually grow into a back-end position.`,
    },
    {
      title: "why?",
      content: `I find pleasure in tasks such as abstract thinking, designing algorithms, optimizing performance, constructing APIs, establishing networks, and integrating databases, rather than focusing on the visual aspect of website development.`,
    },
    {
      title: `at what age did you gain interest for computers`,
      content: `At the tender age of five, I was already fascinated by technology and began playing on my first computer, which was equipped with an Intel 386 processor. By nine years old, I was already displaying my tech savvy skills by repairing both hardware and software for my elementary school (Montessori). At ten years old, I even set up the school's coax network, and I soon became the go-to person for other teachers and the director whenever they encountered computer issues.
       `,
    },
    {
      title: `how did you get into programming`,
      content: `After closing my business, I sought my next chapter in life. The thought of programming had been on my mind for a while, and after a design thinking workshop organized by my friends, programming emerged as my strongest passion.
       `,
    },
    {
      title: `do you have other hobbys becides programming ?`,
      content: `I have a passion for both physical and creative pursuits. I enjoy climbing, running, and biking, as well as playing underwater rugby. As a member of a non-profit art community, I dedicate much of my time to organizing and preparing for our annual 7-day art festival. I lead the water and electricity infrastructure, and now I'm in charge of the path lights. which is connected with my most passionate programming project, called "Bottle Luminous". You can learn more about it in my project folder
       `,
    },
    {
      title: `our company does not use Javascript, are you willing to learn a new language ?`,
      content: `absolutely, just tell me which language i need to learn, in between the moment i get hired and the starting date, i will commit spending a minimum of 40 hours per week learning the language your company uses
       `,
    },
  ],
};

const styles = {
  titleTextColor: "blue",
  rowTitleColor: "blue",
  rowContentColor: "black",
  arrowColor: "red",
};

const config = {
  animate: true,
  // arrowIcon: "V",
  tabFocus: true,
};

function MyFaq() {
  return (
    <div style={{ paddingTop: "5vw", paddingLeft: "5vw", paddingRight: "5vw" }}>
      <Faq data={data} styles={styles} config={config} />
    </div>
  );
}

export default MyFaq;
