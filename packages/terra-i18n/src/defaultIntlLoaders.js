const loadArIntl = () => import(/* webpackChunkName: "ar-intl-local" */ 'intl/locale-data/jsonp/ar.js').then((module) => {
}).catch(error => 'An error occurred while loading intl/locale-data/jsonp/ar');

const loadEnIntl = () => import(/* webpackChunkName: "en-intl-local'" */ 'intl/locale-data/jsonp/en.js').then((module) => {
}).catch (error => 'An error occurred while loading intl/locale-data/jsonp/en');

const loadEnGBIntl = () => import(/* webpackChunkName: "en-GB-intl-local" */ 'intl/locale-data/jsonp/en-GB.js').then((module) => {
}).catch(error => 'An error occurred while loading intl/locale-data/jsonp/en-GB');

const loadEnUSIntl = () => import(/* webpackChunkName: "en-US-intl-local" */ 'intl/locale-data/jsonp/en-US.js').then((module) => {
}).catch(error => 'An error occurred while loading intl/locale-data/jsonp/en-US');

const loadDeIntl = () => import(/* webpackChunkName: "de-intl-local" */ 'intl/locale-data/jsonp/de.js').then((module) => {
}).catch(error => 'An error occurred while loading intl/locale-data/jsonp/de');

const loadPtIntl = () => import(/* webpackChunkName: "pt-intl-local" */ 'intl/locale-data/jsonp/pt.js').then((module) => {
}).catch(error => 'An error occurred while loading intl/locale-data/jsonp/pt');

const loadPtBRIntl = () => import(/* webpackChunkName: "pt-BR-intl-local" */ 'intl/locale-data/jsonp/pt-BR.js').then((module) => {
}).catch(error => 'An error occurred while loading intl/locale-data/jsonp/pt-BR');

const loadFrIntl = () => import(/* webpackChunkName: "fr-intl-local" */ 'intl/locale-data/jsonp/fr.js').then((module) => {
}).catch(error => 'An error occurred while loading intl/locale-data/jsonp/fr');

const loadFrFRIntl = () => import(/* webpackChunkName: "fr-FR-intl-local" */ 'intl/locale-data/jsonp/fr-FR.js').then((module) => {
}).catch(error => 'An error occurred while loading intl/locale-data/jsonp/fr-FR');

const loadEsIntl = () => import(/* webpackChunkName: "es-intl-local" */ 'intl/locale-data/jsonp/es.js').then((module) => {
}).catch(error => 'An error occurred while loading intl/locale-data/jsonp/es');

const loadEsUSIntl = () => import(/* webpackChunkName: "es-US-intl-local" */ 'intl/locale-data/jsonp/es-US.js').then((module) => {
}).catch(error => 'An error occurred while loading intl/locale-data/jsonp/es-US');

const loadEsESIntl = () => import(/* webpackChunkName: "es-ES-intl-local" */ 'intl/locale-data/jsonp/es-ES.js').then((module) => {
}).catch(error => 'An error occurred while loading intl/locale-data/jsonp/es-ES');

const loadFiFIIntl = () => import(/* webpackChunkName: "fi-FI-intl-local" */ 'intl/locale-data/jsonp/fi-FI.js').then((module) => {
}).catch(error => 'An error occurred while loading intl/locale-data/jsonp/fi-FI');

const loadNlIntl = () => import(/* webpackChunkName: "nl-intl-local" */ 'intl/locale-data/jsonp/nl.js').then((module) => {
}).catch(error => 'An error occurred while loading intl/locale-data/jsonp/nl');

const loadNlBEIntl = () => import(/* webpackChunkName: "nl-BE-intl-local" */ 'intl/locale-data/jsonp/nl-BE.js').then((module) => {
}).catch(error => 'An error occurred while loading intl/locale-data/jsonp/nl-BE');

const loadSvIntl = () => import(/* webpackChunkName: "sv-intl-local" */ 'intl/locale-data/jsonp/sv.js').then((module) => {
}).catch(error => 'An error occurred while loading intl/locale-data/jsonp/sv');

const loadSvSEIntl = () => import(/* webpackChunkName: "sv-SE-intl-local" */ 'intl/locale-data/jsonp/sv-SE.js').then((module) => {
}).catch(error => 'An error occurred while loading intl/locale-data/jsonp/sv-SE');

const intlLoaders = {
  ar: loadArIntl,
  en: loadEnIntl,
  'en-GB': loadEnGBIntl,
  'en-US': loadEnUSIntl,
  de: loadDeIntl,
  pt: loadPtIntl,
  'pt-BR': loadPtBRIntl,
  fr: loadFrIntl,
  'fr-FR': loadFrFRIntl,
  es: loadEsIntl,
  'es-US': loadEsUSIntl,
  'es-ES': loadEsESIntl,
  'fi-FI': loadFiFIIntl,
  nl: loadNlIntl,
  'nl-BE': loadNlBEIntl,
  sv: loadSvIntl,
  'sv-SE': loadSvSEIntl,
};

module.exports = intlLoaders;
