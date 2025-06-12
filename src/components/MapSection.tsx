'use client';

const MapSection = () => {
  return (
    <section className="w-full mt-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-semibold text-center mb-4">Find Us On The Map</h2>
        <div className="w-full rounded-xl overflow-hidden shadow-lg">
          <iframe
            title="Taughtlevel Location"
            src="https://www.google.com/maps?q=No.%202,%20Christ%20The%20King%20Road,%20Osisioma,%20Abayi%20Aba,%20Abia%20State,%20Nigeria&output=embed"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
};

export default MapSection;
