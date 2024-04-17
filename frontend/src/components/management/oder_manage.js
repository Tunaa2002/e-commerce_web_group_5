import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./order_manage.css";

function OrderManage() {
  const [orders, setOrders] = useState([]);
  return (
    <div className="order-manage">
      <div className="order-block">
        <div className="order-title">
          <h4> Quản lý đơn hàng</h4>
        </div>
        <div className="order-option">
          <div className="option">
            <i class="bi bi-bag-plus"></i>
            <h5>Đơn hàng mới</h5>
          </div>
          <div className="option">
            <i class="bi bi-bag-check"></i>
            <h5>Đơn đã duyệt</h5>
          </div>
          <div className="option">
            <i class="bi bi-bag-check-fill"></i>
            <h5>Đơn hàng đã hoàn thành</h5>
          </div>
          <div className="option">
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
              <th>Mã đơn hàng</th>
              <th>Tên hàng</th>
              <th>Tổng tiền</th>
              <th>Tùy chọn</th>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} class="">
                  <td>{order.id}</td>
                  <td>{order.name}</td>
                  <td>{order.price}</td>
                  <td>
                    <button>Duyệt đơn</button>
                    <button>Hủy đơn</button>
                  </td>
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
