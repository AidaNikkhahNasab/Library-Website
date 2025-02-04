import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchBookComponent} from './search-book/search-book.component'
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import { AdminComponent } from './admin/admin.component';
import { AppRoutingModule } from './app-routing.module';
import { I18nModule } from './i18n/i18n.module';
import { SelectLanguageComponent } from './select-language/select-language.component';
import {MatListModule} from '@angular/material/list'; 
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import {MatInputModule} from '@angular/material/input';
import { MatFormField } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginModule } from './login/login.module';
import { BookComponent } from './book/book.component';
import { HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import { ChatComponent } from './chat/chat.component';
import { WebSocketService } from './services/web-socket.service';
import { UserInfoComponent } from './user-info/user-info.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import { ReserveBookComponent } from './reserve-book/reserve-book.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    SearchBookComponent,
    ContactComponent,
    AdminComponent,
    SelectLanguageComponent,
    BookComponent,
    ChatComponent,
    UserInfoComponent,
    AdminProfileComponent,
    UserProfileComponent,
    ProfileEditComponent,
    ReserveBookComponent
  ],
  imports: [
    BrowserModule,
    MatSidenavModule,
    TranslateModule,
    MatListModule,
    MatMenuModule,
    FlexLayoutModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    AppRoutingModule,
    MatCardModule,
    MatSelectModule,
    HttpClientModule,
    MatSelectModule,
    I18nModule,
    MatFormFieldModule,
    MatTableModule,
    FormsModule,
    LoginModule,
    ReactiveFormsModule
  ],
  exports: [
    AppRoutingModule
  ],
  providers: [WebSocketService],
  bootstrap: [AppComponent]
})

export class AppModule { }
