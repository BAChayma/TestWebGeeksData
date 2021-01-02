import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './_guards/auth.guard';
import { SkypeComponent } from './logiciels/skype/skype.component';
import { GimpComponent } from './logiciels/gimp/gimp.component';
import { LogicielsComponent } from './logiciels/logiciels.component';

const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegisterComponent },
    { path: 'accueil', component: HomeComponent },
    { path: 'header', component: HeaderComponent },

    { path: 'skype', component: SkypeComponent },
    { path: 'gimp', component: GimpComponent },
    { path: 'logiciels', component: LogicielsComponent },

    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })

export class AppRoutingModule { }
