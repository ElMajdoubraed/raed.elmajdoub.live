import React, { useEffect, useState } from 'react';
import { Workbox } from "workbox-window";

declare global {
    interface Window {
      wb: {
        messageSkipWaiting(): void;
        register(): void;
        addEventListener(name: string, callback: () => void): void;
      }
    }
  }
  
  const PwaUpdater = () => {
    const wb = new Workbox("sw.js", { scope: "/" });
    wb.register();
    useEffect(() => {
      if (
        !("serviceWorker" in navigator)
      ) {
        console.warn("Progressive Web App support is disabled");
        return;
      }
      const wb = new Workbox("sw.js", { scope: "/" });
        wb.register();
      }, []);

    const [isOpen, setIsOpen] = useState(false);
    const onConfirmActivate = () => wb.messageSkipWaiting();
  
    useEffect(() => {
      wb.addEventListener('controlling', () => {
        window.location.reload();
      });
  
      wb.addEventListener('waiting', () => setIsOpen(true));
      wb.register();
    }, []);
  
    return (
      <div
        //isOpen={isOpen}
        //setIsOpen={setIsOpen}
        //heading={'New version available!'}
      >
        <div>
          Hey, a new version is available! Please click below to update.
        </div>
  
        <button onClick={onConfirmActivate}>Reload and update</button>
        <button onClick={() => setIsOpen(false)}>Cancel</button>
      </div>
    );
  }
  
  export default PwaUpdater;