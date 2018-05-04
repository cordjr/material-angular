import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule, MatListModule, MatSidenavModule, MatIconModule, MatButtonModule } from '@angular/material';

@NgModule({
  imports: [CommonModule],
  exports: [
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule
  ]
})
export class AppMaterialModule { }
