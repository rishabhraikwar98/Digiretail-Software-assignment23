import React, { useState } from "react";

function UserForm({ onAddUser }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [suite, setSuit] = useState("");
  const [street, setStreet] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [city, setCity] = useState("");
  const [cName, setCname] = useState("");
  const [dec, setDec] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (
      name === "" ||
      email === "" ||
      username === "" ||
      phone === "" ||
      website === "" ||
      suite === "" ||
      street === "" ||
      zipcode === "" ||
      city === "" ||
      cName === "" ||
      dec === ""
    ) {
      return;
    }
    const newUser = {
      name,
      email,
      username,
      phone,
      id: Date.now(),
      website,
      address: {
        street,
        suite,
        city,
        zipcode,
        geo: {
          lat: "",
          lng: "",
        },
      },
      company:{
        name:cName,
        catchPhrase:dec,
        bs:""
      }
    };

    //console.log(newUser);
    onAddUser(newUser);

    setName("");
    setEmail("");
    setCity('')
    setCname('')
    setPhone('')
    setDec('')
    setUsername('')
    setSuit('')
    setZipcode('')
    setWebsite('')
    setStreet('')
  }

  return (
    <>
      <h1>Add A New User</h1>
      <hr />
      <div className="user-form">
        <form onSubmit={handleSubmit}>
        <h3 style={{textDecoration:"underline"}}>Details</h3>
          <label>
            Name:
            <input
              type="text"
              required
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </label>
          <label>
            Phone:
            <input
              type="text"
              required
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
            />
          </label>
          <label>
            Username:
            <input
              type="text"
              required
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </label>
          <label>
            Website:
            <input
              type="text"
              required
              value={website}
              onChange={(event) => setWebsite(event.target.value)}
            />
          </label>
          <h3 style={{textDecoration:"underline"}}>Address</h3>
          <label>
            Suite:
            <input
              type="text"
              value={suite}
              onChange={(event) => setSuit(event.target.value)}
            />
          </label>
          <label>
            Street:
            <input
              type="text"
              value={street}
              onChange={(event) => setStreet(event.target.value)}
            />
          </label>
          <label>
            ZIP:
            <input
              type="text"
              value={zipcode}
              onChange={(event) => setZipcode(event.target.value)}
            />
          </label>
          <label>
            City:
            <input
              type="text"
              value={city}
              onChange={(event) => setCity(event.target.value)}
            />
          </label>
          <h3 style={{textDecoration:"underline"}}>Company Details</h3>
          <label>
            Name:
            <input
              type="text"
              value={cName}
              onChange={(event) => setCname(event.target.value)}
            />
          </label>
          <label>
            Decription: 
            <input
              type="text"
              value={dec}
              onChange={(event) => setDec(event.target.value)}
            />
          </label>

          <button className="add-user-btn" type="submit">
            Add User
          </button>
        </form>
      </div>
    </>
  );
}

export default UserForm;
