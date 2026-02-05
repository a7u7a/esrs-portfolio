import React, { Suspense } from "react";
import Work from "@/components/work/Work";
import {
  getSelectedProjects,
  getExperimentalProjects,
  getCollaborators,
  getEducation,
  getPublications,
  getServices,
  getSocials,
} from "@/sanity/lib/queries";

const WorkPage = async () => {
  const [
    selectedProjects,
    experimentalProjects,
    collaborators,
    education,
    publications,
    services,
    socials,
  ] = await Promise.all([
    getSelectedProjects(),
    getExperimentalProjects(),
    getCollaborators(),
    getEducation(),
    getPublications(),
    getServices(),
    getSocials(),
  ]);

  return (
    <Work
      selectedProjects={selectedProjects}
      experimentalProjects={experimentalProjects}
      collaborators={collaborators}
      education={education}
      publications={publications}
      services={services}
      socials={socials}
    />
  );
};

export default WorkPage;
