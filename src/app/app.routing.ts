import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { PerfilComponent } from './perfil/perfil.component';
import { RefereeComponent } from './referee/referee.component';
import { LoginComponent } from './login/login.component';
import { NomeacoesComponent } from './nomeacoes/nomeacoes.component';
import { NomeadosComponent } from './nomeados/nomeados.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import { AuthguardGuard } from 'app/authguard.guard';

export const AppRoutes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'dashboard',
        canActivate: [AuthguardGuard],
        component: DashboardComponent
    },
    {
        path: 'perfil',
        component: PerfilComponent
    },
    {
        path: 'referee',
        component: RefereeComponent
    },
    {
        path: 'nomeacoes',
        component: NomeacoesComponent
    },
    {
        path: 'nomeados',
        component: NomeadosComponent
    },
    {
        path: 'icons',
        component: IconsComponent
    },
    {
        path: 'maps',
        component: MapsComponent
    },
    {
        path: 'notifications',
        component: NotificationsComponent
    },
    {
        path: 'upgrade',
        component: UpgradeComponent
    }
]
