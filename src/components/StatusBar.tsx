import { useAppStore } from "../store/app";

export function StatusBar() {
  const {
    projectName,
    toolCount,
    scopeCount,
    assetCount,
    scheduleCount,
    toast,
    showToast,
  } = useAppStore();

  return (
    <footer className="flex h-7 shrink-0 items-center justify-between border-t border-zinc-800 bg-zinc-900 px-3 text-xs text-zinc-400">
      <span>
        Project: {projectName ?? "none"} | Tools: {toolCount} | Scope:{" "}
        {scopeCount} | Assets: {assetCount} | Schedules: {scheduleCount} |
        v0.1.0
      </span>
      <div className="flex items-center gap-3">
        {toast && <span className="text-emerald-400">{toast}</span>}
        {/* Step 2/3: calls reload_tools(). For now it only proves the toast works. */}
        <button
          onClick={() => showToast("Tool loading arrives in Step 2")}
          className="rounded border border-zinc-700 px-2 py-0.5 hover:bg-zinc-800"
        >
          Reload tools
        </button>
      </div>
    </footer>
  );
}