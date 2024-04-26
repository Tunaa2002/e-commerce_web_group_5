import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./order_manage.css";

function OrderManage() {
  const [orders, setOrders] = useState([]);
  const [stt, setStt] = useState("neworders");

  const handleNewOrder = async (newOrder, status) => {
    setOrders({
      ...newOrder,
      [status]: status,
    });
    try {
      fetch("https", {
        method: "PUT",
        body: JSON.stringify(newOrder),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const orderData = async (status) => {
    setStt(status);
    try {
      const response = await fetch(`https://api.example.com/${stt}`);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const json = await response.json();
      setOrders(json);
      console.log(json);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="order-manage">
      <div className="order-block">
        <div className="order-title">
          <h4> Quản lý đơn hàng</h4>
        </div>
        <div className="order-option">
          <div className="option" onClick={() => orderData("neworders")}>
            <i class="bi bi-bag-plus"></i>
            <h5>Đơn hàng mới</h5>
          </div>
          <div className="option" onClick={() => orderData("approvedorders")}>
            <i class="bi bi-bag-check"></i>
            <h5>Đơn đã duyệt</h5>
          </div>
          <div className="option" onClick={() => orderData("completeorders")}>
            <i class="bi bi-bag-check-fill"></i>
            <h5>Đơn hàng đã hoàn thành</h5>
          </div>
          <div className="option" onClick={() => orderData("cancelledorders")}>
            <i class="bi bi-bag-dash"></i>
            <h5>Đơn hàng đã hủy</h5>
          </div>
        </div>
      </div>
      <div className="infor-block">
        <div className="infor-title">
          <h4>Thông tin</h4>
        </div>
        <div className="order-infor">
          <table className="order-table">
            <thead>
              <th> Mã đơn hàng</th>
              <th>Thời gian đặt hàng</th>
              <th>Tổng tiền</th>
              {stt === "neworders" && (<th>Tùy chọn</th>)}
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} class="">
                  <td>{order.id}</td>
                  <td>{order.time}</td>
                  <td>{order.price}</td>
                  {stt === "neworders" && (
                    <td>
                      <button onClick={() => handleNewOrder(order, "approved")}>
                        Duyệt đơn
                      </button>
                      <button
                        onClick={() => handleNewOrder(order, "cancelled")}
                      >
                        Hủy đơn
                      </button>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default OrderManage;
