import FlowerTopLeft from "./FlowerTopLeft";
import FlowerBottomLeft from "./FlowerBottomLeft";
import FlowerTopRight from "./FlowerTopRight";
import FlowerBottomRight from "./FlowerBottomRight";

export default function FlowerFrame({ flowerSize = 160}) {
    return (
        <>
            <FlowerTopLeft flowerSize={flowerSize} />
            <FlowerTopRight flowerSize={flowerSize} />
            <FlowerBottomLeft flowerSize={flowerSize} />
            <FlowerBottomRight flowerSize={flowerSize} />
        </>
    );
}