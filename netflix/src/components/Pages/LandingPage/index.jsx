import React from "react";
import {
  Download,
  Enjoy,
  Kids,
  LandingNavbar,
  Watch,
  LandingFooter,
} from "../../molecules";
import { LandingFrequent, LandingHeader } from "../../organisms";
import { PageTemplate } from "../../templates/PageTemplate";

export const LandingPage = () => {
  return (
    <>
      <PageTemplate
        header={
          <>
            <main className="landing-header-contain">
              <section className="landing-header">
                <LandingNavbar />
                <LandingHeader />
              </section>
            </main>
          </>
        }
        footer={
          <>
            <LandingFooter />
          </>
        }
      >
        <Enjoy />
        <Download />
        <Watch />
        <Kids />
        <LandingFrequent />
      </PageTemplate>
    </>
  );
};
