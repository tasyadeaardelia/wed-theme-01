import FlowerBottomLeft from "@/components/FlowerFrame/FlowerBottomLeft";
import Background from "./Background";
import Foreground from "./Foreground";
import FlowerBottomRight from "@/components/FlowerFrame/FlowerBottomRight";

export default function Cover({handleOpenInvitation, guestName}) {
    return (
        <>
            <Background />
            <Foreground handleOpenInvitation={handleOpenInvitation} guestName={guestName}  />
            <FlowerBottomLeft />
            <FlowerBottomRight />
        </>
    )
}