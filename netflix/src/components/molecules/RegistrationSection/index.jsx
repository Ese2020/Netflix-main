import React from "react";
import { Button, Text } from "../../atoms";
import { Link } from "react-router-dom";
import { RegisterContain, RegisterHold, RegisterSection } from "./app";

export const RegistrationSection = () => {
  return (
    <>
      <RegisterSection>
        <RegisterHold>
          <RegisterContain>
            <div className="register-icon"></div>
            <div className="register-text-contain">
              <span className="register-text">
                STEP <b>1</b> OF <b>3</b>
              </span>
              <Text type="h1" className="register-h1">
                Finish setting up your account
              </Text>
              <div className="register-p">
                Netflix is personalized for you. Create a password to watch on
                any device at any time.
              </div>

              <Button className="register-btn">
                <Link to="/signup/regform" className="link-btn-reg">
                  Next
                </Link>
              </Button>
            </div>
          </RegisterContain>
        </RegisterHold>
      </RegisterSection>
    </>
  );
};
