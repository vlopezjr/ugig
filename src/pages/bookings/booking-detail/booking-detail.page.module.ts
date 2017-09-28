import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BookingDetailPage } from './booking-detail.page';

@NgModule({
  declarations: [
    BookingDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(BookingDetailPage),
  ],
})
export class BookingDetailPageModule {}
