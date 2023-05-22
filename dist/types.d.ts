interface IPhonePasscodeConfig {
    /**
     * Original passcode that have been md5 hashed, if left empty, redirect url will
     * be redirected to when button press count is equal to entered pin length
     */
    md5passcode?: string;
    /**
     * Text displayed above pins
     * Default: Enter Passcode
     */
    title?: string;
    /**
     * Passcode length
     */
    length: number;
    /**
     * Redirect on successful login
     */
    redirect: string;
}
export type { IPhonePasscodeConfig };
