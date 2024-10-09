'use client'
import React, { useRef, useState, useEffect, ReactNode, CSSProperties } from "react";

interface HoverProps {
  style?: CSSProperties;
  children: ReactNode;
  easing?: string;
  scale?: number;
  speed?: number;
  perspective?: number;
  max?: number;
  onMouseEnter?: () => void;
  onMouseMove?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  onMouseLeave?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const defaultStyles: CSSProperties = {
  transformStyle: "preserve-3d",
  display: "inline-block",
};

const Hover: React.FC<HoverProps> = ({
  style = {},
  children,
  easing = "cubic-bezier(.03,.98,.52,.99)",
  scale = 1,
  speed = 400,
  perspective = 1000,
  max = 10,
  onMouseEnter = () => {},
  onMouseMove = () => {},
  onMouseLeave = () => {},
}) => {
  const [tiltStyles, setTiltStyles] = useState<CSSProperties>(defaultStyles);
  const element = useRef<HTMLDivElement>(null);
  const width = useRef(0);
  const height = useRef(0);
  const top = useRef(0);
  const left = useRef(0);
  const updateCall = useRef<number | null>(null);
  const transitionTimeout = useRef<NodeJS.Timeout | null>(null);

  const handleOnMouseEnter = () => {
    updateElementPosition();
    setTransition();
    onMouseEnter();
  };

  const handleOnMouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (updateCall.current !== null) {
      window.cancelAnimationFrame(updateCall.current);
    }
    updateCall.current = window.requestAnimationFrame(() => updateElementStyle(event));
    onMouseMove(event);
  };

  const handleOnMouseLeave = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setTransition();
    handleReset();
    onMouseLeave(event);
  };

  const updateElementStyle = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const values = getValues(event);

    setTiltStyles((prevStyle) => ({
      ...prevStyle,
      transform: `perspective(${perspective}px) rotateX(${values.tiltY}deg) rotateY(${values.tiltX}deg) scale3d(${scale}, ${scale}, ${scale})`,
    }));
  };

  const getValues = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    let x = (event.clientX - left.current) / width.current;
    let y = (event.clientY - top.current) / height.current;

    x = Math.min(Math.max(x, 0), 1);
    y = Math.min(Math.max(y, 0), 1);

    const tiltX = parseFloat((-1 * (max / 2 - x * max)).toFixed(2));
    const tiltY = parseFloat((-1 * (max / 2 - y * max)).toFixed(2));
    

    let angle =
      Math.atan2(
        event.clientX - (left.current + width.current / 2),
        -(event.clientY - (top.current + height.current / 2))
      ) *
      (180 / Math.PI);

    return {
      tiltX: tiltX,
      tiltY: tiltY,
      angle,
    };
  };

  const updateElementPosition = () => {
    if (element.current) {
      const rect = element.current.getBoundingClientRect();
      width.current = rect.width;
      height.current = rect.height;
      top.current = rect.top;
      left.current = rect.left;
    }
  };

  const setTransition = () => {
    if (transitionTimeout.current) {
      clearTimeout(transitionTimeout.current);
    }

    setTiltStyles((prevStyle) => ({
      ...prevStyle,
      transition: `${speed}ms ${easing}`,
    }));

    transitionTimeout.current = setTimeout(() => {
      setTiltStyles((prevStyle) => ({
        ...prevStyle,
        transition: "",
      }));
    }, speed);
  };

  const handleReset = () => {
    window.requestAnimationFrame(() => {
      setTiltStyles((prevStyle) => ({
        ...prevStyle,
        transform: `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`,
      }));
    });
  };

  return (
    <div
      className="hover-3d"
      style={{
        maxHeight:"fit-content",
        ...style,
        ...tiltStyles,
      }}
      ref={element}
      onMouseEnter={handleOnMouseEnter}
      onMouseMove={handleOnMouseMove}
      onMouseLeave={handleOnMouseLeave}
    >
      {children}
    </div>
  );
};

export default Hover;
