import React, { Suspense } from "react";
import WorkPageMain from "@/components/work/main";
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
    <Suspense fallback={<div></div>}>
      <WorkPageMain
        selectedProjects={selectedProjects}
        experimentalProjects={experimentalProjects}
        collaborators={collaborators}
        education={education}
        publications={publications}
        services={services}
        socials={socials}
      />
    </Suspense>
  );
};

export default WorkPage;
