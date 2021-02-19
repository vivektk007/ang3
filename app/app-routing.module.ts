import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { RegisterComponent } from '../app/register/register.component';
import { VieydataComponent } from '../app/vieydata/vieydata.component';
const routes: Routes = [
  {
    path: 'register/:id',
    component: RegisterComponent,
  },
  {
    path: 'viewdata',
    component: VieydataComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
// export const routingcomponents = [RegisterComponent];
