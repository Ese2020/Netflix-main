import React from "react";
import { RegDetailSection, RegistrationNavbar } from "../../molecules";
import { PageTemplate } from "../../templates";

export const RegistrationDetails = () => {
  return (
    <>
      <PageTemplate
        header={
          <>
            <RegistrationNavbar />
          </>
        }
      >
        <RegDetailSection />
      </PageTemplate>
    </>
  );
};
