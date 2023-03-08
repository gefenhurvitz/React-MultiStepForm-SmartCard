import React from "react";

function LastStage({ whatsAppBtnFlag }) {
  return (
    <div className="other-info-container">
      <h3>לקוח יקר, תודה שפנית אלינו</h3>
      <h3>בבקשה לחץ ״שליחה״ כדי לשלוח הודעה</h3>
      <a href={whatsAppBtnFlag} rel="noreferrer" target="_blank">
            <button style={{ backgroundColor: "green" }}>send whatsapp</button>
          </a>
    </div>
  );
}

export default LastStage;
