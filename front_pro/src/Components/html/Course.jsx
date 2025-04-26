import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../css/asd.css';
import Nav from './Nav';

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate(); // To navigate to course details page

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/courses/')
      .then((response) => {
        setCourses(response.data);
      })
      .catch((error) => {
        console.error('Error fetching course data:', error);
      });
  }, []);

  const handleCourseClick = (id) => {
    navigate(`/Coursedetails/${id}`); // Redirect to the course details page
  };

  return (
    <div className="course-container">
      <Nav />
      <h2 className="course-heading">Our Courses</h2>
      <div className="course-grid">
        {courses.map((course) => (
          <div
            key={course.id}
            className="course-card"
            onClick={() => handleCourseClick(course.id)} // Make the entire card clickable
          >
            <img
              src={course.image}
              alt={course.title}
              className="course-image"
            />
            <h3 className="course-title">{course.title}</h3>
            {/* Add additional course information if needed */}
            {/* <p className="course-description">{course.description}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
