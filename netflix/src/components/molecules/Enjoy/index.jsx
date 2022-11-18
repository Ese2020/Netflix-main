import React from "react";
import { Image, Text } from "../../atoms";
import { EnjoyContain, EnjoyLeft, EnjoyRight, EnjoySection } from "./app";
import src from "../../../video/video-tv-0819.m4v";

export const Enjoy = () => {
  return (
    <>
      <EnjoyContain>
        <EnjoySection>
          <EnjoyLeft>
            <Text type="h1" className="enjoy-h1">
              Enjoy on your TV.
            </Text>
            <Text type="h2" className="enjoy-p">
              Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
              Blu-ray players, and more.
            </Text>
          </EnjoyLeft>
          <EnjoyRight>
            <div className="story-tell">
              <Image
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
                alt="tv"
                className="tv"
              />
              <div className="story-tv">
                <video className="tv-video" autoPlay playsInline muted loop>
                  <source src={src} type="video/mp4"></source>
                </video>
              </div>
            </div>
          </EnjoyRight>
        </EnjoySection>
      </EnjoyContain>
    </>
  );
};
