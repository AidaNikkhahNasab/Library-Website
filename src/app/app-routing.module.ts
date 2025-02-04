import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchBookComponent } from './search-book/search-book.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { BookComponent } from './book/book.component';
import { AdminComponent } from './admin/admin.component';
import { RegisterComponent } from './register/register.component';
import { ChatComponent } from './chat/chat.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import { ReserveBookComponent } from './reserve-book/reserve-book.component';


const routes: Routes = [ 
  { path: 'book', component: BookComponent  },
  { path: 'search', component: SearchBookComponent },
  { path: 'contact', component: ContactComponent  },
  { path: 'login', component: LoginComponent  },
  { path: 'register', component: RegisterComponent  },
  { path: 'admin', component: AdminComponent  },
  { path: 'editUserPr', component: ProfileEditComponent  },
  { path: 'chat', component: ChatComponent  },
  { path: 'userI', component: UserInfoComponent  },
  { path: 'userPr', component: UserProfileComponent  },
  { path: 'adminP', component: AdminProfileComponent  },
  { path: 'reserve', component: ReserveBookComponent  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
