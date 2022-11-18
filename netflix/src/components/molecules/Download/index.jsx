import React from "react";
import {
  DownloadContain,
  DownloadLeft,
  DownloadRight,
  DownloadSection,
} from "./app";
import { Text } from "../../atoms";
import { Image } from "../../atoms";

export const Download = () => {
  return (
    <>
      <DownloadContain>
        <DownloadSection>
          <DownloadLeft>
            <Image
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
              alt="download"
              className="download-img"
            />
            <div className="download-animate">
              <div className="download-card-img">
                <Image
                  src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
                  alt="small"
                  className="small-img"
                />
              </div>
              <div className="download-card-text">
                <div className="text-0">Stranger Things</div>
                <div className="text-1">Downloading...</div>
              </div>
              <div className="download-card-custom"></div>
            </div>
          </DownloadLeft>
          <DownloadRight>
            <Text type="h1" className="dn-h1">
              Download your shows to watch offline.
            </Text>
            <Text type="h2" className="dn-h2">
              Save your favorites easily and always have something to watch.
            </Text>
          </DownloadRight>
        </DownloadSection>
      </DownloadContain>
    </>
  );
};
