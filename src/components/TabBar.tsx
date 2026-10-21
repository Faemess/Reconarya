export interface TabItem {
  id: string;
  label: string;
}

interface TabBarProps {
  tabs: TabItem[];
  activeId: string;
  onSelect: (id: string) => void;
}

export function TabBar({ tabs, activeId, onSelect }: TabBarProps) {
  return (
    <nav className="flex h-9 shrink-0 items-end gap-1 border-b border-zinc-800 bg-zinc-900 px-3">
      {tabs.map((tab) => {
        const active = tab.id === activeId;
        return (
          <button
            key={tab.id}
            onClick={() => onSelect(tab.id)}
            className={
              "border-b-2 px-3 py-1.5 text-sm transition-colors " +
              (active
                ? "border-emerald-500 text-zinc-100"
                : "border-transparent text-zinc-400 hover:text-zinc-200")
            }
          >
            {tab.label}
          </button>
        );
      })}
    </nav>
  );
}