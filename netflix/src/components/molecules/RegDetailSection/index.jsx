import React from "react";
import { Button, Text, Input } from "../../atoms";
import { Link } from "react-router-dom";
import { RegisterContain, RegisterHold, RegisterSection } from "./app";

export const RegDetailSection = () => {
  return (
    <>
      <RegisterSection>
        <RegisterHold>
          <RegisterContain>
            <div className="register-text-contain reg-contain">
              <span className="register-text">
                STEP <b>1</b> OF <b>3</b>
              </span>
              <Text type="h1" className="register-h1 reg-txt">
                Create a password to start your membership
              </Text>
              <div className="register-p reg-txt reg-txt-2">
                Just a few more steps and you're done! We hate paperwork, too.
              </div>
              <form>
                <div className="cta-b cta-b-reg">
                  <Input
                    type="email"
                    className="landing-email-input reg-input"
                    label={
                      <>
                        <label className="floating-label">Email</label>
                      </>
                    }
                    required
                  />
                </div>
                <div className="cta-b cta-b-reg">
                  <Input
                    type="password"
                    className="landing-email-input reg-input"
                    label={
                      <>
                        <label className="floating-label">Add a password</label>
                      </>
                    }
                    required
                  />
                </div>
                <div className="check-reg">
                  <Input
                    type="checkbox"
                    className="checkbox-reg"
                    label={
                      <>
                        <label className="checkbox-label">
                          Please do not email me Netflix special offers
                        </label>
                      </>
                    }
                    required
                  />
                </div>
              </form>

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
