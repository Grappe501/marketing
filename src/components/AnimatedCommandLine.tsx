/** Decorative terminal-style line; motion from CSS keyframes. */
export function AnimatedCommandLine() {
  return (
    <div className="rd-cmd-line" aria-hidden="true">
      <span className="rd-cmd-prompt">&gt;</span>
      <span className="rd-cmd-text"> reddirt status --lanes=all --posture=governed</span>
      <span className="rd-cmd-cursor" />
    </div>
  );
}
