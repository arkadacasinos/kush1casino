import Header from '@/components/landing/Header'
import Hero from '@/components/landing/Hero'
import Advantages from '@/components/landing/Advantages'
import OnlineSection from '@/components/landing/OnlineSection'
import SiteSection from '@/components/landing/SiteSection'
import MirrorSection from '@/components/landing/MirrorSection'
import WorkingMirrorSection from '@/components/landing/WorkingMirrorSection'
import PlaySection from '@/components/landing/PlaySection'
import GamesSection from '@/components/landing/GamesSection'
import BonusSection from '@/components/landing/BonusSection'
import MobileSection from '@/components/landing/MobileSection'
import TipsSection from '@/components/landing/TipsSection'
import PaymentsSection from '@/components/landing/PaymentsSection'
import SecuritySection from '@/components/landing/SecuritySection'
import TournamentsSection from '@/components/landing/TournamentsSection'
import CtaSection from '@/components/landing/CtaSection'
import ResponsibleSection from '@/components/landing/ResponsibleSection'
import FaqSection from '@/components/landing/FaqSection'
import Footer from '@/components/landing/Footer'

export default function Page() {
  return (
    <div className="kush-root">
      <Header />
      <main className="kush-main">
        <Hero />
        <Advantages />
        <OnlineSection />
        <SiteSection />
        <MirrorSection />
        <WorkingMirrorSection />
        <PlaySection />
        <GamesSection />
        <BonusSection />
        <TournamentsSection />
        <MobileSection />
        <TipsSection />
        <PaymentsSection />
        <SecuritySection />
        <ResponsibleSection />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  )
}
