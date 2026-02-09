import CVPublications from "./Publications";
import CVContact from "./Contact";
import CVEducation from "./Education";
import CVServices from "./Services";
import { useMediaQuery } from "@/lib/hooks";
import {
  ISanityEducation,
  ISanityPublication,
  ISanityService,
  ISanitySocial,
} from "@/lib/types";

interface CVProps {
  education: ISanityEducation[];
  publications: ISanityPublication[];
  services: ISanityService[];
  socials: ISanitySocial[];
}

const CV = ({ education, publications, services, socials }: CVProps) => {
  const isMd = useMediaQuery("(min-width: 768px)");
  return (
    <>
      {isMd && (
        <CVDesktop
          education={education}
          publications={publications}
          services={services}
          socials={socials}
        />
      )}
      {!isMd && (
        <CVMobile
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

const CVDesktop = ({ education, publications, services, socials }: CVProps) => {
  return (
    <div className="grid grid-cols-4">
      <div className="col-span-3">
        <CVPublications publications={publications} />
        <div className="pt-16">
          <CVEducation education={education} />
        </div>
        <div className="pt-16">
          <CVContact socials={socials} />
        </div>
      </div>
      <div className="col-span-1">
        <CVServices services={services} />
      </div>
    </div>
  );
};

const CVMobile = ({ education, publications, services, socials }: CVProps) => {
  return (
    <div>
      <CVPublications publications={publications} />
      <div className="flex pt-12 gap-2">
        <div className="w-1/2">
          <CVEducation education={education} />
          <div className="pt-12">
            <CVServices services={services} />
          </div>
        </div>
        <div className="w-1/2">
          <CVContact socials={socials} />
        </div>
      </div>
    </div>
  );
};
