import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppSplashScreenManager {
    private splashRequestIds: object = {};
    private splashHandler: (isVisible: boolean)=>void;

    public setSplashScreenRequestHandler(callback: (isVisible: boolean)=>void){
      this.splashHandler = callback;
    }
    public requestSplashScreen(isVisible: boolean){
      this.splashHandler(isVisible);    
    }

}