import React, { Suspense } from "react";
import Work from "@/components/work/Work";
import {
  getSelectedProjects,
  getExperimentalProjects,
} from "@/sanity/lib/queries";

const WorkPage = async () => {
  const [selectedProjects, experimentalProjects] = await Promise.all([
    getSelectedProjects(),
    getExperimentalProjects(),
  ]);

  return (
    <Work
      selectedProjects={selectedProjects}
      experimentalProjects={experimentalProjects}
    />
  );
};

export default WorkPage;
