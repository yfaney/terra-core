const loadArTranslation = () => import(/* webpackChunkName: "ar-translations" */ 'ar.js').then((module) => {
}).catch(error => 'An error occurred while loading ar.js');

const loadEnTranslation = () => import(/* webpackChunkName: "en-translations" */ 'en.js').then((module) => {
}).catch(error => 'An error occurred while loading en.js');

const loadEnGBTranslation = () => import(/* webpackChunkName: "en-GB-translations" */ 'en-GB.js').then((module) => {
}).catch(error => 'An error occurred while loading en-GB.js');

const loadEnUSTranslation = () => import(/* webpackChunkName: "en-US-translations" */ 'en-US.js').then((module) => {
}).catch(error => 'An error occurred while loading en-US.js');

const loadDeTranslation = () => import(/* webpackChunkName: "de-translations" */ 'de.js').then((module) => {
}).catch(error => 'An error occurred while loading de.js');

const loadPtTranslation = () => import(/* webpackChunkName: "pt-translations" */ 'pt.js').then((module) => {
}).catch(error => 'An error occurred while loading pt.js');

const loadPtBRTranslation = () => import(/* webpackChunkName: "pt-BR-translations" */ 'pt-BR.js').then((module) => {
}).catch(error => 'An error occurred while loading pt-BR.js');

const loadFrTranslation = () => import(/* webpackChunkName: "fr-translations" */ 'fr.js').then((module) => {
}).catch(error => 'An error occurred while loading fr.js');

const loadFrFRTranslation = () => import(/* webpackChunkName: "fr-FR-translations" */ 'fr-FR.js').then((module) => {
}).catch(error => 'An error occurred while loading fr-FR.js');

const loadEsTranslation = () => import(/* webpackChunkName: "es-translations" */ 'es.js').then((module) => {
}).catch(error => 'An error occurred while loading es.js');

const loadEsUSTranslation = () => import(/* webpackChunkName: "es-US-translations" */ 'es-US.js').then((module) => {
}).catch(error => 'An error occurred while loading es-US.js');

const loadEsESTranslation = () => import(/* webpackChunkName: "es-ES-translations" */ 'es-ES.js').then((module) => {
}).catch(error => 'An error occurred while loading es-ES.js');

const loadFiFITranslation = () => import(/* webpackChunkName: "fi-FI-translations" */ 'fi-FI.js').then((module) => {
}).catch(error => 'An error occurred while loading fi-FI.js');

const loadNlTranslation = () => import(/* webpackChunkName: "nl-translations" */ 'nl.js').then((module) => {
}).catch(error => 'An error occurred while loading nl.js');

const loadNlBETranslation = () => import(/* webpackChunkName: "nl-BR-translations" */ 'nl-BE.js').then((module) => {
}).catch(error => 'An error occurred while loading nl-BE.js');

const loadSvTranslation = () => import(/* webpackChunkName: "sv-translations" */ 'sv.js').then((module) => {
}).catch(error => 'An error occurred while loading sv.js');

const loadSvSETranslation = () => import(/* webpackChunkName: "sv-SE-translations" */ 'sv-SE.js').then((module) => {
}).catch(error => 'An error occurred while loading sv-SE.js');

const translationLoaders = {
  ar: loadArTranslation,
  en: loadEnTranslation,
  'en-GB': loadEnGBTranslation,
  'en-US': loadEnUSTranslation,
  de: loadDeTranslation,
  pt: loadPtTranslation,
  'pt-BR': loadPtBRTranslation,
  fr: loadFrTranslation,
  'fr-FR': loadFrFRTranslation,
  es: loadEsTranslation,
  'es-US': loadEsUSTranslation,
  'es-ES': loadEsESTranslation,
  'fi-FI': loadFiFITranslation,
  nl: loadNlTranslation,
  'nl-BE': loadNlBETranslation,
  sv: loadSvTranslation,
  'sv-SE': loadSvSETranslation,
};

module.exports = translationLoaders;
