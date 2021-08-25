import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BlogDetailsRoutingModule } from './blog-details-routing.module';
import { BlogDetailsComponent } from './blog-details.component';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';

@NgModule({
  declarations: [BlogDetailsComponent],
    imports: [
        CommonModule,
        FormsModule,
        BlogDetailsRoutingModule,
        AutocompleteLibModule
    ]
})
export class BlogDetailsModule { }
