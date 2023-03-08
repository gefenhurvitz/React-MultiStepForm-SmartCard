import React from "react";

function RemoteControl({  formData, setFormData  }) {
  return (
    <div className="other-info-container">
      <h3>אנא מלא פרטי השתלטות מרחוק</h3>
      <a href={'https://150.co.il/'} rel="noreferrer" target="_blank">
      <h3>להורדת התוכנות</h3>
      </a>
      <input
        type="text"
        placeholder="teamViewer"
        // value={formData.lastName}
        onChange={(e) => {
          setFormData({ ...formData, teamViewer: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="anyDeskNumber"
        // value={formData.username}
        onChange={(e) => {
          setFormData({ ...formData, anyDeskNumber: e.target.value });
        }}
      />

    </div>
  );
}

export default RemoteControl;
