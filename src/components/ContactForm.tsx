"use client";

export function ContactForm() {
  return (
    <form
      className="rd-panel"
      style={{ padding: "1.1rem", display: "grid", gap: "0.85rem", maxWidth: 640 }}
      onSubmit={(e) => e.preventDefault()}
    >
      <fieldset style={{ border: "none", margin: 0, padding: 0 }}>
        <legend className="rd-muted" style={{ fontSize: "0.88rem", marginBottom: "0.5rem" }}>
          Conversation type
        </legend>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.65rem" }}>
          <label style={{ display: "flex", gap: "0.35rem", alignItems: "center", fontSize: "0.9rem" }}>
            <input type="radio" name="intent" value="walkthrough" defaultChecked />
            Walkthrough
          </label>
          <label style={{ display: "flex", gap: "0.35rem", alignItems: "center", fontSize: "0.9rem" }}>
            <input type="radio" name="intent" value="architecture" />
            Architecture review
          </label>
        </div>
      </fieldset>
      <label style={{ display: "grid", gap: "0.35rem", fontSize: "0.88rem", color: "var(--muted)" }}>
        Name
        <input className="rd-input" name="name" type="text" autoComplete="name" />
      </label>
      <label style={{ display: "grid", gap: "0.35rem", fontSize: "0.88rem", color: "var(--muted)" }}>
        Email
        <input className="rd-input" name="email" type="email" autoComplete="email" />
      </label>
      <label style={{ display: "grid", gap: "0.35rem", fontSize: "0.88rem", color: "var(--muted)" }}>
        Organization / campaign
        <input className="rd-input" name="org" type="text" autoComplete="organization" />
      </label>
      <label style={{ display: "grid", gap: "0.35rem", fontSize: "0.88rem", color: "var(--muted)" }}>
        Role
        <input className="rd-input" name="role" type="text" autoComplete="organization-title" />
      </label>
      <label style={{ display: "grid", gap: "0.35rem", fontSize: "0.88rem", color: "var(--muted)" }}>
        Show us the race you are trying to run
        <textarea
          className="rd-input"
          id="contact-goals"
          name="goals"
          rows={5}
          placeholder="Statewide primary? general? ballot fight? Timeline, team size, toughest lane (comms, field, finance), and what you want the operating picture to solve."
        />
      </label>
      <button type="submit" className="rd-btn rd-btn-primary" disabled aria-describedby="contact-static-note">
        Request walkthrough (disabled — static marketing build)
      </button>
      <p id="contact-static-note" className="rd-muted" style={{ margin: 0, fontSize: "0.88rem" }}>
        Static marketing build: connect intake in a future deployment pass. No submission, no CRM routing, no analytics in this repository slice.
      </p>
    </form>
  );
}
