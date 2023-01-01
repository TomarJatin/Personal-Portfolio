import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, live, code }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx" style={{height: "200px", display: "flex", flexDirection: "column", alignItems: "center"}}>
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <p>{ live && <a href={live}>Live</a> } | {code && <a href={code}>Code</a>}</p>
        </div>
      </div>
    </Col>
  )
}