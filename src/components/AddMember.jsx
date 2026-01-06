import React, { useState } from "react";

const AddMember = ({ members, setMembers }) => {
  const [memberName, setMemberName] = useState("");

  const addMember = () => {
    if (memberName === "") {
      alert("Please enter member name");
      return;
    }

    setMembers([...members, memberName]);
    setMemberName("");
  };

  return (
    <div style={{ padding: "20px", border: "1px solid #ccc" }}>
      <h2>Add Room Members</h2>

      <input
        type="text"
        placeholder="Enter member name"
        value={memberName}
        onChange={(e) => setMemberName(e.target.value)}
      />

      <button onClick={addMember} style={{ marginLeft: "10px" }}>
        Add
      </button>

      <ul>
        {members.map((member, index) => (
          <li key={index}>{member}</li>
        ))}
      </ul>
    </div>
  );
};

export default AddMember;
