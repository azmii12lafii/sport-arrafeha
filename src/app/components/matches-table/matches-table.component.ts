import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-matches-table',
  templateUrl: './matches-table.component.html',
  styleUrls: ['./matches-table.component.css']
})
export class MatchesTableComponent implements OnInit {
  matchesTab: any;
  pageOfItems: Array<any>;

  constructor(private myRouter: Router, private matchService: MatchService) { }

  ngOnInit() {
    //response: array of object
    this.reloadData();
  }
  displayMatch(id: number) {
    ;
    this.myRouter.navigate([`matchinfo/${id}`]);
  }
  updateMatch(id: number) {
    ;
    localStorage.setItem("matchId", JSON.stringify(id));
    this.myRouter.navigate(["editmatch"]);

  }
  deleteMatch(id: number) {
    this.matchService.deleteMatch(id).subscribe((response) => {
      this.reloadData();
    });

  }

  reloadData() {
    this.matchService.getAllMatches().subscribe(
      (response) => {
        this.matchesTab = response.matches;
      });
  }
  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
  }

}
