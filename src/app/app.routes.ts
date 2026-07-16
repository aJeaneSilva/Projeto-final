import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Login } from './pages/login/login'; 
import { Depoi } from './pages/depoi/depoi';
import { Advogados } from './pages/advogados/advogados';
import { Parceiros } from './pages/parceiros/parceiros';
import { Pesquisa } from './pages/pesquisa/pesquisa';
import { Mathes } from './pages/mathes/mathes';
import { authGuard } from './auth.guard';

export const routes: Routes = [
    { path: 'login', component: Login }, 
    { path: 'home', component: Home }, 
    { path: 'depoi', component: Depoi},
    { path: 'advogados', component: Advogados, canActivate: [authGuard] },
    { path: 'parceiros', component: Parceiros, canActivate: [authGuard] },
    { path: 'pesquisa', component: Pesquisa, canActivate: [authGuard] },
    { path: 'mathes', component: Mathes, canActivate: [authGuard] },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
];