const forgotPasswordTemplate = ({name, otp}) => {
    return `
    <div style="max-width: 700px; margin: auto; border: 10px solid #4287f5; padding: 50px; font-size: 110%;">
    <p>Dear ${name},</p>
    <p> You're requested a password reset. Please use following OTP code to reset your password.</p>
    <div style= "background:green; font-size: 20px; padding: 10px; text-align: center; font-weight: bold; border-radius: 5px; margin: 10px; color: black; word-break: break-all; width: 100%; ">
    ${otp}
    </div>
    <p>This otp is valid for 1 hour only. Enter this otp in the binkeyit website to proceed with resetting your password.</p>
    <br/>
    <br/>
    <p>Thanks</p>
    <p>Binkeyit</p>
    </div>

    `
}

export default forgotPasswordTemplate;