import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';



import { inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-splash',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './splash.component.html',
  styleUrl: './splash.component.css'
})
export class SplashComponent {

  
  firestore: Firestore = inject(Firestore);
  items$: Observable<any[]>;

  constructor(public router: Router) {
    const aCollection = collection(this.firestore, 'items')
    this.items$ = collectionData(aCollection);
  }

  toAdmin() {
    this.router.navigate(['/hub']);

  }

}
