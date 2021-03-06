import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';
import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { FixedPluginModule} from './shared/fixedplugin/fixedplugin.module';
import { NguiMapModule} from '@ngui/map';

import { DashboardComponent } from './dashboard/dashboard.component';
import { PerfilComponent } from './perfil/perfil.component';
import { RefereeComponent } from './referee/referee.component';
import { NomeacoesComponent } from './nomeacoes/nomeacoes.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { TextMaskModule } from 'angular2-text-mask';
import { InputComponent } from './ui/input/input.component';
import { InputNomeComponent } from './ui/input-nome/input_nome.component';
import { LoginComponent } from './login/login.component';
import { NomeadosComponent } from './nomeados/nomeados.component';

import { HTTPService } from './utils/http/http.service';
import { ApiUrlsService } from './utils/api-urls/api-urls.service';
import { RefereeService } from './referee/service/referee.service';
import { NomeacoesService } from './nomeacoes/service/nomeacoes.service';
import { DesignacoesService } from './designacoes/service/designacoes.service';
// import { SelectModule } from 'ng2-select';
import {NgSelectModule} from '@ng-select/ng-select';
import { UserService } from './login/user.service';
import { AuthguardGuard } from 'app/authguard.guard';
import { IsAuthenticatedService } from 'app/login/is-authenticated.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    InputComponent,
    InputNomeComponent,
    PerfilComponent,
    RefereeComponent,
    NomeacoesComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    NomeadosComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgxDatatableModule,
    RouterModule.forRoot(AppRoutes),
    SidebarModule,
    NavbarModule,
    FooterModule,
    FixedPluginModule,
    ReactiveFormsModule,
    TextMaskModule,
    NgSelectModule,
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyBr-tgUtpm8cyjYVQDrjs8YpZH7zBNWPuY'})

  ],
  providers: [
    HTTPService,
    ApiUrlsService,
    DesignacoesService,
    RefereeService,
    NomeacoesService,
    UserService,
    AuthguardGuard,
    IsAuthenticatedService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
