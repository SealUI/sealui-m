import SealSpinner from './src/main';

/* istanbul ignore next */
SealSpinner.install = function(Vue) {
    Vue.component(SealSpinner.name, Spinner);
};

export default SealSpinner;
