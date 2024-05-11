import { useEffect } from 'react';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import MemberData from '../components/MemberData';

function Members() {
  useEffect(() => {
    // scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);
  return (
    <>
      <Hero
        cName="hero-mid"
        heroVid="/videos/members.mp4"
        title="Our Members"
        subtitle="Nothing is possible without them"
        btnClass="hide"
      />
      <div className="member">
        <div className="membercard" style={{ fontFamily: 'Open Sans' }}>
          <MemberData
            image="/images/harish.JPEG"
            heading="Harish Pant"
            text="The President of Uttarakhand Association of Singapore"
          />
          <MemberData
            image="/images/atima.jpeg"
            heading="Atima Joshi"
            text="The Vice President of Uttarakhand Association of Singapore"
          />
          <MemberData
            image="/images/sunil.jpeg"
            heading="Sunil Thapliyal"
            text="The Secretary of Uttarakhand Association of Singapore"
          />
        </div>
        <div className="membercard" style={{ fontFamily: 'Open Sans' }}>
          <MemberData
            image="/images/nirupma.jpg"
            heading="Nirupma Thapliyal"
            text="The Treasurer of Uttarakhand Association of Singapore"
          />
          <MemberData
            image="/images/himanmi.jpg"
            heading="Himani Kukreti"
            text="The Assistant Treasurer of Uttarakhand Association of Singapore"
          />
          <MemberData
            image="/images/neelam.jpeg"
            heading="Neelam Rawat"
            text="The Committee Member of Uttarakhand Association of Singapore"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Members;
