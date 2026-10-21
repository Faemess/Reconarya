// Module tree matches the agreed folder layout. Most are empty until Step 2.
mod commands;
mod models;
mod project;
mod storage;
mod tool_scan;

pub fn run() {
    tauri::Builder::default()
        .setup(|_app| {
            // TODO (Phase 3): spawn the tokio scheduler service here.
            // Phase 1 deliberately starts nothing.
            Ok(())
        })
        // TODO (Step 2): .invoke_handler(tauri::generate_handler![...])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}