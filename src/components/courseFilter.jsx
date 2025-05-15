const CourseFilter = ({ courses, selectedCourse, onCourseChange }) => {
  return (
    <div className="course-filter">
      <select 
        value={selectedCourse || ''} 
        onChange={(e) => onCourseChange(e.target.value || null)}
      >
        <option value="">Todos los cursos</option>
        {courses.map((course) => (
          <option key={course._id} value={course._id}>
            {course.title} {/* Aquí usas title, no name */}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CourseFilter;
