import React from "react";
import { ISanityService } from "@/lib/types";

interface CVServicesProps {
  services: ISanityService[];
}

const CVServices = ({ services }: CVServicesProps) => {
  return (
    <section id="services">
      <h2 className="font-bold">Services</h2>
      <ul className="list-none pt-6 sm:pt-12 flex flex-col gap-3">
        {services.map((service) => (
          <li key={service._id}>{service.title}</li>
        ))}
      </ul>
    </section>
  );
};

export default CVServices;
