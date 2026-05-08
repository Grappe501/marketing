/** Before / after suppression snapshot — conceptual only. */
export function SuppressionDiffMock() {
  return (
    <div className="rd-supp-mock" role="img" aria-label="Illustration: suppression list diff before send">
      <div className="rd-supp-mock-col">
        <p className="rd-supp-mock-h">Pre-flight list</p>
        <ul className="rd-supp-mock-ul">
          <li>42,180 recipients</li>
          <li>Suppressed: 1,204</li>
          <li>Consent flagged: 88</li>
        </ul>
      </div>
      <div className="rd-supp-mock-divider" aria-hidden="true" />
      <div className="rd-supp-mock-col">
        <p className="rd-supp-mock-h">Post-diff (locked)</p>
        <ul className="rd-supp-mock-ul">
          <li>40,912 send-eligible</li>
          <li>Δ −1,268 net removal</li>
          <li>Operator sign-off: required</li>
        </ul>
      </div>
    </div>
  );
}
