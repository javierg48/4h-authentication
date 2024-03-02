"use client"


// pages/index.js or pages/your-preferred-page.js
import { useState } from 'react';

export default function Home() {
  const [inputData, setInputData] = useState({
    key1: '',
    key2: '',
    // add other fields as needed
  });

  async function submitHandler(event) {
    event.preventDefault();
    
    const response = await fetch('/api/addToSection1', {
      method: 'POST',
      body: JSON.stringify(inputData),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // const data = await response.json();
    // console.log(data);
  }

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        value={inputData.key1}
        onChange={(e) => setInputData({ ...inputData, key1: e.target.value })}
        placeholder="Key 1"
      />
      <input
        type="text"
        value={inputData.key2}
        onChange={(e) => setInputData({ ...inputData, key2: e.target.value })}
        placeholder="Key 2"
      />
      {/* Add other fields as needed */}
      <button type="submit">Submit</button>
    </form>
  );
}
