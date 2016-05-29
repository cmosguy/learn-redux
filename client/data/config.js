import Raven from 'raven-js';

const sentry_key = '902f1ad237f44ca4be5112a815391011';
const sentry_app = '80450';
export const sentry_url = `https://${sentry_key}@app.getsentry.com/${sentry_app}`;

export function logException(ex, context) {
  Raven.captureException(ex, {
    extra: context
  });
  /*eslint no-console:0*/
  window && window.console && console.error && console.error(ex);
}
