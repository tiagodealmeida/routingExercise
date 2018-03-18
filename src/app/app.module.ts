import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user-list/user-list.component';
import { RouterModule, Routes } from '@angular/router'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    UserComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'user',
    children: [
      {
        path: 'list',
        component: UserListComponent
      }
    ]
  },
  {
    path: 'user-list',
    component: UserListComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
  }
])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
