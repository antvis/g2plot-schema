import * as React from 'react';
import { Tooltip } from 'antd';
import InfoCircleOutlined from '@ant-design/icons/InfoCircleOutlined';

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
          <InfoCircleOutlined />
        </Tooltip>
      )}
    </div>
  );
}
