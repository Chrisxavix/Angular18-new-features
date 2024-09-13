import { ApplicationConfig } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withViewTransitions({
        /* Al iniciar la página no realiza ninguna transición */
        skipInitialTransition: true,
        onViewTransitionCreated( transitionResponse ) {
          console.log("transitionResponse: ", transitionResponse);

        }
      }),
    )
  ]
};
