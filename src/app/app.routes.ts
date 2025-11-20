import { Routes } from '@angular/router';
import { DataBinding } from './component/data-binding/data-binding';
import { StructuralDirectiveNgifVsIf } from './component/structural-directive-ngif-vs-if/structural-directive-ngif-vs-if';
import { StructuralDirectiveNgforVsFor } from './component/structural-directive-ngfor-vs-for/structural-directive-ngfor-vs-for';
import { StructuralDirectivesNgSwitchVsSwitch } from './component/structural-directives-ng-switch-vs-switch/structural-directives-ng-switch-vs-switch';
import { Signals } from './signals/signals';


export const appRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'data-binding' },
  { path: 'data-binding', component: DataBinding },
  { path: 'structural-directive-ngif-vs-if', component: StructuralDirectiveNgifVsIf },
  { path: 'structural-directive-ngfor-vs-for', component: StructuralDirectiveNgforVsFor },
  { path: 'structural-directives-ng-switch-vs-switch', component: StructuralDirectivesNgSwitchVsSwitch },
  {path: 'app-signals', component:Signals},
  { path: '**', redirectTo: 'data-binding' },
];

