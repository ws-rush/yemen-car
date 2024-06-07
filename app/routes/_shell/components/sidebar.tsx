import { cn } from '@/lib/utils'
import RadixIconsCalendar from '~icons/radix-icons/calendar'
import RadixIconsGear from '~icons/radix-icons/gear'
import RadixIconsLayers from '~icons/radix-icons/layers'
import RadixIconsQuestionMarkCircled from '~icons/radix-icons/question-mark-circled'
import RadixIconsSymbol from '~icons/radix-icons/symbol'
import RadixIconsViewGrid from '~icons/radix-icons/view-grid'

type SidebarProps = {} & React.HTMLAttributes<HTMLDivElement>

export function Sidebar({ className }: SidebarProps) {
  return (
    <div className={cn('pb-12 h-screen', className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-2xl font-bold tracking-tight">
            YemenCar.
          </h2>
        </div>
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Menu
          </h2>
          <div className="space-y-1">
            <Button
              className="w-full justify-start"
              variant="secondary"
            >
              <RadixIconsLayers className="me-2 h-5 w-5" />
              <Link to="/listing">Listing</Link>
            </Button>
            <Button
              className="w-full justify-start"
              variant="ghost"
            >
              <RadixIconsSymbol className="me-2 h-5 w-5" />
              <Link to="/deals">Deals</Link>
            </Button>
            <Button
              className="w-full justify-start"
              variant="ghost"
            >
              <RadixIconsCalendar className="me-2 h-5 w-5" />
              <Link to="/booking">Booking</Link>
            </Button>
            <Button
              className="w-full justify-start"
              variant="ghost"
            >
              <RadixIconsViewGrid className="me-2 h-5 w-5" />
              <Link to="/statistics">Statistics</Link>
            </Button>
          </div>
        </div>
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Other Menu
          </h2>
          <div className="space-y-1">
            <Button
              className="w-full justify-start"
              variant="ghost"
            >
              <RadixIconsGear className="me-2 h-5 w-5" />
              <Link to="/settings">Settings</Link>
            </Button>
            <Button
              className="w-full justify-start"
              variant="ghost"
            >
              <RadixIconsQuestionMarkCircled className="me-2 h-5 w-5" />
              <Link to="/help">Help Center</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
