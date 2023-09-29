import { Routes, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import Navbar from "./components/Navbar";
import './App.css'
import Homepage from "./components/Homepage";
import Cryptocurrencie from "./components/Cryptocurrencie";
import CryptoDetail from "./components/CryptoDetail";
import News from "./components/News";
import Exchanges from "./components/exchanges";

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
        <div className="footer">
          <Typography.Title
            level={5}
            style={{ color: "white", textAlign: "center" }}
          >
            Cryptoverse <br />
            All rights reserved
          </Typography.Title>
          <Space>
            <Link path="/">Home</Link>
            <Link path="/exchanges">Exchanges</Link>
            <Link path="/news">News</Link>
          </Space>
        </div>
      </div>
    </div>
  );
}
