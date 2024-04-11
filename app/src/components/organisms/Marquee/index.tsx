import React, { useEffect, useRef } from 'react';
import InfiniteMarquee from 'vanilla-infinite-marquee';
import './style.css';

function Marquee({ children }: { children: React.ReactNode }) {
  const marqueeRef = useRef(null);

  useEffect(() => {
    // Access the marqueeRef.current to get the DOM element
    // and initialize the plugin
    let marquee: any = null;
    // if (marqueeRef.current) {
    // Initialize the plugin
    marquee = new InfiniteMarquee({
      element: marqueeRef.current,
      speed: 1000 * 100,
      direction: 'top',
      pauseOnHover: true,

      smoothEdges: true,
      gap: '15px',
      duplicateCount: 1,
      mobileSettings: {
        direction: 'top',
        speed: 1000 * 100,
      },
      // Other options...
    });
    // }

    return () => marquee?.destroy();
  }, []);

  return <div className="marquee-container">{children}</div>;
}

export default Marquee;
