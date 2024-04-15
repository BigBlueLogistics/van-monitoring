import React, { useEffect } from 'react';
import './style.css';
import { TMarquee } from './types';

function Marquee({ children, animationSpeed = 70 }: TMarquee) {
  useEffect(() => {
    // Access the root
    const root = document.querySelector<HTMLElement>(':root');
    // const viewHeight = document.querySelector<HTMLElement>('.marquee-container')?.offsetHeight || 0;
    const slider = document.querySelectorAll<HTMLElement>('.marquee-inner');

    if (slider.length) {
      // let time = (slider.offsetHeight * 10.0 + viewHeight * 10) / 160.0; // 160px / sec

      slider.forEach((elem) => {
        elem.style.animationDuration = animationSpeed + 's';
        elem.addEventListener(
          'animationiteration',
          () => {
            if (root) {
              root.style.setProperty('--vGap', root.getBoundingClientRect().bottom + 'px');
            }
          },
          false
        );
      });
    }
  }, [animationSpeed]);

  return (
    <div className="marquee-container">
      <div className="marquee-inner">{children}</div>
    </div>
  );
}

export default Marquee;
