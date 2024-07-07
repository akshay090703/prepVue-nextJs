import React from "react";
import AddNewInterview from "./_components/AddNewInterview";
import InterviewList from "./_components/InterviewList";

function Dashboard() {
  return (
    <div>
      <h2 className="font-bold text-2xl mt-7">Dashboard</h2>
      <h2 className="text-gray-500">
        Create and Start your AI Mockup Interview
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 my-5">
        <AddNewInterview />
      </div>
      <p className="text-red-600 mb-3 -mt-3 text-sm">
        *Use Google Chrome for Best Experience.
      </p>

      {/* Previous Interview List */}
      <InterviewList />
    </div>
  );
}

export default Dashboard;
