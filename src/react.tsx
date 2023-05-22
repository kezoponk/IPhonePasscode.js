import React, { useEffect, useImperativeHandle, useRef, useState } from 'react';
import IPhonePasscode from './iphonepasscode';
import { IPhonePasscodeConfig } from './types';

const IPhonePasscodeComponent = React.forwardRef<
  HTMLDivElement, 
  IPhonePasscodeConfig
>(
  (config: IPhonePasscodeConfig, forwardedRef) => {
    const [iphonePasscodeInstance, setIPhonePasscodeInstance] = useState<IPhonePasscode>();

    const ref = useRef<HTMLDivElement>(null);

    useImperativeHandle(forwardedRef, () => ref.current as HTMLDivElement);
    
    useEffect(() => {
      if (ref.current) {
        const iphonePasscode = new IPhonePasscode(ref.current, config);
        setIPhonePasscodeInstance(iphonePasscode);
      }
    }, [ref]);

    useEffect(() => {
      iphonePasscodeInstance?.restore();
      if (ref.current) {
        const newIPhonePasscode = new IPhonePasscode(ref.current, config);
        setIPhonePasscodeInstance(newIPhonePasscode);
      }
    }, [config]);

    return (
      <div ref={ref} />
    )
  }
);

export default IPhonePasscodeComponent;