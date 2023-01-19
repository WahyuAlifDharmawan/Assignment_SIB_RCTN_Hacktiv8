import axios from "axios";
import { API } from "../api/api";
import { useState, useEffect } from "react";

const Currency = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get(API);
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1 className="my-5 text-center">DISPLAY CURRENCY RATES</h1>
      <div className="p-4">
        <table className="table table-hover">
          <thead>
            <tr className="table-dark text-center">
              <th>CURRENCY</th>
              <th>WE BUY</th>
              <th>EXCHANGE RATE</th>
              <th>WE SELL</th>
            </tr>
          </thead>
          <tbody>
            {data.rates &&
              Object.keys(data.rates).map((currency, dataCurrency) => (
                <tr className="table-light text-center" key={dataCurrency}>
                  <td>{currency}</td>
                  <td>
                    {(
                      parseFloat(data.rates[currency]) +
                      data.rates[currency] * 0.05
                    ).toFixed(4)}
                  </td>
                  <td>{parseFloat(data.rates[currency]).toFixed(4)}</td>
                  <td>
                    {(
                      parseFloat(data.rates[currency]) -
                      data.rates[currency] * 0.05
                    ).toFixed(4)}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        <h5 className="my-5 text-center">Rates are based from 1 USD</h5>
        <h5 className="my-5 text-center">
          This application uses API from https://currencyfreaks.com/
        </h5>
      </div>
    </div>
  );
};

export default Currency;