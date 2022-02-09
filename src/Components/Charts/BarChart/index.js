import React, {useEffect, useRef} from 'react'
import * as d3 from 'd3';
const BarChart = () => {
    const ref = useRef()
    const dataset = [100, 200, 300, 400, 500];

    useEffect(() => {
        let size = 500;
   let svg = d3.select(ref.current)
               .append('svg')
               .attr('width', size)
               .attr('height', size);
   let rect_width = 75;
   svg.selectAll('rect')
      .data(dataset)
      .enter()
      .append('rect')
      .attr('x', (d, i) => 4 + i*(rect_width + 4))
      .attr('y', d => size - d)
      .attr('width', rect_width)
      .attr('height', d => d)
      .attr('fill', 'teal');  
    }, [])
    return (
        <div ref={ref}></div>
    )
}

export default BarChart