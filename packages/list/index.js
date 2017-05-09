import SealList from './src/main';

/* istanbul ignore next */
SealList.install = function(Vue) {
    Vue.component(SealList.name, SealList);
};

export default SealList;
