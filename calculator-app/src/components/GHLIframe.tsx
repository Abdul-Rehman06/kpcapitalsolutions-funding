import { useEffect, useRef } from 'react';

export function GHLIframe({
  src,
  id,
  formId,
  formName,
  dataHeight = "100%",
  className = "",
}: {
  src: string;
  id: string;
  formId?: string;
  formName?: string;
  dataHeight?: string;
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Dynamically inject the GoHighLevel script so it executes in React
    const script = document.createElement('script');
    script.src = 'https://funding.kpcapitalsolutions.com/js/form_embed.js';
    script.async = true;
    script.type = 'text/javascript';

    if (containerRef.current) {
      containerRef.current.appendChild(script);
    }

    return () => {
      if (containerRef.current && script.parentNode) {
        containerRef.current.removeChild(script);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className={`w-full ${className}`}>
      <iframe
        src={src}
        style={{ width: '100%', border: 'none', overflow: 'hidden' }}
        scrolling="no"
        id={id}
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name={formName}
        data-height={dataHeight}
        data-layout-iframe-id={id}
        data-form-id={formId}
        title={formName || "Booking Calendar"}
      />
    </div>
  );
}
