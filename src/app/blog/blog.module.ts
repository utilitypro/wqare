import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';

@NgModule({
  declarations: [BlogComponent],
    imports: [CommonModule, BlogRoutingModule, AutocompleteLibModule],
})
export class BlogModule {}
