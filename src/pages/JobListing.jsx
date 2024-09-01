import { getJobs } from "@/api/apiJobs";
import JobCard from "@/components/JobCard";
import useFetch from "@/hooks/useFetch";
import { useUser } from "@clerk/clerk-react";

import React, { useEffect, useState } from "react";
import { BarLoader } from "react-spinners";

function JobListing() {
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState("");
  const [company_id, setCompany_Id] = useState("");
  const { isLoaded } = useUser();
  const {
    fn: fnJobs,
    data: jobs,
    loading: loadingJobs,
  } = useFetch(getJobs, { location, company_id, searchQuery });

  useEffect(() => {
    if (isLoaded) {
      fnJobs();
    }
  }, [isLoaded, location, company_id, searchQuery]);
  if (!isLoaded) {
    return <BarLoader className="mb-4 w-full" width={"100%"} color="#36d7b7" />;
  }
  console.log(jobs);
  return (
    <div>
      <h1 className="gradient-title font-extrabold text-6xl sm:text-7xl text-center pb-8">
        Latest Jobs
      </h1>
      {/* Add filter here */}
      {loadingJobs && (
        <BarLoader className="mt-4 w-full" width={"100%"} color="#36d7b7" />
      )}
      {loadingJobs === false && (
        <div>
          {jobs?.length ? (
            jobs.map((job) => {
              return <JobCard key={job.id} job={job} />;
            })
          ) : (
            <div>No Jobs </div>
          )}
        </div>
      )}
    </div>
  );
}

export default JobListing;
