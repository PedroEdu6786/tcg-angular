import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

import { DecksService } from 'src/app/service/decks/decks.service';
import { UserAuthService } from 'src/app/service/userAuth/user-auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  decksLink: any;
  users: any;
  fileName = 'userData.xlsx';
  pdfName = 'userData.pdf';

  @ViewChild('pdfTable', { static: false }) pdfTable!: ElementRef;

  /**
   * Admin component
   * @constructor
   * @param {DecksService} deckService - deck services
   * @param {UserAuthService} userAuthService - user auth services
   */
  constructor(
    private deckService: DecksService,
    private userData: UserAuthService
  ) {}

  async ngOnInit() {
    await this.getDecks();
    await this.getUsers();
  }

  /**
   * Update user to be admin
   * @param {string} userId - user's id
   */
  async updateUser(userId: string) {
    let userData: any = localStorage.getItem('user');
    userData = JSON.parse(userData);

    await this.userData.updateUser(userId, userData.token).then(
      async (res) => {
        console.log(res);
        window.location.reload();
      },
      (err) => {
        alert(err.error.message);
      }
    );
  }

  /**
   * Get all users in the system, only available for admins
   * @param {string} author - The author of the book.
   */
  async getUsers() {
    let userData: any = localStorage.getItem('user');
    userData = JSON.parse(userData);

    await this.userData.getUsers(userData.token).then(
      async (res) => {
        console.log(res);
        this.users = res;
      },
      (err) => {
        alert(err.error.message);
      }
    );
  }

  /**
   * Get all decks in system, only available for admins
   */
  async getDecks() {
    let userData: any = localStorage.getItem('user');
    userData = JSON.parse(userData);
    await this.deckService.getDecks(userData.token).then(
      async (res) => {
        this.decksLink = res.filePath;
      },
      (err) => {
        alert(err.error.message);
      }
    );
  }

  /**
   * Export users data tu excel sheet
   */
  exportexcel(): void {
    let element = document.getElementById('usertable');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    XLSX.writeFile(wb, this.fileName);
  }

  /**
   * Exports users data to pdf
   */
  public downloadAsPDF() {
    let data: any = document.getElementById('usertable');
    html2canvas(data).then((canvas) => {
      const contentDataURL = canvas.toDataURL('image/png');
      let pdf = new jsPDF('l', 'cm', 'a4');
      pdf.addImage(contentDataURL, 'PNG', 0, 0, 29.7, 21.0);
      pdf.save(this.pdfName);
    });
  }
}
