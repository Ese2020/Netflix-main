import React from "react";
import { Text } from "../../atoms";
import { WatchContain, WatchHold } from "./app";

export const Watch = () => {
  return (
    <>
      <WatchContain>
        <WatchHold>
          <Text type="h1" className="watch-h1">
            Watch everywhere.
          </Text>
          <Text type="h2" className="watch-h2">
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV.
          </Text>
        </WatchHold>
      </WatchContain>
    </>
  );
};
