// import React from "react";
// import { Container, Row, Col, Card, Button } from "react-bootstrap";
// import { GiMedal } from "react-icons/gi";
// import "./Certifications.css";

// const Certifications = () => {
//   const certifications = [
//     {
//       title: "Programming with JavaScript",
//       issuer: "Coursera",
//       date: "Dec 2024",
//       link: "https://www.coursera.org/account/accomplishments/verify/20TXZHR1TSJX"
//     },
//     {
//       title: "Introduction to Git and GitHub",
//       issuer: "Coursera",
//       date: "Jul 2024",
//       link: "https://www.coursera.org/account/accomplishments/verify/LBD9K8VBTWAQ"
//     },
//     {
//       title: "Introduction to CSS in Web Development",
//       issuer: "Coursera",
//       date: "June 2024",
//       link: "https://coursera.org/verify/69VG484MNX3G"
//     },
//     {
//       title: "PHP Development with ChatGPT: Practical Web Development",
//       issuer: "Coursera",
//       date: "July 2024",
//       link: "https://coursera.org/verify/PRZBNBZXATGQ"
//     },
//     {
//       title: "Web Development in React.js: Build a Web App",
//       issuer: "Coursera",
//       date: "July 2024",
//       link: "https://coursera.org/verify/S9FGW2WXZFZS"
//     },
//     {
//       title: "Web Development in React.js: Build a Web App",
//       issuer: "Coursera",
//       date: "July 2024",
//       link: "https://coursera.org/verify/S9FGW2WXZFZS"
//     },
//     {
//       title: "AWS Workshop",
//       issuer: "Coursera",
//       date: "July 2024",
//       link: "https://drive.google.com/file/d/1h9tBIEIFzxRaTXb7C7AR0atyp1RHVT1g/view?ts=66f7c461"
//     },
//     {
//       title: "Frontend Developer Intern",
//       issuer: "Vinyasa Tech Solutions",
//       date: "Dec 2024",
//       link: "/Internship Certificate.pdf"
//     }
//   ];

//   return (
//     <section id="certifications" className="certifications-section uniform-section py-5">
//       <Container>
//         <h2 className="section-heading fw-bold mb-5 text-center">Certifications
//             <p className="text-secondary" style={{ fontSize: "1rem", marginTop: "6px", color: "#555", fontWeight: "400" }}>
//             Certifications I have earned.
//           </p>
//         </h2>
//         <Row className="justify-content-center">
//           {certifications.map((cert, index) => (
//             <Col key={index} md={6} lg={4} className="mb-4 d-flex">
//               <Card className="cert-card w-100">
//                 <div className="cert-icon">
//                   <GiMedal />
//                 </div>
//                 <Card.Body>
//                   <Card.Title>{cert.title}</Card.Title>
//                   <Card.Subtitle className="mb-2 text-muted">
//                     {cert.issuer}
//                   </Card.Subtitle>
//                   <Card.Text className="text-muted small">{cert.date}</Card.Text>
//                     <br></br>
//                   <Button
//                     variant="outline-dark"
//                     size="sm"
//                     href={cert.link}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     View Certificate
//                   </Button>
//                 </Card.Body>
//               </Card>
//             </Col>
//           ))}
//         </Row>
//       </Container>
//     </section>
//   );
// };

// export default Certifications;
