import React, { useState } from "react";
import { Text } from "../../atoms";
import { TfiClose } from "react-icons/tfi";
import {
  BottomSection,
  CenterSection,
  FrequentContain,
  FrequentSection,
  TopSection,
} from "./app";
import { EmailRegister } from "../../molecules/EmailRegister";

export const LandingFrequent = () => {
  const frequently = [
    {
      title: "What is Netflix?",
      contentOne:
        "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
      contentTwo:
        "You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!",
    },
    {
      title: "How much does Netflix cost?",
      contentOne:
        "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₦1,200 to ₦4,400 a month. No extra costs, no contracts.",
      contentTwo: "",
    },
    {
      title: "Where can I watch?",
      contentOne:
        "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.",
      contentTwo:
        "You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.",
    },
    {
      title: "How do I cancel?",
      contentOne:
        "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
      contentTwo: "",
    },
    {
      title: "What can I watch on Netflix?",
      contentOne:
        "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
      contentTwo: "",
    },
    {
      title: "Is Netflix good for kids?",
      contentOne:
        "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.",
      contentTwo:
        "Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.",
    },
  ];

  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      //if clicked question is already active, then close it
      return setClicked(null);
    }

    setClicked(index);
  };
  return (
    <>
      <FrequentContain>
        <FrequentSection>
          <TopSection>
            <Text type="h1" className="top-h1">
              Frequently Asked Questions
            </Text>
          </TopSection>
          <CenterSection>
            {frequently.map((elem, index) => {
              return (
                <>
                  <div className="fq-holder" onClick={() => toggle(index)}>
                    <Text type="p" className="fq-p-head">
                      {elem.title}
                    </Text>
                    <div className="fq-btn">
                      <TfiClose
                        className={
                          clicked === index ? "font-fq" : "font-fq-add"
                        }
                      />
                    </div>
                  </div>
                  <div
                    className={
                      clicked === index ? "fq-content" : "fq-content-hidden"
                    }
                  >
                    <Text type="p" className="content-p">
                      {elem.contentOne}
                    </Text>
                    <Text type="p" className="content-p p-2">
                      {elem.contentTwo}
                    </Text>
                  </div>
                </>
              );
            })}
          </CenterSection>
          <BottomSection>
            <div className="holder-3">
              <Text type="p" className="landing-p-2">
                Ready to watch? Enter your email to create or restart your
                membership.
              </Text>
            </div>
            <EmailRegister />
          </BottomSection>
        </FrequentSection>
      </FrequentContain>
    </>
  );
};
