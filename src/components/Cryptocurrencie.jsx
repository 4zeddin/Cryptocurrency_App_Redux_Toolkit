import React, { useEffect, useState } from "react";
import millify from "millify";
import { Row, Col, Input, Card } from "antd";
import { useGetCryptosQuery } from "../services/cryptoApi";
import { LoadingOutlined } from "@ant-design/icons";
const { Search } = Input;

const Cryptocurrencie = ({ numberOfCardsToShow }) => {
  const { data, isFetching } = useGetCryptosQuery();
  const [cryptos, setCryptos] = useState([]);
  const [search, setSearch] = useState("");

  // Load search state from local storage on component mount
  useEffect(() => {
    const storedSearch = localStorage.getItem("cryptoSearch");
    if (storedSearch) {
      setSearch(storedSearch);
    }
  }, []);

  // Save search state to local storage when it changes
  useEffect(() => {
    localStorage.setItem("cryptoSearch", search);
  }, [search]);

  useEffect(() => {
    if (data?.data?.coins && search) {
      const filteredCryptos = data.data.coins.filter((c) =>
        c.name.toLowerCase().includes(search.toLowerCase())
      );
      setCryptos(filteredCryptos.slice(0, numberOfCardsToShow));
    } else if (data?.data?.coins) {
      setCryptos(data.data.coins.slice(0, numberOfCardsToShow));
    }
  }, [data, search, numberOfCardsToShow]);

  if (isFetching || !cryptos) {
    return (
      <h3>
        <LoadingOutlined /> Loading...
      </h3>
    );
  }

  return (
    <>
      {!numberOfCardsToShow && (
        <div className="search-crypto">
          <Search
            placeholder="Search Cryptocurrency"
            onChange={(e) => setSearch(e.target.value)}
            style={{
              width: 300,
            }}
          />
        </div>
      )}
      <Row gutter={[32, 32]} >
        {cryptos.map((c, i) => (
          <Col xs={24} sm={12} lg={6} className="crypto-card" key={i}>
            <Card
              title={`${c.rank}. ${c.name}`}
              extra={<img className="crypto-image" src={c.iconUrl} />}
              hoverable
            >
              <p>Price: {millify(c.price)}</p>
              <p>Market Cap: {millify(c.marketCap)}</p>
              <p>Daily Change: {millify(c.change)}</p>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Cryptocurrencie;
