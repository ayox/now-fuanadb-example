import React from "react";

export default ({ creditCard, firstName, loading, lastName, telephone }) => (
  <div className="table table-row">
    <p className={loading ? "loading" : ""}>
      {firstName} {lastName}
    </p>{" "}
    <p className={`telephone ${loading ? "loading" : ""}`}>{telephone}</p>
    <p className={`credit-card credit-card-number ${loading ? "loading" : ""}`}>
      {creditCard && (
        <img style={{ width: 20, height: 20 }} src="/icons/visa.jpeg" />
      )}
      {creditCard}
    </p>
  </div>
);
