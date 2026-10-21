import { invoke } from "@tauri-apps/api/core";

// Thin wrapper around invoke. Typed per-command helpers are added in Step 2+.
// All Rust commands return Result<T, String>, so rejections arrive as strings.
export async function call<T>(
  cmd: string,
  args?: Record<string, unknown>,
): Promise<T> {
  return invoke<T>(cmd, args);
}