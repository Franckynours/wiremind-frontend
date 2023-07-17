import { Component, Input, OnInit } from '@angular/core';
import { ChartOptions } from 'chart.js';
import { Commit } from '../../../../domain/repository.model';
import * as _ from 'lodash';
import 'chartjs-adapter-luxon';

@Component({
  selector: 'app-repository-commits-timeline',
  templateUrl: './timeline.component.html',
})
export class RepositoryCommitsTimelineComponent {
  @Input()
  set commits(commits: Commit[]) {
    this.lineChartDatasets = [
      {
        label: 'Commits',
        data: commits.map((commit) => ({ x: commit.commit.author.date, y: 1 })),
      },
    ];
  }
  // Line
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: true,
    showLine: false,
    scales: {
      x: {
        type: 'time',
        time: {
          unit: 'month',
        },
      },
      y: {
        ticks: {
          display: false,
        },
      },
    },
  };
  public lineChartDatasets: {
    label?: string;
    data: { x: string; y: number }[];
  }[] = [
    {
      data: [],
    },
  ];
}
