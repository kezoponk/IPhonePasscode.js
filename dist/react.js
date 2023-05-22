import { jsx as _jsx } from "react/jsx-runtime";
import React, { useEffect, useImperativeHandle, useRef, useState } from 'react';
import IPhonePasscode from './iphonepasscode';
const IPhonePasscodeComponent = React.forwardRef((config, forwardedRef) => {
    const [iphonePasscodeInstance, setIPhonePasscodeInstance] = useState();
    const ref = useRef(null);
    useImperativeHandle(forwardedRef, () => ref.current);
    useEffect(() => {
        if (ref.current) {
            const iphonePasscode = new IPhonePasscode(ref.current, config);
            setIPhonePasscodeInstance(iphonePasscode);
        }
    }, [ref]);
    useEffect(() => {
        iphonePasscodeInstance === null || iphonePasscodeInstance === void 0 ? void 0 : iphonePasscodeInstance.restore();
        if (ref.current) {
            const newIPhonePasscode = new IPhonePasscode(ref.current, config);
            setIPhonePasscodeInstance(newIPhonePasscode);
        }
    }, [config]);
    return (_jsx("div", { ref: ref }));
});
export default IPhonePasscodeComponent;
