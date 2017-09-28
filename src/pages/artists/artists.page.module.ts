import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ArtistsPage } from './artists.page';

@NgModule({
  declarations: [
    ArtistsPage,
  ],
  imports: [
    IonicPageModule.forChild(ArtistsPage),
  ],
})
export class ArtistsPageModule {}
