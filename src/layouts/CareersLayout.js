import React from "react";
import { Outlet } from "react-router-dom";

export default function CareersLayout() {
  return (
    <div className="careers-layout">
      <h2>Careers</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. At veniam vel
        ut delectus modi quia? Pariatur, harum consequuntur explicabo nisi
        molestiae consectetur, accusantium adipisci minima eaque enim, nam saepe
        doloribus.
      </p>

      <Outlet />
    </div>
  );
}
