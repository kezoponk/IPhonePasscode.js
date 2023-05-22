import { IPhonePasscodeConfig } from './types';
/**
 * @author Albin Eriksson, https://github.com/kezoponk
 * @license MIT, https://opensource.org/licenses/MIT
 */
declare class IPhonePasscode {
    config: IPhonePasscodeConfig;
    pins: HTMLDivElement[];
    enteredPasscode: string;
    targetElement: HTMLDivElement;
    private injectStyleInHeader;
    private createButtonWithContent;
    private generateButtons;
    private generateTitleAndPins;
    private buttonPressed;
    /**
     * Restore target element to state before IPhonePasscode
     * Can't be undone without creating a new instance
     */
    restore(): void;
    constructor(targetElement: HTMLDivElement, config: IPhonePasscodeConfig);
    private md5;
}
export default IPhonePasscode;
export type { IPhonePasscodeConfig };
