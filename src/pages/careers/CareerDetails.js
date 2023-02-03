import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

export default function CareerDetails() {
  const { id } = useParams();
  const career = useLoaderData();

  return (
    <div className="career-details">
      <h2>Career detail for {career.title}</h2>
      <p>Starting salary: {career.salary}</p>
      <p>Location: {career.location}</p>
      <div className="details">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
          numquam laudantium obcaecati autem ipsam expedita quo neque et
          temporibus reprehenderit, itaque fugit possimus, ducimus est odit
          placeat assumenda quae voluptatibus?
        </p>
      </div>
    </div>
  );
}

export const careerDetailsLoader = async ({ params }) => {
  //*json-server -p 4000 -w ./data/db.json
  const { id } = params;
  const res = await fetch("http://localhost:4000/careers/" + id);

  if (!res.ok) {
    throw Error("Could not find that career");
  }
  return res.json();
};
