import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TempleateComponent } from './components/templeate/templeate.component';
import { ReactiveComponent } from './components/reactive/reactive.component';


const routes: Routes = [
  {path: 'templeate', component: TempleateComponent},
  {path: 'reactive', component: ReactiveComponent},
  {path: '', pathMatch: 'full', redirectTo: 'reactive'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
