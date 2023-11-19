import React, { useEffect, useState } from "react";
import millify from "millify";
import { Row, Col, Input, Card } from "antd";
import { useGetCryptosQuery } from "../services/cryptoApi";
import { Link } from "react-router-dom";
import Loader from "./Loader";
const { Search } = Input;

const Cryptocurrencie = ({ numberOfCardsToShow }) => {
  const { data, isLoading, isError } = useGetCryptosQuery();
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

  if (isLoading) {
    return (
      <h1>
        <Loader />
      </h1>
    );
  }

  if (isError) {
    return <p>Error fetching data</p>;
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
      <Row gutter={[32, 32]}>
        {cryptos.map((c) => (
          <Col xs={24} sm={12} lg={6} className="crypto-card">
            <Link to={`/crypto/${c.uuid}`} key={c.uuid}>
              <Card
                title={`${c.rank}. ${c.name}`}
                extra={<img className="crypto-image" src={c.iconUrl} />}
                hoverable
              >
                <p>Price: {millify(c.price)}</p>
                <p>Market Cap: {millify(c.marketCap)}</p>
                <p>Daily Change: {millify(c.change)}</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Cryptocurrencie;
