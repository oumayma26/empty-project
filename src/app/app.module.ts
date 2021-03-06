import { HomeblogComponent } from './blog/homeblog/homeblog.component';
import { HandleErrorInterceptor } from './ngrx/services/handleerror.interceptor';
import { TokenInterceptor } from './ngrx/services/token-interceptor';
import { AuthGuard } from './ngrx/services/auth-guard.service';
import { AuthService } from './ngrx/services/auth.service';
import { UsersComponent } from './dash/users/users.component';
import { AddCategoryComponent } from './dash/articles/add-category/add-category.component';

import { CategoryLogic } from './ngrx/logic/category.store';

import { CategoryEffects } from './ngrx/store/category/category.effect';
import { ArticleFilterPipe } from './shared/filter-article-pipe';
import { ArticleLogic } from './ngrx/logic/articles.store';
import { ArticleEffects } from './ngrx/store/article/article.effect';
import { ArticlesService } from './ngrx/services/article.service';
import { UserFilterPipe } from './shared/filter-user-pipe';

import { UserLogic } from './ngrx/logic/user.store';
import { UserEffects } from './ngrx/store/user/user.effect';
// import { BrowserXhr } from '@angular/http';
import { UserService } from './ngrx/services/user.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';
import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { FixedPluginModule} from './shared/fixedplugin/fixedplugin.module';
import { NguiMapModule} from '@ngui/map';
import { UserComponent } from './user/user.component';



import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { userReducer } from './ngrx/store/user/user.reduce';
import { AlertMsgComponent } from './alert-msg/alert-msg.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { HeaderblogComponent} from './blog/headerblog/headerblog.component';
import {

  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule
} from '@angular/material';
// import * as bootstrap from "bootstrap";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import { articleReducer } from './ngrx/store/article/article.reduce';
import { categoriesReducer } from './ngrx/store/category/category.reduce';

import { DashComponent } from './dash/dash.component';
import { ArticlesComponent } from './dash/articles/articles.component';
import { BlogComponent } from './blog/blog.component';
import { LoginComponent } from './login/login.component';
import { ArticleblogComponent } from './blog/articleblog/articleblog.component';
import { MyArticlesComponent } from './blog/my-articles/my-articles.component';
import { NewArticleComponent } from './blog/new-article/new-article.component';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { CardArticleComponent } from './blog/card-article/card-article.component';
import { RegisterComponent } from './register/register.component';
import { HomeGuard } from './ngrx/services/home-guard.service';
import { AdminGuard } from './ngrx/services/admin-service';
import { UserGuard } from './ngrx/services/user-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UsersComponent,
    ArticlesComponent,
    AlertMsgComponent,
    UserFilterPipe,
    ArticleFilterPipe,
    AddCategoryComponent,
    DashComponent,
    BlogComponent,
    LoginComponent,
    HeaderblogComponent,
    HomeblogComponent,
    ArticleblogComponent,
    MyArticlesComponent,
    NewArticleComponent,
    CardArticleComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes,
      {enableTracing: true }),
    SidebarModule,
    NavbarModule,
    FooterModule,
    FixedPluginModule,
    HttpClientModule,
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=YOUR_KEY_HERE'}),
    NgbModule.forRoot(),
    StoreModule.forRoot({
       users: userReducer,
       articles : articleReducer,
       categories: categoriesReducer}),
    EffectsModule.forRoot([
      UserEffects,
      ArticleEffects,
      CategoryEffects]),
    BrowserAnimationsModule,

    // angular mateiral module
    CdkTableModule,
    CdkTreeModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    // devTolls google chrome
    StoreDevtoolsModule.instrument({
      maxAge: 10
    }),
    FilterPipeModule,
    FormsModule,
    ReactiveFormsModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot()
  ],
    providers: [UserService,
    ArticlesService,
    UserLogic,
    ArticleLogic,
    CategoryLogic,
    AuthService,
    AuthGuard,
    HomeGuard,
    UserGuard,
    AdminGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HandleErrorInterceptor,
      multi: true
    },
],
  exports: [HomeblogComponent],
  bootstrap: [AppComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],

  entryComponents: [AlertMsgComponent, AddCategoryComponent, ArticleblogComponent]
})


export class AppModule { }
