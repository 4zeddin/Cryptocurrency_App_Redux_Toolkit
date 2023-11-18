import { Routes, Route, Link } from "react-router-dom";
import { Layout, Space } from "antd";
import Navbar from "./components/Navbar";
import './App.css'
import Homepage from "./components/Homepage";
import Cryptocurrencie from "./components/Cryptocurrencie";
import CryptoDetail from "./components/CryptoDetail";
import News from "./components/News";
import Exchanges from "./components/exchanges";
import { Row, Col, Typography } from "antd";
import {
  TwitterOutlined,
  AndroidOutlined,
  AppleOutlined,
} from "@ant-design/icons";

const { Title } = Typography;
export default function App() {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route path="/" element={<Homepage />}></Route>
              <Route
                path="/cryptocurrencies"
                element={<Cryptocurrencie />}
              ></Route>
              <Route path="/exchanges" element={<Exchanges />}></Route>
              <Route path="/crypto/:coinId" element={<CryptoDetail />}></Route>
              <Route path="/news" element={<News />}></Route>
            </Routes>
          </div>
        </Layout>
        <footer className="footer">
          <Row justify="center" align="middle" style={{ paddingTop: "2rem" }}>
            <Col>
              <a
                href="https://twitter.com/your_twitter_handle"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TwitterOutlined
                  style={{ fontSize: "2rem", color: "#1DA1F2" }}
                />
              </a>
            </Col>
            <Col>
              <a
                href="https://play.google.com/store/apps/your_app_id"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AndroidOutlined
                  style={{ fontSize: "2rem", color: "#34A853" }}
                />
              </a>
            </Col>
            <Col>
              <a
                href="https://apps.apple.com/us/app/your-app-id"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AppleOutlined style={{ fontSize: "2rem", color: "grey" }} />
              </a>
            </Col>
          </Row>
          <Row justify="center">
            <Col>
              <Title level={5} style={{ marginTop: "1rem", color: "#666" }}>
                © 2024 Azeddin. All rights reserved.
              </Title>
            </Col>
          </Row>
        </footer>
      </div>
    </div>
  );
}
