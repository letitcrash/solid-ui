import { For } from "solid-js"

import { useLocation } from "@solidjs/router"

import { docsConfig } from "~/config/docs"
import { cn } from "~/lib/utils"

export default function Sidebar() {
  const location = useLocation()

  return (
    <aside class="hidden w-full md:block">
      <div class="relative h-full overflow-hidden py-6 pr-6 lg:py-8">
        <For each={docsConfig.sidebarNav}>
          {(category) => (
            <div class="pb-4">
              <h4 class="mb-1 rounded-md px-2 py-1 text-sm font-semibold">{category.title}</h4>
              <div class="grid grid-flow-row auto-rows-max text-sm">
                <For each={category.items}>
                  {(item) => (
                    <a
                      href={item.href}
                      class={cn(
                        "group flex w-full items-center rounded-md border border-transparent px-2 py-1 no-underline hover:underline",
                        item.href === location.pathname
                          ? "font-medium text-foreground"
                          : "text-muted-foreground"
                      )}
                    >
                      {item.title}
                    </a>
                  )}
                </For>
              </div>
            </div>
          )}
        </For>
      </div>
    </aside>
  )
}
