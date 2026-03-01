import { useParams, useNavigate } from "react-router-dom";
import PageWrapper from "../components/PageWrapper";
import CodeCompiler from "../components/CodeCompiler";
import { useEffect } from "react";
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

function LessonDetail() {
  const { courseId, lessonId } = useParams();
  const navigate = useNavigate();
  const course = courseContent[courseId];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [lessonId]);

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

  const lesson = course.lessons.find(l => l.id === parseInt(lessonId));

  if (!lesson) {
    return (
      <PageWrapper>
        <div className="course-not-found">
          <p>Lesson not found</p>
          <button onClick={() => navigate(`/course/${courseId}`)}>Back to Course</button>
        </div>
      </PageWrapper>
    );
  }

  const currentIndex = course.lessons.findIndex(l => l.id === lesson.id);
  const prevLesson = currentIndex > 0 ? course.lessons[currentIndex - 1] : null;
  const nextLesson = currentIndex < course.lessons.length - 1 ? course.lessons[currentIndex + 1] : null;

  return (
    <PageWrapper>
      <div className="course-detail-container">
        <div className="course-detail-inner">
          {/* Breadcrumb Navigation */}
          <div className="breadcrumb-nav">
            <span onClick={() => navigate("/courses")} className="breadcrumb-link">Courses</span>
            <span>›</span>
            <span onClick={() => navigate(`/course/${courseId}`)} className="breadcrumb-link">{course.name}</span>
            <span>›</span>
            <span className="breadcrumb-current">{lesson.title}</span>
          </div>

          {/* Back Button */}
          <button
            onClick={() => navigate(`/course/${courseId}`)}
            className="course-detail-back-btn"
          >
            <span>←</span> Back to {course.name}
          </button>

          {/* Lesson Content Card */}
          <div className="lesson-content-card">
            <div className="lesson-content-header">
              <h1>
                {lesson.icon && <span className="lesson-header-icon">{lesson.icon}</span>}
                {lesson.title}
              </h1>
              <div className="header-underline"></div>
            </div>

            <div className="lesson-text-content">
              <h3>📖 Lesson Content</h3>
              {(() => {
                const parts = lesson.content.split('```');
                return parts.map((part, index) => {
                  if (index % 2 === 1) {
                    // This is a code block
                    return (
                      <div key={index} className="lesson-code-block">
                        <pre><code>{part.trim()}</code></pre>
                      </div>
                    );
                  }

                  // Check for table blocks (delimited by |||)
                  const tableParts = part.split('|||');
                  return tableParts.map((tablePart, tIndex) => {
                    if (tIndex % 2 === 1) {
                      // This is a table
                      const lines = tablePart.trim().split('\n');
                      const headers = lines[0].split('|');
                      const rows = lines.slice(1).map(line => line.split('|'));

                      return (
                        <div key={`${index}-table-${tIndex}`} className="lesson-table-container">
                          <table className="lesson-table">
                            <thead>
                              <tr>
                                {headers.map((header, hIndex) => (
                                  <th key={hIndex}>{header}</th>
                                ))}
                              </tr>
                            </thead>
                            <tbody>
                              {rows.map((row, rIndex) => (
                                <tr key={rIndex}>
                                  {row.map((cell, cIndex) => {
                                    // Check for markdown bold and code
                                    const processedParts = cell.split(/(\*\*[^*]+\*\*|`[^`]+`|<[^>]+>)/g);
                                    return (
                                      <td key={cIndex}>
                                        {processedParts.map((segment, sIndex) => {
                                          if (segment.match(/^\*\*[^*]+\*\*$/)) {
                                            return <strong key={sIndex}>{segment.slice(2, -2)}</strong>;
                                          }
                                          if (segment.match(/^`[^`]+`$/)) {
                                            return <code key={sIndex} className="inline-code">{segment.slice(1, -1)}</code>;
                                          }
                                          if (segment.match(/^<[^>]+>$/)) {
                                            return <code key={sIndex} className="inline-code">{segment}</code>;
                                          }
                                          return segment;
                                        })}
                                      </td>
                                    );
                                  })}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      );
                    }

                    // This is normal text, split by lines
                    return tablePart.split('\n').map((line, lIndex) => {
                      const uniqueKey = `${index}-${tIndex}-${lIndex}`;
                      if (line.match(/^\d+\.\d+/)) {
                        const isKeySection = line.match(/^1\.[45]/);
                        return <h4 key={uniqueKey} className={isKeySection ? "lesson-subheading-alt" : "lesson-subheading"}>{line}</h4>;
                      }
                      if (line.trim() === "") return <br key={uniqueKey} />;

                      // Check if line contains HTML tags to bold or markdown bold syntax
                      const lineParts = line.split(/(<[^>]+>|\*\*[^*]+\*\*)/g);
                      if (lineParts.length > 1) {
                        return (
                          <p key={uniqueKey}>
                            {lineParts.map((segment, sIndex) => {
                              if (segment.match(/^<[^>]+>$/)) {
                                return <strong key={sIndex}>{segment}</strong>;
                              }
                              if (segment.match(/^\*\*[^*]+\*\*$/)) {
                                // Remove the ** markers and render bold
                                const content = segment.slice(2, -2);
                                return <strong key={sIndex}>{content}</strong>;
                              }
                              return segment;
                            })}
                          </p>
                        );
                      }
                      return <p key={uniqueKey}>{line}</p>;
                    });
                  });
                });
              })()}
            </div>

            {/* Code Compiler for HTML, Java, Python, and DSA */}
            {(courseId === 'html' || courseId === 'css' || courseId === 'java' || courseId === 'python' || courseId === 'dsa') &&
              !(courseId === 'dsa' && lessonId === '1') && (
                <CodeCompiler
                  key={lessonId}
                  language={
                    courseId === 'html' ? 'html' :
                      courseId === 'dsa' ? 'python' :
                        courseId
                  }
                />
              )}
          </div>

          {/* Navigation Buttons */}
          <div className="lesson-nav-buttons">
            {prevLesson ? (
              <button
                onClick={() => navigate(`/course/${courseId}/lesson/${prevLesson.id}`)}
                className="nav-btn-prev"
              >
                <div className="nav-btn-content">
                  <span>←</span>
                  <span>PREVIOUS</span>
                </div>
              </button>
            ) : <div />}

            {nextLesson ? (
              <button
                onClick={() => navigate(`/course/${courseId}/lesson/${nextLesson.id}`)}
                className="nav-btn-next"
              >
                <div className="nav-btn-content">
                  <span>NEXT</span>
                  <span>→</span>
                </div>
              </button>
            ) : (
              <button
                onClick={() => navigate(`/course/${courseId}`)}
                className="nav-btn-exit"
              >
                <div className="nav-btn-content">
                  <span>EXIT</span>
                  <span>✓</span>
                </div>
              </button>
            )}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}

export default LessonDetail;
