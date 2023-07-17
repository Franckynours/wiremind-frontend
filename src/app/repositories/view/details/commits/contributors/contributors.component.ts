import { Component, Input, OnInit } from '@angular/core';
import { ChartOptions } from 'chart.js';
import { Commit } from '../../../../domain/repository.model';
import * as _ from 'lodash';

@Component({
  selector: 'app-repository-commits-contributors',
  templateUrl: './contributors.component.html',
})
export class RepositoryCommitsContributorsComponent {
  @Input()
  set commits(commits: Commit[]) {
    const authors: { [name: string]: number } = _.countBy(
      commits,
      (commit: Commit) => commit.commit.author.name
    );
    this.pieChartDatasets = [{ data: Object.values(authors) }];
    this.pieChartLabels = Object.keys(authors);
    this.pieChartLegend = this.pieChartLabels.length < 7;
  }
  // Pie
  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: true,
  };
  public pieChartLabels: string[] = [];
  public pieChartDatasets: { data: number[] }[] = [
    {
      data: [],
    },
  ];
  public pieChartLegend = true;
  public pieChartPlugins = [];
}
