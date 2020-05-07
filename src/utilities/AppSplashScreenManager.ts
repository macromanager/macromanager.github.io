import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppSplashScreenManager {
    private splashRequestIds: object = {};
    private handler: (isVisible: boolean)=>void;

    public SetSplashScreenRequestHandler(callback: (isVisible: boolean)=>void){
      this.handler = callback;
    }
    public requestSplashScreen(isVisible: boolean){
      this.handler(isVisible);    
    }

}