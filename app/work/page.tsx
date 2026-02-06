import React, { Suspense } from "react";
import Work from "@/components/work/Work";
import {
  getSelectedProjects,
  getExperimentalProjects,
  getEducation,
  getPublications,
  getServices,
  getSocials,
} from "@/sanity/lib/queries";

const WorkPage = async () => {
  const [
    selectedProjects,
    experimentalProjects,
    education,
    publications,
    services,
    socials,
  ] = await Promise.all([
    getSelectedProjects(),
    getExperimentalProjects(),
    getEducation(),
    getPublications(),
    getServices(),
    getSocials(),
  ]);

  return (
    <Work
      selectedProjects={selectedProjects}
      experimentalProjects={experimentalProjects}
      education={education}
      publications={publications}
      services={services}
      socials={socials}
    />
  );
};

export default WorkPage;
