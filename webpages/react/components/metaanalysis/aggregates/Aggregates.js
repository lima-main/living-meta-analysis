import React from 'react';
import SimpleAggregates from './SimpleAggregates';
import GroupingAggregates from './GroupingAggregates';

function Aggregates(props) {
  const {
    aggregates,
    groupingAggregates,
    groups,
    groupingColumn,
    clickable,
    makeClickable,
  } = props;
  return (
    <section>
      <SimpleAggregates
        aggregates={aggregates}
        clickable={clickable}
        makeClickable={makeClickable}
        /* groupingColumnsObjs={} */
      />

      {/* TODO:  map on groupingColObj => multiple grouping aggregates */}
      <GroupingAggregates
        groupingAggregates={groupingAggregates}
        groups={groups}
        groupingColumn={groupingColumn}
        clickable={clickable}
        makeClickable={makeClickable}
      />
    </section>
  );
}

export default Aggregates;
