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
      </div>
    </div>
  );
}
