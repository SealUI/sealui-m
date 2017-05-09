import SealGridItem from './src/main';

/* istanbul ignore next */
SealGridItem.install = function(Vue) {
    Vue.component(SealGridItem.name, GridItem);
};

export default SealGridItem;
