import { useParams, useNavigate } from "react-router-dom";
import PageWrapper from "../components/PageWrapper";
import { htmlContent } from "./courses/Html";
import { cssContent } from "./courses/Css";
import { javascriptContent } from "./courses/Javascript";
import { pythonContent } from "./courses/Python";
import { javaContent } from "./courses/Java";
import { dsaContent } from "./courses/Dsa";
import "../styles/courseDetail.css";

const courseContent = {
  html: htmlContent,
  css: cssContent,
  javascript: javascriptContent,
  python: pythonContent,
  java: javaContent,
  dsa: dsaContent
};

function CourseDetail() {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const course = courseContent[courseId];

  if (!course) {
    return (
      <PageWrapper>
        <div className="course-not-found">
          <p>Course not found</p>
          <button onClick={() => navigate("/courses")}>Back to Courses</button>
        </div>
      </PageWrapper>
    );
  }

  const handleLessonClick = (lessonId) => {
    navigate(`/course/${courseId}/lesson/${lessonId}`);
  };

  return (
    <PageWrapper>
      <div className="course-detail-container">
        <div className="course-detail-inner">
          {/* Back Button */}
          <button
            onClick={() => navigate("/courses")}
            className="course-detail-back-btn"
          >
            <span>←</span> Back to Courses
          </button>

          {/* Course Header */}
          <div className="course-header-card">
            <h1>{course.name}</h1>
            <p className="course-description">{course.description}</p>
          </div>

          {/* Lessons Section */}
          <div className="lessons-section">
            <h2 className="course-lessons-heading">📖 Course Lessons</h2>

            <div className="lessons-list">
              {course.lessons.map((lesson) => (
                <div
                  key={lesson.id}
                  className="lesson-list-item"
                  onClick={() => handleLessonClick(lesson.id)}
                >
                  <div className="lesson-item-left">
                    <div className="lesson-number-circle">
                      {lesson.id}
                    </div>
                    <div className="lesson-item-title-box">
                      {lesson.icon && <span className="lesson-item-icon">{lesson.icon}</span>}
                      <span className="lesson-item-title">{lesson.title}</span>
                    </div>
                  </div>

                  <div className="lesson-item-arrow">→</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}

export default CourseDetail;
