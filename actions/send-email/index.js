const nodemailer = require("nodemailer");
const core = require("@actions/core");

async function run() {
    try {
        const email = core.getInput("email");
        const workflow = core.getInput("workflow");
        const linterResult = core.getInput("linter_result");
        const cypressResult = core.getInput("cypress_result");
        const badgeResult = core.getInput("badge_result");
        const deployResult = core.getInput("deploy_result");

        const user = process.env.PERSONAL_EMAIL;  
        const pass = process.env.EMAIL_PASSWORD;  

        const transporter = nodemailer.createTransport({
            service: "Gmail",
            auth: {
                user: user,  
                pass: pass,   
            },
        });

        const mailOptions = {
            from: `"GitHub Actions" <${user}>`,
            to: email,
            subject: `Resultado del workflow: ${workflow}`,
            text: `
        Linter: ${linterResult}
        Cypress: ${cypressResult}
        Badge: ${badgeResult}
        Deploy: ${deployResult}
            `,
        };

        await transporter.sendMail(mailOptions);
        console.log("Correo enviado correctamente.");
    } catch (error) {
        core.setFailed(`Error al enviar el correo: ${error.message}`);
    }
}

run();
