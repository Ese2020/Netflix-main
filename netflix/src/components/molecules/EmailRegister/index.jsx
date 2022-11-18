import React from "react";
import { BsChevronRight } from "react-icons/bs";
import { Button, Input } from "../../atoms";
import { Link } from "react-router-dom";

export const EmailRegister = () => {
  return (
    <>
      <form className="form-container">
        <div className="email-holder">
          <div className="email-holder-contain">
            <div className="cta-b">
              <Input
                type="email"
                className="landing-email-input"
                label={
                  <>
                    <label className="floating-label">Email address</label>
                  </>
                }
              />
            </div>
            <Button className="landing-email-btn">
              <Link to="/registration" className="link-btn-reg">
                <span className="cta">Get Started</span>
                <span>
                  <BsChevronRight className="s-email" />
                </span>
              </Link>
            </Button>
          </div>
        </div>
      </form>
    </>
  );
};
