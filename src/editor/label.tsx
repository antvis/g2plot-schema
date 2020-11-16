import * as React from 'react';
import { Tooltip, Icon } from 'antd';

interface Props {
  title: string;
  tip?: string;
}

export default function Label({ title, tip }: Props) {
  return (
    <div className="ui-label">
      <span className="ui-label-title" title={title}>
        {title}
      </span>
      {tip && (
        <Tooltip title="tip">
          <Icon type="info-circle" />
        </Tooltip>
      )}
    </div>
  );
}
