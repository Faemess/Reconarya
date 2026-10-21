fn main() {
    // include_dir! embeds tools/ at compile time; make cargo notice edits there.
    println!("cargo:rerun-if-changed=tools");
    tauri_build::build()
}