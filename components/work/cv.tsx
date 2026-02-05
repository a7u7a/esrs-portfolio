import CVPublications from "./cv-publications";
import CVContact from "./cv-contact";
import CVEducation from "./cv-education";
import Footer from "../Footer";
import CVServices from "./cv-services";
import { useMediaQuery } from "@/lib/hooks";
import {
  ISanityCollaborator,
  ISanityEducation,
  ISanityPublication,
  ISanityService,
  ISanitySocial,
} from "@/lib/types";

interface CVProps {
  collaborators: ISanityCollaborator[];
  education: ISanityEducation[];
  publications: ISanityPublication[];
  services: ISanityService[];
  socials: ISanitySocial[];
}

const CV = ({
  collaborators,
  education,
  publications,
  services,
  socials,
}: CVProps) => {
  const isMd = useMediaQuery("(min-width: 768px)");
  return (
    <>
      {isMd && (
        <CVDesktop
          collaborators={collaborators}
          education={education}
          publications={publications}
          services={services}
          socials={socials}
        />
      )}
      {!isMd && (
        <CVMobile
          collaborators={collaborators}
          education={education}
          publications={publications}
          services={services}
          socials={socials}
        />
      )}
    </>
  );
};

export default CV;

const CVDesktop = ({
  collaborators,
  education,
  publications,
  services,
  socials,
}: CVProps) => {
  return (
    <div className="grid grid-cols-4">
      <div className="col-span-3">
        <CVPublications publications={publications} />
        <div className="pt-16">
          <CVEducation education={education} />
        </div>
        <div className="pt-16">
          <CVContact socials={socials} collaborators={collaborators} />
        </div>
        <Footer className="pt-12 max-w-[600px]" />
      </div>

      <div className="col-span-1">
        <CVServices services={services} />
      </div>
    </div>
  );
};

const CVMobile = ({
  collaborators,
  education,
  publications,
  services,
  socials,
}: CVProps) => {
  return (
    <div>
      <CVPublications publications={publications} />
      <div className="flex pt-12 gap-2">
        <div className="w-1/2">
          <CVEducation education={education} />
          <div className="pt-12">
            <CVServices services={services} />
          </div>
          <Footer className="pt-12 max-w-[600px]" />
        </div>

        <div className="w-1/2">
          <CVContact socials={socials} collaborators={collaborators} />
        </div>
      </div>
    </div>
  );
};
