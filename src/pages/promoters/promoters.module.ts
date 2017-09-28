import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PromotersPage } from './promoters';

@NgModule({
  declarations: [
    PromotersPage,
  ],
  imports: [
    IonicPageModule.forChild(PromotersPage),
  ],
})
export class PromotersPageModule {}
