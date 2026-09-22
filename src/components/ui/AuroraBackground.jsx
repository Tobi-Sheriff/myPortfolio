/**
 * Fixed, full-viewport backdrop: a handful of large blurred gradient orbs
 * drifting slowly via CSS keyframes (no canvas/particle library — cheap on
 * the GPU, no JS animation loop) plus a faint grid for texture. Mounted once
 * at the App root so it persists, unchanged, across route transitions.
 */
export function AuroraBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-canvas" aria-hidden="true">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,black,transparent)]" />

      <div className="absolute -top-40 -left-32 h-[32rem] w-[32rem] rounded-full bg-indigo-600/30 blur-[110px] animate-drift-slow" />
      <div className="absolute top-1/3 -right-40 h-[36rem] w-[36rem] rounded-full bg-fuchsia-600/25 blur-[120px] animate-drift-slower" />
      <div className="absolute bottom-[-10rem] left-1/4 h-[30rem] w-[30rem] rounded-full bg-cyan-500/20 blur-[110px] animate-drift-slow" />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-canvas" />
    </div>
  );
}
