import React from 'react';

const CourseFilter = ({ courses = [], selectedCourse, onCourseChange }) => {
  if (!Array.isArray(courses)) {
    console.error('Courses is not an array:', courses);
    return null;
  }

  return (
    <div className="course-filter">
      <select
        value={selectedCourse || ''}
        onChange={(e) => onCourseChange(e.target.value || null)}
      >
        <option value="">Todos los cursos</option>
        {courses.map((course) => (
          <option key={course._id} value={course._id}>
            {course.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CourseFilter;
