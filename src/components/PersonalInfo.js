import React from "react";

function PersonalInfo({ formData, setFormData }) {

  const onOptionChange = e => {
    setFormData({ ...formData, problemKind: e.target.value });
  }


  return (
    <div className="personal-info-container">

      <input
        type="radio"
        name="topping"
        value="CardBlocked"
        id="blocked"
        checked={formData.problemKind === "CardBlocked"}
        onChange={onOptionChange}
      />
      <label htmlFor="blocked">כרטיס חכם נעול</label>

      <input
        type="radio"
        name="topping"
        value="CardUnRecognized"
        id="unrecog"
        checked={formData.problemKind === "CardUnRecognized"}
        onChange={onOptionChange}
      />
      <label htmlFor="unrecog">כרטיס חכם לא מזוהה</label>
      
      <input
        type="radio"
        name="topping"
        value="GovSite"
        id="regular"
        checked={formData.problemKind === "GovSite"}
        onChange={onOptionChange}
      />
      <label htmlFor="regular">כניסה לאתר ממשלתי</label>

      {/* <h3>problemKind: {formData.problemKind}</h3> */}
    </div>
  );
}

export default PersonalInfo;
