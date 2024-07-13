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

const ELEMENT_DATA: PeriodicElement[] = [

];

@Component({
  selector: 'app-client-page',
  standalone: true,
  imports: [RouterOutlet, CommonModule, CustomMaterialModule, MatTableModule],
  templateUrl: './client-page.component.html',
  styleUrl: './client-page.component.css'
})
export class ClientPageComponent  {

  displayedColumns: string[] = ['name', 'contact', 'birthday'];
  dataSource = ELEMENT_DATA;

  clickedRows = new Set<PeriodicElement>();


  

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
