import React, { useMemo } from "react";
import { usePortfolioMetrics } from "./usePortfolioMetrics";
import "./StockList.css";
import { useStocks } from "./StockContext";

const StockList = () => {
  const { stocks, deleteStock } = useStocks();
  const { stocks: enrichedStocks, totalProfitLoss } =
    usePortfolioMetrics(stocks);
<<<<<<< HEAD:src/StockList.jsx

  const formatQuantity = (value) =>
    new Intl.NumberFormat("en-US", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);

  const formatCurrency = (value) =>
    new Intl.NumberFormat("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);

  const profitArrow = (isProfit) => (isProfit ? "▲" : "▼");

  const arrowColor = (isProfit) => (isProfit ? "green" : "red");

=======
>>>>>>> parent of e4dc50b (Merge pull request #3 from franciskwang71/stocklist):KwangWeeWen-Capstone/src/StockList.jsx
  const sortedStocks = useMemo(() => {
    return [...enrichedStocks].sort((a, b) => a.symbol.localeCompare(b.symbol));
  }, [enrichedStocks]);

  if (stocks.length === 0) {
    return (
      <div className="container">
        <p style={{ fontStyle: "italic", opacity: 0.7 }}>
          No stocks added yet.
        </p>
      </div>
    );
  }
  return (
    <div className="container">
      <table className="stock-table">
        <tbody>
          <tr>
            <th>Symbol</th>
            <th>Quantity</th>
            <th>Purchase Price</th>
            <th>Current Price</th>
            <th>Profit/Loss</th>
          </tr>
          {sortedStocks.map((stock, index) => (
            <tr key={index}>
              <td>{stock.symbol}</td>
              <td>{formatQuantity(stock.quantity)}</td>
              <td>${formatCurrency(stock.purchasePrice)}</td>
              <td>${formatCurrency(stock.currentPrice)}</td>
              <td
                style={{ color: arrowColor(stock.isProfit), fontWeight: 600 }}
              >
                {profitArrow(stock.isProfit)} $
                {formatCurrency(stock.profitLoss)}
              </td>

              <td>
                <button className="delete-btn" onClick={() => deleteStock(stock.symbol)}
                >
                  ✕
                </button>
              </td>
            </tr>
          ))}
          <tr>
<<<<<<< HEAD:src/StockList.jsx
            <td colSpan={4} style={{ fontWeight: "bold" }}>
              Portfolio Value
=======
            <td colSpan="4" style={{ fontWeight: "bold" }}>
              Total P/L
>>>>>>> parent of e4dc50b (Merge pull request #3 from franciskwang71/stocklist):KwangWeeWen-Capstone/src/StockList.jsx
            </td>
            <td
              style={{
                fontWeight: "bold",
                color: arrowColor(totalProfitLoss >= 0),
              }}
            >
              {profitArrow(totalProfitLoss >= 0)} $
              {formatCurrency(totalProfitLoss)}
            </td>
<<<<<<< HEAD:src/StockList.jsx

            <td></td>
=======
>>>>>>> parent of e4dc50b (Merge pull request #3 from franciskwang71/stocklist):KwangWeeWen-Capstone/src/StockList.jsx
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default StockList;
