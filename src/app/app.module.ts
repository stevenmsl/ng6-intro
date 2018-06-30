import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PostsComponent } from './posts/posts.component';
import { UsersComponent } from './users/users.component';
import { DetailsComponent } from './details/details.component';
import { HttpClientModule} from '@angular/common/http'; //Import this module to use HttpClient
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

@NgModule({
  //“declarations” is for things you’ll use in your templates: mainly components 
  //components are in local scope: the components you declared are only usable in the current module.
  declarations: [
    AppComponent,
    SidebarComponent,
    PostsComponent,
    UsersComponent,
    DetailsComponent
  ],
  //You only need to import the following modules once in the app module file.
  imports: [
    BrowserModule,
    AppRoutingModule,
    /*
      You also need to specify the HttpClientModule here to use HttpClient
      Not sure what you don’t need to specify anything in the providers array for DI to work.
      Answer:
      Since Angular 6, services don’t need to be registered in a module anymore. 
      The use of “providers” in a NgModule is now limited to overriding existing services.
    */
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
