import { CircleHelp } from "lucide-react"

import { Spinner } from "@/components/ui/spinner"
import { cn } from "@/lib/utils"

import {
  nodeRegistry,
  type NodeType,
} from "@/features/workflows/nodes/node-registry"

// The accent-colored icon chip, mirroring the node on the canvas. Pass `running`
// to swap the node's icon for a spinner inside the same colored chip.
//
// `type` isn't guaranteed to be a known node type at runtime: realtime run
// history can predate a node's fields (e.g. steps recorded before `type`
// existed on RunStep, or a node type since renamed/removed). Fall back to a
// neutral chip instead of crashing on a step we can't fully render.
export function NodeIcon({
  type,
  running,
  className,
}: {
  type: NodeType
  running?: boolean
  className?: string
}) {
  const def = nodeRegistry[type]
  const Icon = def?.icon ?? CircleHelp
  return (
    <span
      className={cn(
        "flex size-6 shrink-0 items-center justify-center rounded-md",
        def?.accent ?? "bg-muted text-muted-foreground",
        className
      )}
    >
      {running ? (
        <Spinner className="size-3.5" />
      ) : (
        <Icon className="size-3.5" />
      )}
    </span>
  )
}
