import { useState } from "react";
import { TopBar } from "./components/TopBar";
import { TabBar, type TabItem } from "./components/TabBar";
import { StatusBar } from "./components/StatusBar";

// Step 1: hardcoded. Step 3 replaces this with getPagesForToolset() from the registry.
const TABS: TabItem[] = [{ id: "settings", label: "Settings" }];

export default function App() {
  const [activeId, setActiveId] = useState("settings");

  return (
    <div className="flex h-full flex-col">
      <TopBar />
      <TabBar tabs={TABS} activeId={activeId} onSelect={setActiveId} />
      <main className="flex-1 overflow-auto p-6">
        <p className="text-sm text-zinc-500">
          Scaffold only. Page content lands in later steps.
        </p>
      </main>
      <StatusBar />
    </div>
  );
}