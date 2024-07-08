"use client";
import Image from "next/image";
import React, { useTransition, useState } from "react";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc">
        <li>Node.js</li>
        <li>Express.js</li>
        <li>Next.js</li>
        <li>React.js</li>
        <li>Javascript</li>
        <li>Python</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul>
        <li>
          Masters of computer science (Network and Information Security){" "}
          <li className="font-thin text-sm">University Of Wollongong</li>
          <li className="font-thin text-sm">grade: 7.58</li>
        </li>
        <li>
          Bachelors of Science (Information Technology)
          <li className="font-thin text-sm">University Of Mumbai</li>
          <li className="font-thin text-sm">grade: 7.52</li>
        </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul>
        <li>certificate1</li>
        <li>certificate2</li>
      </ul>
    ),
  },
];

function AboutSection() {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white my-32" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a highly motivated and adaptable individual, eager to learn and
            grow in dynamic environments. My strong technical skills are
            complemented by my ability to work collaboratively in teams and
            communicate effectively. I thrive on solving complex problems and
            continuously seek opportunities to improve and innovate.
          </p>
          <div className="flex flex-row mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>

            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>

            {/* <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              certifications
            </TabButton> */}
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
