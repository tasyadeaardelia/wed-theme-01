import FlowerBottomLeft from "@/components/FlowerFrame/FlowerBottomLeft";
import Background from "./Background";
import Foreground from "./Foreground";
import FlowerBottomRight from "@/components/FlowerFrame/FlowerBottomRight";

export default function Cover({handleOpenInvitation}) {
    return (
        <>
            <Background />
            <Foreground handleOpenInvitation={handleOpenInvitation} />
            <FlowerBottomLeft />
            <FlowerBottomRight />
        </>
    )
}