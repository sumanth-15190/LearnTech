import { htmlContent } from '../pages/courses/Html';
import { cssContent } from '../pages/courses/Css';
import { javascriptContent } from '../pages/courses/Javascript';
import { javaContent } from '../pages/courses/Java';
import { pythonContent } from '../pages/courses/Python';
import { dsaContent } from '../pages/courses/Dsa';

// Centralized courses data with metadata
export const coursesData = [
    {
        id: "html",
        name: "HTML",
        img: "/images/html.png",
        description: "Master HTML - The Foundation of Web Development",
        content: htmlContent
    },
    {
        id: "css",
        name: "CSS",
        img: "/images/css.png",
        description: "Learn CSS - Style your web pages",
        content: cssContent
    },
    {
        id: "javascript",
        name: "JavaScript",
        img: "/images/js.png",
        description: "Learn JavaScript - Add interactivity to your websites",
        content: javascriptContent
    },
    {
        id: "java",
        name: "Java",
        img: "/images/Java-Logo.png",
        description: "Learn Java - An object-oriented programming language",
        content: javaContent
    },
    {
        id: "python",
        name: "Python",
        img: "/images/python.jpg",
        description: "Learn Python - A versatile programming language",
        content: pythonContent
    },
    {
        id: "dsa",
        name: "DSA",
        img: "/images/dsa.png",
        description: "Learn DSA - Fundamental computer science concepts",
        content: dsaContent
    },
];

// Function to search across all courses and lessons
export const searchContent = (query) => {
    if (!query || query.trim() === '') return [];

    const lowerQuery = query.toLowerCase().trim();
    const results = [];

    coursesData.forEach(course => {
        // Search in course name and description
        if (
            course.name.toLowerCase().includes(lowerQuery) ||
            course.description.toLowerCase().includes(lowerQuery)
        ) {
            results.push({
                type: 'course',
                id: course.id,
                name: course.name,
                description: course.description,
                img: course.img
            });
        }

        // Search in lesson titles
        if (course.content && course.content.lessons) {
            course.content.lessons.forEach(lesson => {
                if (lesson.title.toLowerCase().includes(lowerQuery)) {
                    results.push({
                        type: 'lesson',
                        courseId: course.id,
                        courseName: course.name,
                        lessonId: lesson.id,
                        title: lesson.title,
                        icon: lesson.icon || '📖'
                    });
                }
            });
        }
    });

    return results;
};
