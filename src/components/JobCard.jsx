import { useUser } from "@clerk/clerk-react";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Trash2Icon } from "lucide-react";

function JobCard({
  job,
  isMyJob = false,
  savedIntialValue = false,
  onJobSaved = () => {},
}) {
  const { user } = useUser();
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex justify-between font-bold">
          {job.title}
          {isMyJob && (
            <Trash2Icon
              fill="red"
              size={18}
              className="text-red-300 cursor-pointer"
            />
          )}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div>
          {job.company && (
            <img
              src={job.company.logo_url}
              alt={job.company.name}
              className="h-6"
            />
          )}
        </div>
      </CardContent>
    </Card>
  );
}

export default JobCard;
