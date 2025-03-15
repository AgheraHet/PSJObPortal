export const fetchJobs = async (page, limit, setJobs, setTotalJobs) => {
  try {
    const response = await fetch(
      `https://psjobportal.onrender.com/api/jobs?page=${page}&limit=${limit}`
    );
    const data = await response.json();
    setJobs(data.jobs);
    setTotalJobs(data.totalJobs);
  } catch (error) {
    console.error("Error fetching jobs:", error);
  }
};
