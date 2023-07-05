import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../redux/action';

const MyComponent = () => {
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
    item.available = false;
  };
  // States
  const [selectedGender, setSelectedGender] = useState('All');
  const [selectedAvailability, setSelectedAvailability] = useState('All');
  const [selectedDomain, setSelectedDomain] = useState('All');
  const [searchName, setSearchName] = useState('');
  //handlers
  const handleGenderChange = (event) => {
    setSelectedGender(event.target.value);
  };

  const handleAvailabilityChange = (event) => {
    setSelectedAvailability(event.target.value);
  };

  const handleDomainChange = (event) => {
    setSelectedDomain(event.target.value);
  };

  const handleNameChange = (event) => {
    setSearchName(event.target.value);
  };
  // Filtering the data
  const filteredData = data.filter(
    (item) =>
      (selectedGender === 'All' || item.gender === selectedGender) &&
      (selectedAvailability === 'All' ||
        (selectedAvailability === 'Available' && item.available) ||
        (selectedAvailability === 'Not Available' && !item.available)) &&
      (selectedDomain === 'All' || item.domain === selectedDomain) &&
      (searchName === '' ||
        item.first_name.toLowerCase().includes(searchName.toLowerCase()) ||
        item.last_name.toLowerCase().includes(searchName.toLowerCase()))
  );
  const ll = filteredData.length;
  const len = Math.floor(ll / 20);
  //Pagination
  const [page, change] = useState(0);
  function decrease() {
    if (page <= 0) {
      change(len * 20);
    } else {
      change(page - 20);
    }
  }
  function increase() {
    if (page >= len * 20) {
      change(0);
    } else {
      change(page + 20);
    }
  }
  //Main body
  return (
    <div>
      <div className="sorting">
        <label>Gender:</label>
        <select
          value={selectedGender}
          onChange={handleGenderChange}
          className="nav"
        >
          <option value="All">All</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Agender">Agender</option>
          <option value="Bigender">Bigender</option>
          <option value="Polygender">Polygender</option>
        </select>

        <label>Availability:</label>
        <select
          value={selectedAvailability}
          onChange={handleAvailabilityChange}
          className="nav"
        >
          <option value="All">All</option>
          <option value="Available">Available</option>
          <option value="Not Available">Not Available</option>
        </select>

        <label>Domain:</label>
        <select
          value={selectedDomain}
          onChange={handleDomainChange}
          className="nav"
        >
          <option value="All">All</option>
          <option value="Sales">Sales</option>
          <option value="Finance">Finance</option>
          <option value="Marketing">Marketing</option>
          <option value="IT">IT</option>
          <option value="Management">Management</option>
          <option value="UI Designing">UI Designing</option>
          <option value="Business Development">Business Development</option>
        </select>
        <label>Name:</label>
        <input
          type="text"
          value={searchName}
          onChange={handleNameChange}
          placeholder="Search by name"
          className="nav"
        />
      </div>

      <h1>Members of the Company : {ll}</h1>
      <ul className="data-list">
        {filteredData.slice(page, page + 20).map((item) => (
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
                <p>
                  Availability: {item.available ? 'Available' : 'Not Available'}
                </p>
              </div>
              <button
                onClick={() => handleAddToCart(item)}
                disabled={!item.available}
              >
                Add to Team
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="pages">
        <button className="page" onClick={() => decrease()}>
          Back
        </button>
        <span>
          {page}
          {' / '}
          {page + 20}
        </span>
        <button className="page" onClick={() => increase()}>
          Next
        </button>
      </div>
    </div>
  );
};

export default MyComponent;
