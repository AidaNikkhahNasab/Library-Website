import { NgModule } from "@angular/core";
import { LoginComponent } from "./login.component";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {MatButtonModule} from '@angular/material/button';
import { I18nModule } from "../i18n/i18n.module";
import { TranslateModule } from "@ngx-translate/core";
import { RegisterComponent } from "../register/register.component";

@NgModule({
    declarations: [LoginComponent, RegisterComponent],
    imports: [FormsModule, CommonModule, BrowserAnimationsModule, MatButtonModule,I18nModule, TranslateModule]
})

export class LoginModule {}