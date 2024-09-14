import { Component, inject, OnInit } from '@angular/core';

import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef, 
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import { CreateClientDialogComponent } from './create-client-dialog/create-client-dialog.component';
import { Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CustomMaterialModule } from '../../cusomma';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import {MatTableModule} from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  contact: string;
  birthday: string;
}

import { HostBinding} from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

const ELEMENT_DATA: PeriodicElement[] = [

];

@Component({
  selector: 'app-client-page',
  standalone: true,
  imports: [RouterOutlet, CommonModule, CustomMaterialModule, MatTableModule],
  templateUrl: './client-page.component.html',
  styleUrl: './client-page.component.css',
  animations: [
    trigger('openClose', [
      // ...
      state(
        'open',
        style({
          height: '200px',
          opacity: 1,
          backgroundColor: 'yellow',
        }),
      ),
      state(
        'closed',
        style({
          height: '100px',
          opacity: 0.8,
          backgroundColor: 'blue',
        }),
      ),
      transition('open => closed', [animate('1s')]),
      transition('closed => open', [animate('0.5s')]),

    ]),

    
      trigger('flyInOut', [
        state('in', style({transform: 'translateX(0)'})),
        transition('void => *', [style({transform: 'translateX(-100%)'}), animate(100)]),
        transition('* => void', [animate(100, style({transform: 'translateX(100%)'}))]),
      ]),
    
      ],
})
export class ClientPageComponent  {

  displayedColumns: string[] = ['name', 'contact', 'birthday'];
  dataSource = ELEMENT_DATA;

  clickedRows = new Set<PeriodicElement>();


  

  firestore: Firestore = inject(Firestore);
  client$: Observable<any[]>;

  isOpen = true;
  toggle() {
    this.isOpen = !this.isOpen;
  }

  constructor(public router: Router,
    public dialog: MatDialog
  ) {
    const aCollection = collection(this.firestore, 'clients')
    this.client$ = collectionData(aCollection);


  }


 

  openDialog() {
    this.dialog.open(CreateClientDialogComponent)
  }


}
