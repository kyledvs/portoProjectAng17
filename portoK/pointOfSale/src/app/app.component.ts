import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pointOfSale';

 

  constructor() {
  
  }
}
