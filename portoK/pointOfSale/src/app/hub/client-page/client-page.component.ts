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

@Component({
  selector: 'app-client-page',
  standalone: true,
  imports: [RouterOutlet, CommonModule, CustomMaterialModule],
  templateUrl: './client-page.component.html',
  styleUrl: './client-page.component.css'
})
export class ClientPageComponent  {

  

  firestore: Firestore = inject(Firestore);
  client$: Observable<any[]>;

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
