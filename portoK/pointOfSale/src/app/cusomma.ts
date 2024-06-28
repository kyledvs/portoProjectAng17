//custom-material.module.ts
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialog, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  imports: [
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatFormFieldModule, 
     MatInputModule, 
     MatSelectModule,
      MatDialogActions, 
      MatDialogContent, 
      MatDialogTitle,
  
      MatDatepickerModule,
      MatDialogActions,
      MatDialogClose,
      MatDialogContent,
      MatDialogTitle,
      
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule, 
     MatInputModule, 
     MatSelectModule,
      MatDialogActions, 
      MatDialogContent, 
      MatDialogTitle,
  
      MatDatepickerModule,
      
      MatDialogActions,
      MatDialogClose,
      MatDialogContent,
      MatDialogTitle,

  ]
})
export class CustomMaterialModule {}