import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  { path: '', renderMode: RenderMode.Prerender },
  { path: 'data-binding', renderMode: RenderMode.Prerender },
  { path: 'structural-directive-ngif-vs-if', renderMode: RenderMode.Prerender },
  { path: 'structural-directive-ngfor-vs-for', renderMode: RenderMode.Prerender },
  { path: 'structural-directives-ng-switch-vs-switch', renderMode: RenderMode.Prerender },
  { path: '**', renderMode: RenderMode.Server },
];
