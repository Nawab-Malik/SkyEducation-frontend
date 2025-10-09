import React from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { Container, Row, Col, Button, Card, Badge } from "react-bootstrap";

const CourseDetails = () => {
  const { category, courseId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  
  const { course, categoryName } = location.state || {};

  if (!course) {
    return (
      <Container className="py-5">
        <Row className="justify-content-center">
          <Col lg={8} className="text-center">
            <h2>Course Not Found</h2>
            <p>The course you're looking for could not be found.</p>
            <Button 
              variant="primary" 
              onClick={() => navigate('/')}
            >
              Go Back Home
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }

  const handleEnroll = () => {
    navigate('/enroll', { state: { course } });
  };

  return (
    <Container className="py-5">
      <Row className="mb-4">
        <Col>
          <Button 
            variant="outline-primary" 
            onClick={() => navigate('/')}
            className="mb-3"
          >
            ← Back to Home
          </Button>
          <Badge bg="primary" className="mb-2">
            {categoryName || category}
          </Badge>
        </Col>
      </Row>

      <Row>
        <Col lg={8}>
          <Card className="border-0 shadow-sm">
            <Row className="g-0">
              <Col md={5}>
                <img
                  src={course.img}
                  alt={course.title}
                  className="img-fluid rounded-start h-100"
                  style={{ objectFit: "cover", minHeight: "300px" }}
                />
              </Col>
              <Col md={7}>
                <Card.Body className="p-4">
                  <h1 className="h3 fw-bold mb-3 text-primary">
                    {course.title}
                  </h1>
                  <p className="text-muted mb-4">
                    {course.desc}
                  </p>
                  
                  <div className="d-flex flex-column gap-3">
                    <Button 
                      variant="primary" 
                      size="lg"
                      onClick={handleEnroll}
                      className="px-4"
                    >
                      Enroll Now
                    </Button>
                    
                    <Button 
                      variant="outline-secondary"
                      onClick={() => navigate('/courses', { state: { selectedCategory: category } })}
                    >
                      View All {categoryName} Courses
                    </Button>
                  </div>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>

        <Col lg={4}>
          <Card className="border-0 bg-light">
            <Card.Body className="p-4">
              <h5 className="fw-bold mb-3">Course Information</h5>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <strong>Category:</strong> {categoryName || category}
                </li>
                <li className="mb-2">
                  <strong>Course ID:</strong> {course.id}
                </li>
                <li className="mb-2">
                  <strong>Format:</strong> Professional Training
                </li>
                <li className="mb-2">
                  <strong>Certificate:</strong> Yes
                </li>
              </ul>
              
              <div className="mt-4">
                <h6 className="fw-bold">Need Help?</h6>
                <p className="small text-muted">
                  Contact our admissions team for more information about this course.
                </p>
                <Button variant="outline-primary" size="sm">
                  Contact Us
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CourseDetails;