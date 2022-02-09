import React, { useState, useEffect } from "react";
import * as d3 from 'd3';
import { merge } from "lodash";
const LineChart = (props) => {
    const {width,height} = props;
    const [data, setData] = useState([]);
    useEffect(()=>{
        if(data.length>0)
        {
            drawChart()
        }
        else{
            generateData();
        }
    },[data])
    const drawChart = ( ) =>{
        const margin = {
            top:50, bottom:50, left:50, right:50
        };
        const  YMinValue = d3.min(data, d => d.value);
        const  YMaxValue = d3.max(data, d => d.value);
        const  XMinValue = d3.min(data, d => d.label);
        const  XMaxValue = d3.max(data, d => d.label);

        const svg = d3
                    .select('#chart')
                    .append('svg')
                    .attr('width',width + margin.left + margin.right)
                    .attr('height',height + margin.top + margin.bottom)
                    .append('g')
                    .attr('transform',`translate(${margin.left},${margin.top})`);
        const XScale = d3
            .scaleLinear()
            .domain([XMinValue,XMaxValue])
            .range([0,width]);
        const YScale = d3
            .scaleLinear()
            .domain([0,YMaxValue])
            .range([height,0]);
        
        // svg
        //     .append('g')
        //     .attr('class','grid')
        //     .call(
        //         d3
        //         .axisLeft(YScale)
        //         .tickSize(-width)
        //         .tickFormat('')
        //     )
        // svg
        //     .append('g')
        //     .attr('class','grid')
        //     .attr('transform',`translate(0,${height})`)
        //     .call(
        //         d3
        //         .axisBottom(XScale)
        //         .tickSize(-height)
        //         .tickFormat('')
        //     )

        svg
            .append('g')
            .attr('class','x-axis')
            .attr('transform',`translate(0,${height})`)
            .call(
                d3
                .axisBottom(XScale).scale(XScale).tickSize(15)
            )
        svg
            .append('g')
            .attr('class','y-axis')
            .call(
                d3
                .axisLeft(YScale).scale(YScale).tickSize(15)
            )
        
        const line = d3
                .line()
                .x(d=>XScale(d.label))
                .y(d=>YScale(d.value))
                // .curve(d3.curveMonotoneX);
        svg.append('path')
            .datum(data)
            .attr('fill','none')
            .attr('stroke','#ff5f66')
            .attr('stroke-width',4)
            .attr('class','line')
            .attr('d',line)
    }
    const generateData = ( ) =>{ 
        const chartData = [];
        for(let i=0; i<20;i++)
        {
            const value= Math.floor(Math.random()*i+3)
            chartData.push({
                label:i,
                value
            });
        }
        setData(chartData)
    }
    return (
        <div id="chart">

        </div>
    );
};

export default LineChart;