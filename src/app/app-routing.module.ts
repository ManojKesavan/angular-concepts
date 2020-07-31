import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { HttpcallComponent } from './httpcall/httpcall.component';
import { ResourseComponent } from './resourse/resourse.component';
import { AwaitPromiseComponent } from './await-promise/await-promise.component';

@NgModule({
  declarations: [ 
   ResourseComponent,HttpcallComponent,AwaitPromiseComponent
  ],
  imports: [CommonModule,FormsModule,
    RouterModule.forRoot([
      { path: 'resourse', component: ResourseComponent },
      { path: 'http', component: HttpcallComponent },
      { path: 'AwaitPromise', component: AwaitPromiseComponent },
      { path: '**', redirectTo: 'resourse' }
    ])
  ],
  exports: [
    RouterModule,
  ],
  providers: [],

})
export class AppRoutingModule {}
