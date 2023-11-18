import React from "react";
import { Row, Col, Typography } from "antd";
import {
  TwitterOutlined,
  GithubOutlined,
  GoogleOutlined,
  AppleOutlined,
} from "@ant-design/icons";

const { Title } = Typography;

const Footer = () => {
  return (
    <footer className="footer">
      <Row justify="center" align="middle" style={{ paddingTop: "2rem" }}>
        <Col>
          <a
            href="https://twitter.com/your_twitter_handle"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterOutlined style={{ fontSize: "2rem", color: "#1DA1F2" }} />
          </a>
        </Col>
        <Col>
          <a
            href="https://discord.com/your_discord_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubOutlined style={{ fontSize: "2rem", color: "#7289DA" }} />
          </a>
        </Col>
        <Col>
          <a
            href="https://play.google.com/store/apps/your_app_id"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GoogleOutlined style={{ fontSize: "2rem", color: "#34A853" }} />
          </a>
        </Col>
        <Col>
          <a
            href="https://apps.apple.com/us/app/your-app-id"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AppleOutlined style={{ fontSize: "2rem", color: "#000000" }} />
          </a>
        </Col>
      </Row>
      <Row justify="center">
        <Col>
          <Title level={5} style={{ marginTop: "1rem", color: "#666" }}>
            © 2023 Your Website Name. All rights reserved.
          </Title>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
