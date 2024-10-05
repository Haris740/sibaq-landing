import CountDown from "@/components/CountDown";
import CounterCards from "@/components/CounterCards";
import DHDetails from "@/components/DHDetails";
import FooterAddress from "@/components/FooterAddress";
import FooterContact from "@/components/FooterContact";
import Notifications from "@/components/Notifications";
import TimeLine from "@/components/TimeLine";
import LiveSection from "@/components/LiveSection";

export default function Home() {
  return (
    <div className="">
      <div className="h-screen"></div>
      <CountDown />
      <Notifications />
      <CounterCards />
      <DHDetails />
      <TimeLine />
      <LiveSection />
      <FooterContact />
      <FooterAddress />
      <div className="h-screen"></div>
    </div>
  );
}

