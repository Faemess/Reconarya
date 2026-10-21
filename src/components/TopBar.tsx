import { useAppStore } from "../store/app";

export function TopBar() {
  const projectName = useAppStore((s) => s.projectName);

  return (
    <header className="flex h-11 shrink-0 items-center justify-between border-b border-zinc-800 bg-zinc-900 px-4">
      <span className="text-sm font-semibold tracking-wide text-zinc-100">
        Reconarya
      </span>
      {/* Step 3: becomes a dropdown with "New project…" / "Delete current project". */}
      <div className="rounded border border-zinc-700 px-3 py-1 text-xs text-zinc-400">
        {projectName ?? "No project"}
      </div>
    </header>
  );
}