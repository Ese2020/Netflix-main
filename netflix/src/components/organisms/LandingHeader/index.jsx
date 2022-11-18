import React from "react";
import { Text } from "../../atoms";
import { EmailRegister } from "../../molecules/EmailRegister";
import { Header } from "./app";

export const LandingHeader = () => {
  return (
    <>
      <Header>
        <div className="holder">
          <Text type="h1" className="landing-h1">
            Unlimited movies, TV shows, and more.
          </Text>
        </div>
        <div className="holder-2">
          <Text type="p" className="landing-p">
            Watch anywhere. Cancel anytime.
          </Text>
        </div>
        <div className="holder-3">
          <Text type="p" className="landing-p-2">
            Ready to watch? Enter your email to create or restart your
            membership.
          </Text>
        </div>

        <EmailRegister />
      </Header>
    </>
  );
};
