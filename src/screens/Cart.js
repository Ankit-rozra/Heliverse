import React from 'react';
import { useSelector } from 'react-redux';

function Cart() {
  const cart = useSelector((state) => state.cart);
  const le = cart.length;
  return (
    <div>
      <h2>Members : {le}</h2>
      {cart.length === 0 ? (
        <h2>You have no member in your team.</h2>
      ) : (
        <ul className="data-list">
          {cart.map((item) => (
            <li key={item.id}>
              <div>
                <img src={item.avatar} alt="Avatar" />
                <div>
                  <p>
                    Name: {item.first_name} {item.last_name}
                  </p>
                  <p>Email: {item.email}</p>
                  <p>Gender: {item.gender}</p>
                  <p>Domain: {item.domain}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;
