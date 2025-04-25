import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/asd.css'
import Nav from'./Nav'

export default function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/courses/')
      .then(res => setCourses(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="courses-container">
        <Nav/>
      <h2 className="title">Courses</h2>
      <div className="grid-container">
        {courses.map((course, index) => (
          <div className="course-card" key={index}>
            <img src={course.image} alt={course.title} className="course-image" />
            <h3 className="course-title">{course.title}</h3>
            {/* <p className="course-description">{course.description}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
}