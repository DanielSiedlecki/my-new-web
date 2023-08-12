import { http } from "./http-common";




class SendMailService {
    create(data: Object) {
        return http.post("/project/sendmail", data)
    }
}


class RecaptchaValidService {
    create(data:any) {
        return http.post("/project/recaptcha", data)
    }
}



export {SendMailService, RecaptchaValidService}