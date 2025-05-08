import Ayat from "./Ayat";
import CoupleInfo from "./CoupleInfo";
import CoupleMoments from "./CoupleMoments";
import Gift from "./Gift";
import Intro from "./Intro";
import LoveStory from "./LoveStory";
import Rsvp from "./Rsvp";
import WeddingInfo from "./WeddingInfo";

export default function Content({ slugGuestName }) {
    return (
        <>
            <Intro/>
            <Ayat/>
            <CoupleInfo/>
            <WeddingInfo/>
            <LoveStory/>
            <CoupleMoments/>
            <Gift/>
            <Rsvp slugGuestName={slugGuestName} />
        </>
    )
}