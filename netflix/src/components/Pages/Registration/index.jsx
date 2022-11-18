import React from "react";
import { RegistrationSection } from "../../molecules";
import { RegistrationNavbar } from "../../molecules/RegistrationNavbar";
import { PageTemplate } from "../../templates";

export const Registration = () => {
  return (
    <>
      <PageTemplate
        header={
          <>
            <RegistrationNavbar />
          </>
        }
      >
        <RegistrationSection />
      </PageTemplate>
    </>
  );
};
