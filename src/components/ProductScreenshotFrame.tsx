/** Frames mockups like product captures — no real screenshots required. */
export function ProductScreenshotFrame({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rd-shot-frame">
      <div className="rd-shot-frame-chrome" aria-hidden="true">
        <span className="rd-shot-dot" />
        <span className="rd-shot-dot" />
        <span className="rd-shot-dot" />
        <span className="rd-shot-title">{title}</span>
      </div>
      <div className="rd-shot-frame-body">{children}</div>
    </div>
  );
}
