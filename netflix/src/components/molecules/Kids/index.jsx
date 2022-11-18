import React from "react";
import { Image, Text } from "../../atoms";
import { KidsContain, KidsLeft, KidsRight, KidsSection } from "./app";

export const Kids = () => {
  return (
    <>
      <KidsContain>
        <KidsSection>
          <KidsLeft>
            <Image
              src="https://occ-0-5543-300.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABfpnX3dbgjZ-Je8Ax3xn0kXehZm_5L6-xe6YSTq_ucht9TI5jwDMqusWZKNYT8DfGudD0_wWVVTFLiN2_kaQJumz2iivUWbIbAtF.png?r=11f"
              alt="kids"
              className="kids-img"
            />
          </KidsLeft>
          <KidsRight>
            <Text type="h1" className="kids-h1">
              Create profiles for kids.
            </Text>
            <Text type="h2" className="kids-h2">
              Send kids on adventures with their favorite characters in a space
              made just for them—free with your membership.
            </Text>
          </KidsRight>
        </KidsSection>
      </KidsContain>
    </>
  );
};
