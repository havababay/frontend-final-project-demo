import { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes, withComponentInputBinding()), provideAnimations(), provideFirebaseApp(() => initializeApp({"projectId":"frontend-project-demo","appId":"1:799388896650:web:c700f5745d80fed26d4c73","storageBucket":"frontend-project-demo.appspot.com","apiKey":"AIzaSyAjbVsLlB94-eS5AYm6NVuaRboIsHXUdz0","authDomain":"frontend-project-demo.firebaseapp.com","messagingSenderId":"799388896650"})), provideFirestore(() => getFirestore())]
};
