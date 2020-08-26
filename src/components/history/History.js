import React from "react";
import HistoryItem from "./HistoryItem";

function History({ transactions, delTransaction }) {
  return (
    <section className="history">
      <h3>История расходов</h3>
      <ul className="history__list">
        {transactions.map((item) => (
          <HistoryItem
            key={item.id}
            transaction={item}
            delTransaction={delTransaction} />
        ))}
      </ul>
    </section>
  );
}

export default History;
