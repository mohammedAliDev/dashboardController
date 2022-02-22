// var base = d3.select(ref.current);
        // var chart = base.append("canvas")
        // .attr("width", 400)
        // .attr("height", 300);
        // var context = chart.node().getContext("2d");
        // var data = [1,2,13,20,23];

        // var scale = d3.scaleLinear()
        // .range([10, 390])
        // .domain([1,23]);

        // data.forEach(function(d, i) {
        // context.beginPath();
        // context.rect(scale(d), 150, 10, 10);
        // context.fillStyle="red";
        // context.fill();
        // context.closePath();
        // });


        // let size = 500;
        // let svg = d3.select(ref.current)
        //             .append('svg')
        //             .attr('width', size)
        //             .attr('height', size);
        // let rect_width = 75;
        // svg.selectAll('rect')
        //     .data(dataset)
        //     .enter()
        //     .append('rect')
        //     .attr('x', (d, i) => 4 + i*(rect_width + 4))
        //     .attr('y', d => size - d)
        //     .attr('width', rect_width)
        //     .attr('height', d => d)
        //     .attr('fill', 'teal');  