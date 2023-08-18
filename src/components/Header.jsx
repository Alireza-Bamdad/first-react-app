const courseStatus = ["All", "Active", "Completed", "Upcoming"];

function Header() {
  return (
    <div>
      <h1>My Courses (3)</h1>
      <div className="course-status">
        {courseStatus.map((status) => (
          <div key={status}>{status}</div>
        ))}
      </div>
    </div>
  );
}

export default Header;
