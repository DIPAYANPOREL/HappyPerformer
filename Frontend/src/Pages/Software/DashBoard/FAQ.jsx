import React, { useState } from "react";

const FAQ = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Code to handle form submission
    console.log("Form submitted:", { name, email, message });
  };

  return (
    <div>
      <h1>FAQ</h1>
      <div style={{ display: "flex" }}>
        <div style={{ flex: 1 }}>
          <h2>FAQs</h2>
          <table>
            <thead>
              <tr>
                <th>What is JD? </th>
                <th style={{ display: "none" }}>Invisible Column</th>
                <th>Title</th>
              </tr>
            </thead>
            <tbody>
              {/*FAQ*/}
              <tr>
                <td>General</td>
                <td></td>
                <td>
                  <details>
                    <summary>What is Lorem Ipsum?</summary>
                    <p>Lorem Ipsum is simply dummy text of the printing...</p>
                  </details>
                </td>
              </tr>
              {/* Add more FAQ items as needed */}
            </tbody>
          </table>
        </div>
        <div style={{ flex: 1 }}>
          <h2>How can we help you?</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Name:
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <br />
            <label>
              Email:
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <br />
            <label>
              Message:
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </label>
            <br />
            <button type="submit">SUBMIT</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
