import { RecaptchaValidService } from "@/services/SendMail"

function validationFormLenght(name:number, mail: number, textarea:number) {
    
    if (name && mail && textarea > 0) {

        return true
    
        
    }
    else {
        return false
    }

}

function validationMail(mail: string) {
    
    if (mail.includes('@')) {
        return true
    }

    else {
        return false
    }
}


async function validationCaptcha(token: string) {
    try {
        var data = {
            'g-recaptcha-response': token
        }

        const RecaptchaValidation = new RecaptchaValidService();
        const response = await RecaptchaValidation.create(data);

        console.log(response);
        return true;
    } catch (error) {
        console.log(error);
        
        return false;
    }
}

export {validationFormLenght, validationMail, validationCaptcha}
