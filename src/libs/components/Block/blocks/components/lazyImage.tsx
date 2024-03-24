/* eslint-disable @typescript-eslint/no-explicit-any */

import { useRendererContext } from "@/hooks/useRendererContext";
import { useCallback, useMemo, useRef } from "react";

/**
 * Progressive, lazy images modeled after Medium's LQIP technique.
 */
export const LazyImage = ({
  src,
  alt,
  className,
  style,
  zoomAble = false,
  priority = false,
  height,
  ...rest
}: {
  src?: string;
  alt?: string;
  className?: string;
  style?: React.CSSProperties;
  height?: number;
  zoomAble?: boolean;
  priority?: boolean;
}): any => {
  const { zoom, components } = useRendererContext();
  const zoomRef = useRef(zoom ? zoom.clone() : null);

  const onLoad = useCallback(
    (e: any) => {
      if (zoomAble && (e.target.src || e.target.srcset)) {
        if (zoomRef.current) {
          (zoomRef.current as any).attach(e.target);
        }
      }
    },
    [zoomRef, zoomAble]
  );

  const attachZoom = useCallback(
    (image: any) => {
      if (zoomRef.current && image) {
        (zoomRef.current as any).attach(image);
      }
    },
    [zoomRef]
  );

  const attachZoomRef = useMemo(
    () => (zoomAble ? attachZoom : undefined),
    [zoomAble, attachZoom]
  );

  if (components.Image) {
    return (
      <components.Image
        src={src}
        alt={alt}
        className={className}
        style={style}
        width={null}
        height={height || null}
        priority={priority}
        onLoad={onLoad}
      />
    );
  }

  // Default image element
  return (
    <img
      className={className}
      style={style}
      src={src}
      alt={alt}
      ref={attachZoomRef}
      loading="lazy"
      decoding="async"
      {...rest}
    />
  );
};
