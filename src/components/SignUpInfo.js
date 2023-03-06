import React from "react";

function SignUpInfo({ formData, setFormData }) {
  return (
    <div className="sign-up-container">
      <input
        type="text"
        placeholder="Full Name"
        value={formData.fullName}
        onChange={(event) =>
          setFormData({ ...formData, fullName: event.target.value })
        }
      />
      <input
        type="text"
        placeholder="Cell Number"
        // value={formData.password}
        onChange={(event) =>
          setFormData({ ...formData, cellNumber: event.target.value })
        }
      />
      <input
        type="Email"
        placeholder="Email"
        value={formData.confirmPassword}
        onChange={(event) =>
          setFormData({ ...formData, email: event.target.value })
        }
      />
    </div>
  );
}

export default SignUpInfo;
