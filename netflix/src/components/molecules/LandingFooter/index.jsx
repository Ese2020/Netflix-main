import React from "react";
import {
  BottomFooter,
  CenterFooter,
  FooterContain,
  FooterSection,
  TopFooter,
} from "./app";
import { Text } from "../../atoms";

export const LandingFooter = () => {
  const external_link = [
    {
      title: "FAQ",
      link: "https://help.netflix.com/en/node/412",
    },
    {
      title: "Account",
      link: "https://help.netflix.com/en/node/412",
    },
    {
      title: "Investor Relations",
      link: "https://help.netflix.com/en/node/412",
    },
    {
      title: "Ways to Watch",
      link: "https://help.netflix.com/en/node/412",
    },
    {
      title: "Privacy",
      link: "https://help.netflix.com/en/node/412",
    },
    {
      title: "Corporate Information",
      link: "https://help.netflix.com/en/node/412",
    },
    {
      title: "Speed Test",
      link: "https://help.netflix.com/en/node/412",
    },
    {
      title: "Only on Netflix",
      link: "https://help.netflix.com/en/node/412",
    },
    {
      title: "Help Center",
      link: "https://help.netflix.com/en/node/412",
    },
    {
      title: "Media Center",
      link: "https://help.netflix.com/en/node/412",
    },
    {
      title: "Jobs",
      link: "https://help.netflix.com/en/node/412",
    },
    {
      title: "Terms of Use",
      link: "https://help.netflix.com/en/node/412",
    },
    {
      title: "Contact Us",
      link: "https://help.netflix.com/en/node/412",
    },
    {
      title: "Legal Notices",
      link: "https://help.netflix.com/en/node/412",
    },
  ];
  return (
    <>
      <FooterContain>
        <div className="footer-hold">
          <FooterSection>
            <TopFooter>
              <a href="https://help.netflix.com/en/contactus" className="q-cs">
                Questions? Contact us.
              </a>
            </TopFooter>
            <CenterFooter>
              {external_link.map((elem) => {
                return (
                  <>
                    <div className="ext">
                      <ul className="ext-ul">
                        <li>
                          <a href={elem.link}>{elem.title}</a>
                        </li>
                      </ul>
                    </div>
                  </>
                );
              })}
            </CenterFooter>
            <BottomFooter>
              <Text type="p" className="ft-p">
                Netflix Nigeria
              </Text>
            </BottomFooter>
          </FooterSection>
        </div>
      </FooterContain>
    </>
  );
};
