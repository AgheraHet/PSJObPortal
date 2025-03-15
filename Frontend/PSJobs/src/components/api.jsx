export const fetchJobs = async (page, limit, setJobs, setTotalJobs) => {
  try {
    const response = await fetch(
      `http://localhost:3000/api/jobs?page=${page}&limit=${limit}`
    );
    const data = await response.json();
    setJobs(data.jobs);
    setTotalJobs(data.totalJobs);
  } catch (error) {
    console.error("Error fetching jobs:", error);
  }
};
