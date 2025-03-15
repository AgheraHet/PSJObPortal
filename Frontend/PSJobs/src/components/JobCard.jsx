import React from "react";

const JobCard = ({ job }) => (
  <div className="bg-[#242424] p-4 rounded-lg shadow-lg border-l-4 border-[#933DC9]">
    <h3 className="text-lg font-bold text-[#933DC9]">{job.title}</h3>
    <p className="text-[#FBFAEE]">
      {job.company} - {job.location}
    </p>
    {/* <p className="text-[#53118F]">{job.experience} years experience - ${job.salary}</p> */}
    <button className="mt-2 px-4 py-2 bg-[#933DC9] text-[#FBFAEE] rounded-lg w-full hover:bg-[#53118F]">
      Apply Now
    </button>
  </div>
);

export default JobCard;
