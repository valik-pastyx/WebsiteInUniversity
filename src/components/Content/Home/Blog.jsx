import React from "react";
import { Button, Col, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import css from "./Blog.module.css";
import blog from "./img/blog.jpg";

const Blog = () => {
  return (
    <>
      <Row className={css.blog}>
        <Col lg={8} md={7} sm={7}>
          <Image src={blog} fluid />
        </Col>
        <Col lg={4} md={5} sm={5}>
          <div className={css.text}>
            <div className={css.textTitle}>
              Top <span>7</span> Reasons to <span>Travel</span>
            </div>
            <ul>
              <li>Improving the health.</li>
              <li>You learn without even trying.</li>
              <li>You interact with different people.</li>
              <li>You can practice or learn a new language.</li>
              <li>You learn to get around in a new environment.</li>
              <li>
                You are more likely to do things you wouldn’t normally do at
                home.
              </li>
              <li>You grow and become a better you.</li>
            </ul>
            <Link
              href="https://www.topuniversities.com/blog/top-7-reasons-travel-abroad"
              target="_blank"
            >
              <Button variant="outline-warning w-25">More</Button>
            </Link>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Blog;
