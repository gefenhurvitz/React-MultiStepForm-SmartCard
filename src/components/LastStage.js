import React from "react";

function LastStage({ whatsAppBtnFlag }) {
  return (
    <div className="other-info-container">
      <h3>לקוח יקר, תודה שפנית אלינו</h3>
      <h3>ההודעה מוכנה לשליחה</h3>
      <a href={whatsAppBtnFlag} rel="noreferrer" target="_blank">
            <button style={{ backgroundColor: "green" }}>שליחת הודעת וואטסאפ לעזרה</button>
          </a>
    </div>
  );
}

export default LastStage;
