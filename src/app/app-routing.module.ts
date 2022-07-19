import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroComponent } from './intro/intro.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MyworkComponent } from './mywork/mywork.component';
import  {ContactComponent} from './contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {path:'about', component:AboutComponent },
  {path:'into' , component: IntroComponent},
  {path:'mywork' , component: MyworkComponent},
  {path: 'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
