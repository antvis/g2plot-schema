import * as G2Plot from '@antv/g2plot';
import * as React from 'react';

interface Props {
  option: any;
  data: object[];
  type: string;
}
export default React.memo(function Chart(props: Props) {
  const { data, option, type } = props;
  const container = React.useRef<HTMLDivElement>();
  const [plot, setPlot] = React.useState<any>(null);
  React.useEffect(() => {
    const plot = new G2Plot[type](container.current, { data, ...option });
    plot.render();
    setPlot(plot);
  }, []);
  React.useEffect(() => {
    if (plot) {
      plot.update({ data, ...option });
      plot.render();
    }
  }, [option, data]);
  return <div className="canvas-container" ref={container}></div>;
});
