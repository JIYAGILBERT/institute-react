import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Nav from "./Nav";
import "../css/courses.css";

const CourseDetails = () => {
  const { id } = useParams(); // <-- get course ID from URL
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    setLoading(true); // Set loading to true when fetching data
    axios.get(`http://127.0.0.1:8000/api/courses/${id}/`) // Correct the URL with quotes
      .then((response) => {
        setCourse(response.data);
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch((error) => {
        setError("Error fetching course details.");
        setLoading(false); // Stop loading on error
        console.error("Error fetching course details:", error);
      });
  }, [id]);

  if (loading) return <div className="loading-message">Loading course details...</div>;
  if (error) return <div className="error-message">{error}</div>;

  return (
    <div className="course-container">
      <Nav />
      <div className="course-details-page">
        <img
          src={course.image}
          alt={course.title}
          className="course-detail-image"
        />
        <h2 className="course-title">{course.title}</h2>
        <p>{course.description}</p>
        <p>
          <strong>Duration:</strong> {course.duration}
        </p>
      </div>
    </div>
  );
};

export default CourseDetails;
