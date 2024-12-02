import { Component, Cuboid, File, LifeBuoy, Paintbrush, Settings, Settings2, Variable } from "lucide-react"
import { useLeftPanelContext } from "../../context/left-panel.context";
import EachToggleBtn from "../EachToggleBtn";

export default function LeftPanelToggler() {
    const { state: { activePanel }, toggleLeftPanel } = useLeftPanelContext();
    return (
        <>
            <div className="w-header h-full min-h-[--body-height] max-h-[--body-height] z-[1000] flex flex-col justify-between bg-background border-r">
                <div>
                    <EachToggleBtn onClick={() => toggleLeftPanel('pages')} alignTooltip="right" tooltip="Pages" active={activePanel == 'pages'}>
                        <File />
                    </EachToggleBtn>
                    <EachToggleBtn onClick={() => toggleLeftPanel('components')} alignTooltip="right" tooltip="Components" active={activePanel == 'components'}>
                        <Component />
                    </EachToggleBtn>
                    <EachToggleBtn onClick={() => toggleLeftPanel('blocks')} alignTooltip="right" tooltip="Blocks" active={activePanel == 'blocks'}>
                        <Cuboid />
                    </EachToggleBtn>
                    <EachToggleBtn onClick={() => toggleLeftPanel('variables')} alignTooltip="right" tooltip="Variables" active={activePanel == 'variables'}>
                        <Variable />
                    </EachToggleBtn>
                    <EachToggleBtn onClick={() => toggleLeftPanel('styles')} alignTooltip="right" tooltip="Styles" active={activePanel == 'styles'}>
                        <Paintbrush />
                    </EachToggleBtn>
                    <EachToggleBtn onClick={() => toggleLeftPanel('site-settings')} alignTooltip="right" tooltip="Site settings" active={activePanel == 'styles'}>
                        <Settings2 />
                    </EachToggleBtn>
                </div>
                <div>
                    <EachToggleBtn onClick={() => {}} alignTooltip="right" tooltip="Help" >
                        <LifeBuoy />
                    </EachToggleBtn>
                    <EachToggleBtn onClick={() => {}} alignTooltip="right" tooltip="Settings" >
                        <Settings />
                    </EachToggleBtn>
                </div>
            </div>
        </>
    )
}


