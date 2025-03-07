import React from 'react';

function Columns() {
  return (
<div className="columns">
  <div className="column">
    <h2 className="column-title">USA Visa</h2>
    <p className="column-text">
      Planning a trip to the United States?<br/>
      Whether it's for tourism, family visits, or business,
      we will guide you through the entire US visit visa process.<br/>
      <br  />
      From document preparation to interview tips, we ensure a smooth and hassle-free experience.
    </p>
  </div>
  <div className="column">
    <h2 className="column-title">UK Visa</h2>
    <p className="column-text">
      Exploring the UK for leisure, family reunions, or business meetings?<br/>
      We assist you with every step, ensuring your application meets all requirements for a
      successful approval. <br/>
        <br  />
      Let us handle the paperwork while you plan your journey.
    </p>
  </div>
  <div className="column">
    <h2 className="column-title">USMLE/Electives</h2>
    <p className="column-text">
      Dreaming of practicing medicine in the US? <br/>

      The USMLE is a crucial step for medical graduates, and we provide expert guidance on registration, 
      resources, and the application process.

      We don’t stop there—we also help you find elective studies to strengthen your experience and profile.
        <br  />
        <br  />
        Let’s make your medical career in the U.S. a reality
    </p>
  </div>
</div>

  );
}

export default Columns;
