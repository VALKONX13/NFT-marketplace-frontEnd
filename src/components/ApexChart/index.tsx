"use client";

import React from "react";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";

// Dynamically import ReactApexChart
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const ApexChart = () => {
  const chartOptions: ApexOptions = {
    colors: ['rgba(127, 77, 229, 0.13)', '#8C52FF'],
    chart: {
      height: 350,
      type: "line",
    },
    grid: {
      borderColor: 'transparent', // hides all grid lines
    },
    stroke: {
      width: [0, 2],
    },

    title: {
      text: "",
    },
    dataLabels: {
      enabled: false,
      enabledOnSeries: [0],
    },
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
    ],
    yaxis: {
      min: 0,
      max: 200,
      tickAmount: 4, // creates 5 ticks: 0, 50, 100, 150, 200
      labels: {
        style: {
          colors: "#fff",
          fontSize: "12px",
        },
      },
    },
    xaxis: {
      axisBorder: {
        show: true,
        color: 'transparent', // hides the base line
      },
      axisTicks: {
        show: false, // optionally hide ticks too
      },
      labels: {
        style: {
          colors: "#fff", // Tailwind gray-500
          fontSize: "12px",
          fontWeight: "light",
          fontFamily: "Inter, sans-serif",
        },
      },
    },
    markers: {
      size: [0, 5], // no marker on bars, dot marker for line series
      colors: ['#8C52FF'],
      strokeColors: '#8C52FF',
      strokeWidth: 2,
    },
    plotOptions: {
      bar: {
        borderRadius: 14, // Controls how rounded the top of the bar is
        borderRadiusApplication: 'end', // Only round the top (not bottom)
        columnWidth: '80%', // Optional: controls width of bars
      },
    },
  };

  const series = [
    {
      name: "",
      type: "column" as const,
      data: [55, 160, 90, 130, 30, 90, 35],
    },
    {
      name: "",
      type: "line" as const,
      data: [40, 110, 60, 90, 20, 70, 25],
    },
  ];

  return (
    <div id="chart">
      <ReactApexChart options={chartOptions} series={series} type="line" height={350} />
    </div>
  );
};

export default ApexChart;
