import PageWrapper from "../components/PageWrapper";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const courses = [
  { name: "HTML", img: "/images/html.png", id: "html" },
  { name: "CSS", img: "/images/css.png", id: "css" },
  { name: "JavaScript", img: "/images/js.png", id: "javascript" },
  { name: "Java", img: "/images/Java-Logo.png", id: "java" },
  { name: "Python", img: "/images/python.jpg", id: "python" },
  { name: "DSA", img: "/images/dsa.png", id: "dsa" },
];

function Courses() {
  const navigate = useNavigate();
  const [hoveredCourse, setHoveredCourse] = useState(null);

  const handleCourseClick = (courseId) => {
    navigate(`/course/${courseId}`);
  };

  return (
    <PageWrapper>
      <section className="courses" style={{ paddingTop: "150px" }}>
        <h2>Courses</h2>

        <div className="course-grid">
          {courses.map((course, index) => (
            <div
              className="course-box"
              key={index}
              onClick={() => handleCourseClick(course.id)}
              onMouseEnter={() => setHoveredCourse(course.id)}
              onMouseLeave={() => setHoveredCourse(null)}
              style={{
                cursor: "pointer",
                padding: "30px",
                borderRadius: "20px",
                border: "2px solid #04aa6d",
                transition: "all 0.3s ease"
              }}
            >
              <div className="circle-img" style={{
                marginBottom: "20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}>
                <img src={course.img} alt={course.name} style={{
                  maxWidth: ["dsa", "java", "javascript"].includes(course.id) ? "240px" : "200px",
                  maxHeight: ["dsa", "java", "javascript"].includes(course.id) ? "240px" : "200px",
                  objectFit: "contain",
                  opacity: 1,
                  transition: "opacity 0.3s ease"
                }} />
              </div>
              <div className="course-name" style={{
                fontSize: "18px",
                fontWeight: "bold",
                textAlign: "center",
                padding: "10px 16px",
                borderRadius: "8px",
                display: "inline-block",
                width: "100%",
                boxSizing: "border-box",
                backgroundColor: hoveredCourse === course.id ? "#04aa6d" : "transparent",
                color: hoveredCourse === course.id ? "white" : "",
                transition: "all 0.3s ease",
                cursor: "pointer"
              }}>
                {course.name}
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageWrapper>
  );
}

export default Courses;
