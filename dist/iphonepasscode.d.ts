/**
 * @author Albin Eriksson, https://github.com/kezoponk
 * @license MIT, https://opensource.org/licenses/MIT
 */
interface Config {
    /**
     * Original passcode that have been md5 hashed, if left empty, redirect url will
     * be redirected to when button press count is equal to entered pin length
     */
    md5passcode?: string;
    /**
     * Passcode length
     */
    title?: string;
    length: number;
    redirect: string;
}
declare class IPhonePasscode {
    config: Config;
    pins: HTMLDivElement[];
    enteredPasscode: string;
    injectStyleInHeader(cssCode: string): void;
    createButtonWithContent(smallLettersText: string | null, passcodeWidthPx: number): [HTMLButtonElement, HTMLHeadingElement];
    generateButtons(passcode: HTMLDivElement, passcodeWidthPx: number): HTMLDivElement;
    generateTitleAndPins(pinHeightPx: number, passcodeWidthPx: number): HTMLDivElement;
    buttonPressed(button: HTMLButtonElement): void;
    constructor(targetElement: HTMLElement, config: Config);
    private md5;
}
export default IPhonePasscode;
