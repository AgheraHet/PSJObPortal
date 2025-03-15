import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import JobCard from "./components/JobCard";
import Pagination from "./components/Pagination";
import { useEffect, useState } from "react";
import { fetchJobs } from "./components/api";
const jobsPerPage = 6;
function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [jobs, setJobs] = useState([]);
  const [totalJobs, setTotalJobs] = useState(0);
  const totalPages = Math.ceil(totalJobs / jobsPerPage);

  useEffect(() => {
    fetchJobs(currentPage, jobsPerPage, setJobs, setTotalJobs);
  }, [currentPage]);

  return (
    <div className="bg-[#000000] min-h-screen p-6 text-[#FBFAEE]">
      <div className="bg-[#000000] min-h-screen p-6 text-[#FBFAEE]">
        <Navbar />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
          <Sidebar />
          <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {jobs.map((job, index) => (
              <JobCard key={index} job={job} />
            ))}
          </div>
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
}

export default App;
