import { Cookies } from "@/common/cookies";

export const init={
    userInfo:{},
    isLoggedIn:Cookies.hasActiveSession(),
    isShowLoader:false
}