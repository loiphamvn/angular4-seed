import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import {
//   TabsModule,
//   ModalModule,
//   CollapseModule,
//   AccordionModule,
//   TooltipModule,
//   BsDropdownModule,
//   ProgressbarModule,
//   PaginationModule,
//   DatepickerModule,
//   TypeaheadModule
// } from 'ngx-bootstrap';
// import { GravatarDirective } from './directives/gravatar';
import { SessionService } from './services/session';

import { TrimPipe } from './pipes/trim';
import { CapitalizePipe } from './pipes/capitalize';
import { CharactersPipe } from './pipes/characters';

@NgModule({
  imports: [
    CommonModule,
    // TooltipModule,
    // ProgressbarModule,
    // TabsModule,
    // ModalModule,
    // CollapseModule,
    // AccordionModule,
    // BsDropdownModule,
    // DatepickerModule,
    // TypeaheadModule,
  ],
  declarations: [
    TrimPipe,
    CapitalizePipe,
    CharactersPipe,
    // GravatarDirective
  ],
  exports: [
    CommonModule,
    // TooltipModule,
    // ProgressbarModule,
    // TabsModule,
    // ModalModule,
    // CollapseModule,
    // AccordionModule,
    // BsDropdownModule,
    // DatepickerModule,
    // TypeaheadModule,
    // TrimPipe,
    // CapitalizePipe,
    // CharactersPipe,
    // GravatarDirective
  ],
  providers: [
    SessionService
  ]
})
export class SharedModule {}
