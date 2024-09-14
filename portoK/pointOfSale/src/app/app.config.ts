import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';

import { CommonModule } from '@angular/common';


import { provideRouter } from '@angular/router';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';






export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(),  [
    
        provideAnimationsAsync(),
    
      ],

  provideFirebaseApp(() => initializeApp({
    apiKey: "AIzaSyDNsX0a_IdFUwFc2LIuAZjOZq5PPI-Q7QE",
    authDomain: "trueblue-55664.firebaseapp.com",
    databaseURL: "https://trueblue-55664-default-rtdb.firebaseio.com",
    projectId: "trueblue-55664",
    storageBucket: "trueblue-55664.appspot.com",
    messagingSenderId: "577403308086",
    appId: "1:577403308086:web:2e7bae8fd9276c67773097",
    measurementId: "G-CS9GRZ1EHV"
  })),
  provideFirestore(() => getFirestore()), provideAnimationsAsync(),


  ]
};
