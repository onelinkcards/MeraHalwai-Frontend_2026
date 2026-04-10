'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Hook to create scroll reveal animations with opacity and sliding effects
 * @param {Object} options - Animation options
 * @param {string} options.direction - Direction of animation ('up', 'down', 'left', 'right')
 * @param {number} options.distance - Distance to animate in pixels
 * @param {number} options.duration - Animation duration in seconds
 * @param {number} options.delay - Animation delay in seconds
 * @param {string} options.ease - GSAP easing function
 * @param {number} options.opacity - Starting opacity (0-1)
 * @param {string} options.trigger - ScrollTrigger trigger point ('top', 'center', 'bottom')
 */
export const useScrollReveal = (options = {}) => {
  const elementRef = useRef(null);
  const {
    direction = 'up',
    distance = 30,
    duration = 0.4,
    delay = 0,
    ease = 'power2.out',
    opacity = 0,
    trigger = 'top 90%' // Trigger earlier for faster loading
  } = options;

  useEffect(() => {
    if (!elementRef.current) return;

    const element = elementRef.current;
    
    // Set initial state
    gsap.set(element, { opacity: opacity });
    
    // Determine transform based on direction
    let transform = {};
    switch (direction) {
      case 'up':
        transform = { y: distance };
        break;
      case 'down':
        transform = { y: -distance };
        break;
      case 'left':
        transform = { x: distance };
        break;
      case 'right':
        transform = { x: -distance };
        break;
      default:
        transform = { y: distance };
    }
    
    // Apply initial transform
    gsap.set(element, transform);
    
    // Create animation
    const animation = gsap.to(element, {
      ...transform,
      x: 0,
      y: 0,
      opacity: 1,
      duration,
      delay,
      ease,
      scrollTrigger: {
        trigger: element,
        start: trigger, // This will now use 'bottom 60%' by default
        toggleActions: 'play none none none'
      }
    });
    
    // Cleanup: kill only this animation and its ScrollTrigger (do not kill others)
    return () => {
      if (animation) {
        if (animation.scrollTrigger) animation.scrollTrigger.kill();
        animation.kill();
      }
    };
  }, [direction, distance, duration, delay, ease, opacity, trigger]);

  return elementRef;
};

/**
 * Component wrapper for scroll reveal animations
 */
export const ScrollReveal = ({
  children,
  direction = 'up',
  distance = 30,
  duration = 0.4,
  delay = 0,
  ease = 'power2.out',
  opacity = 0,
  trigger = 'top 90%', // Trigger earlier for faster loading
  className = '',
  ...props
}) => {
  const ref = useScrollReveal({
    direction,
    distance,
    duration,
    delay,
    ease,
    opacity,
    trigger
  });

  return (
    <div ref={ref} className={className} {...props}>
      {children}
    </div>
  );
};