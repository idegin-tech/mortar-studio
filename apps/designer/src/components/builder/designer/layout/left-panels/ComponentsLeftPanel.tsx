import {useLeftPanelContext} from "@/components/builder/context/left-panel.context";
import LeftPanelContainer from "./LeftPanelContainer";
import {usePreviewContext} from "@/components/builder/context/preview.context.tsx";
import {MortarComponent} from '@repo/common/schema/component'
import {EllipsisVertical, Pencil, Plus, Trash2} from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


export default function ComponentsLeftPanel() {
    const {state: {components}} = usePreviewContext()
    const {state: {activePanel}} = useLeftPanelContext();
    return (
        <LeftPanelContainer show={activePanel === 'components'}>
            <div className="flex flex-col gap-sm p-sm">
                {
                    components.map((component) => {
                        return <EachComponent component={component} key={component.id}/>
                    })
                }
            </div>
        </LeftPanelContainer>
    )
}

const EachComponent = ({component}: { component: MortarComponent }) => {
    return <div>
        <div
            role={'button'}
            aria-label={`${component.name} component`}
            className={'hover:bg-accent p-default border rounded-lg flex items-center group'}>
            <div
                className={'flex-1 truncate text-muted-foreground group-hover:text-foreground'}>
                <span>{component.name}</span>
            </div>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <button
                        className={'active:opacity-100 focus:opacity-100 hover:text-foreground text-muted-foreground opacity-0 group-hover:opacity-100'}>
                        <EllipsisVertical className={'h-5 w-5'}/>
                    </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem><Pencil /> Edit</DropdownMenuItem>
                    <DropdownMenuItem><Plus/> Add to selected</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem><Trash2 /> Delete</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

        </div>
    </div>
}
