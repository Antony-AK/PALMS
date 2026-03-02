import React from "react";
import PalmsPlusHero from "../Components/palmsPlus/PalmsPlusHero";
import PalmsPlusIntro from "../Components/palmsPlus/PalmsPlusIntro";
import LatestIssue from "../Components/palmsPlus/LatestIssue";
import SubscriptionSection from "../Components/palmsPlus/SubscriptionSection";
import ArchiveSection from "../Components/palmsPlus/ArchiveSection";
import AdvertiseSection from "../Components/palmsPlus/AdvertiseSection";

const PalmsPlus = () => {
  return (
    <div className="bg-white">
      <PalmsPlusHero />
      <PalmsPlusIntro />
      <LatestIssue />
      <SubscriptionSection />
      <ArchiveSection />
      <AdvertiseSection />
    </div>
  );
};

export default PalmsPlus;