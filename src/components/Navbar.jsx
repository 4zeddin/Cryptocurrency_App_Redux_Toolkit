import {Button,Menu,Typography,Avatar} from 'antd';
import {Link} from 'react-router-dom';
import img from '../images/cryptocurrency.png'
import {
  HomeOutlined,
  MoneyCollectOutlined,
  FundOutlined,
  GlobalOutlined,
} from "@ant-design/icons";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={img} size="Large" />
        <Typography.Title level={2} className="logo">
          <Link to="/home">Cryptoverse</Link>
        </Typography.Title>
      </div>
      <Menu theme="dark">
        <Menu.Item icon={<HomeOutlined />}>
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item icon={<FundOutlined />}>
          <Link to="/cryptocurrencies">Cryptocurrencies</Link>
        </Menu.Item>
        <Menu.Item icon={<MoneyCollectOutlined />}>
          <Link to="/exchanges">Exchanges</Link>
        </Menu.Item>
        <Menu.Item icon={<GlobalOutlined />}>
          <Link to="/news">News</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
}

export default Navbar