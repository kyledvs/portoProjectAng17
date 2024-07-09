import { Component, inject } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { MatDialog } from '@angular/material/dialog';
import { Router } from 'express';
import { Observable } from 'rxjs';
import { CreateClientDialogComponent } from '../client-page/create-client-dialog/create-client-dialog.component';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CustomMaterialModule } from '../../cusomma';
import { CreateInvoiceComponent } from './create-invoice/create-invoice.component';

@Component({
  selector: 'app-billing',
  standalone: true,
  imports: [RouterOutlet, CommonModule, CustomMaterialModule],
  templateUrl: './billing.component.html',
  styleUrl: './billing.component.css'
})
export class BillingComponent {

  
  firestore: Firestore = inject(Firestore);
  openInv!: Observable<any[]>;

  constructor(
    public dialog: MatDialog
  ) {

  }

  openNewInvoiceDialog() {
    this.dialog.open(CreateInvoiceComponent)
  }

}
