import React from "react";

function PersonalInfo({ formData, setFormData }) {
  return (
    <div className="personal-info-container">
      <input
        type="text"
        placeholder="problemKind"
        value={formData.firstName}
        onChange={(e) => {
          setFormData({ ...formData, problemKind: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="teamViewer"
        value={formData.lastName}
        onChange={(e) => {
          setFormData({ ...formData, teamViewer: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="anyDeskNumber"
        value={formData.username}
        onChange={(e) => {
          setFormData({ ...formData, anyDeskNumber: e.target.value });
        }}
      />
    </div>
  );
}

export default PersonalInfo;
