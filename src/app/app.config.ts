import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {
  provideFirebaseApp,
  initializeApp,
  
} from '@angular/fire/app';
import {provideAuth,getAuth} from '@angular/fire/auth';
import {provideFirestore,getFirestore} from '@angular/fire/firestore';
import {provideStorage, getStorage} from '@angular/fire/storage'
import { environment } from '../environments/environment';

import {AngularFireModule} from '@angular/fire/compat';
import {AngularFireAuthModule} from '@angular/fire/compat/auth';
import {AngularFireDatabase} from '@angular/fire/compat/database';
import {AngularFirestore} from '@angular/fire/compat/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(), 
    provideAnimationsAsync(),
    importProvidersFrom([AngularFireModule.initializeApp(environment.firebase),AngularFireAuthModule,AngularFireDatabase,AngularFirestore])
  ]
};


// ,
//     importProvidersFrom([
//       provideFirebaseApp(() => initializeApp(environment.firebase)),
//       provideAuth(() => getAuth()),
//       provideFirestore(() => getFirestore()),
//       provideStorage(() => getStorage())
//     ])