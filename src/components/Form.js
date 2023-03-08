import React, { useState } from "react";
import SignUpInfo from "./SignUpInfo";
import PersonalInfo from "./PersonalInfo";
import LastStage from "./LastStage";
import RemoteControl from "./RemoteControl";

function Form() {
  const [page, setPage] = useState(0);
  const [whatsAppBtnFlag, setWhatsAppBtnFlag] = useState("");

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    cellNumber: "",
    anyDeskNumber: "",
    teamViewer: "",
    problemKind: "",
    anyNotes: "",
    other: "",
  });

  const FormTitles = ["פרטים אישיים", "תיאור הבעיה", "השתלטות מרחוק", "סיכום"];

  const PageDisplay = () => {
    if (page === 0) {
      return <SignUpInfo formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <PersonalInfo formData={formData} setFormData={setFormData} />;
    } else if (page === 2) {
      return <RemoteControl formData={formData} setFormData={setFormData} />;
    } else {
      return <LastStage whatsAppBtnFlag={whatsAppBtnFlag} />;
    }
  };

  return (
    <div className="form">
      <div className="progressbar">
        <div
          style={{
            width:
              page === 0
                ? "25%"
                : page === 1
                ? "50%"
                : page === 2
                ? "75%"
                : "100%",
          }}
        ></div>
      </div>
      <div className="form-container">
        <div className="header">
          <h1>{FormTitles[page]}</h1>
        </div>
        <div className="body">{PageDisplay()}</div>
        <div className="footer">
          <button
            disabled={page === 0}
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
          >
            חזור
          </button>


          <button
            disabled={page === 3}
            onClick={() => {
              // before the last page
              if (page === FormTitles.length - 2) {
                // set the whatsapp message content
                setWhatsAppBtnFlag(
                  "https://wa.me/972523431188?text=" +
                    `hey Gefen!%0A` +
                    `my name is: ${formData.fullName}%0A` +
                    `my email is: ${formData.email}%0A` +
                    `my number is ${formData.cellNumber}%0A` +
                    `i would like you to help me with: ${formData.problemKind}%0A` +
                    `my AnyDesk number is: ${formData.anyDeskNumber}%0A` +
                    `my TeamViewer number is: ${formData.teamViewer}%0A`
                );
                console.log("set whatsapp message");
                setPage((currPage) => currPage + 1);
              } else {
                setPage((currPage) => currPage + 1);
              }
            }}
          >
            {page === FormTitles.length - 1 ? "שלח" : "המשך"}
          </button>
        </div>
        <h4>{page}</h4>
      </div>
      <h4>Made by Gefen</h4>
    </div>
  );
}

export default Form;

// https://wa.me/972523431188?text=היי גפן הגעתי מהאתר ואשמח לעזרה
