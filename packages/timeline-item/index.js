import SealTimelineItem from '../timeline/src/timeline-item';

/* istanbul ignore next */
SealTimelineItem.install = function(Vue) {
    Vue.component(SealTimelineItem.name, SealTimelineItem);
};

export default SealTimelineItem;
