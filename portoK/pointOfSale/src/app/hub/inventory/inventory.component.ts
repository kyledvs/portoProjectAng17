import { Component, inject } from '@angular/core';

import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef, 
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import { Router, RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

import { CustomMaterialModule } from '../../cusomma';
import { CommonModule } from '@angular/common';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { CreateClientDialogComponent } from '../client-page/create-client-dialog/create-client-dialog.component';
import { CreateStockItemComponent } from './create-stock-item/create-stock-item.component';
import { CreateSupplierComponent } from './create-supplier/create-supplier.component';

@Component({
  selector: 'app-inventory',
  standalone: true,
  imports: [CommonModule, CustomMaterialModule],
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.css'
})
export class InventoryComponent {

  

  firestore: Firestore = inject(Firestore);
  client$: Observable<any[]>;

  constructor(public router: Router,
    public dialog: MatDialog
  ) {
    const aCollection = collection(this.firestore, 'clients')
    this.client$ = collectionData(aCollection);
  }

  openCreateStockItemDialog() {
    this.dialog.open(CreateStockItemComponent)
  }

  openCreateSupplierDialog() {
    this.dialog.open(CreateSupplierComponent)
  }



}
