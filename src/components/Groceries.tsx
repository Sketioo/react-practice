import React from "react";

const Groceries = () => {
  return (
    <div className="container mt-4">
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Description</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Milk</td>
            <td>$5.00</td>
            <td>Groceries</td>
            <td>
              <button className="btn btn-outline-danger btn-sm">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Groceries;
