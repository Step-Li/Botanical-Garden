import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DropdownService} from '../../dropdown.service';
import {OverlayController} from '../../overlay-controller';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.scss']
})
export class HouseComponent implements OnInit {

  @Input() data: MyApp.House;
  @Input() active;

  @Output() onChanged = new EventEmitter<number>();
  site = false;

  constructor(private _dropdownService: DropdownService) {
  }

  ngOnInit() {
    if (this.data.siteUrl.length !== 0) {
      this.site = true;
    }
  }

  onHouseClick() {
    if (this.site) {
      const dialogRef: OverlayController = this._dropdownService.open({
        data: {
          name: this.data.name,
          urls: ['https://static.pexels.com/photos/223022/pexels-photo-223022.jpeg'],
          text: 'Идейные соображения высшего порядка, а также постоянный количественный рост и сфера нашей активности обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации. Товарищи! реализация намеченных плановых заданий в значительной степени обуславливает создание дальнейших направлений развития. Таким образом рамки и место обучения кадров позволяет выполнять важные задания по разработке дальнейших направлений развития. Товарищи! реализация намеченных плановых заданий позволяет оценить значение модели развития. Не следует, однако забывать, что постоянный количественный рост и сфера нашей активности влечет за собой процесс внедрения и модернизации форм развития. Таким образом постоянное информационно-пропагандистское обеспечение нашей деятельности способствует подготовки и реализации системы обучения кадров, соответствует насущным потребностям.',
          siteUrl: this.data.siteUrl
        },

      });
    }
  }
  mouseLeave() {
    this.onChanged.emit(0);
  }

  mouseEnter() {
    this.onChanged.emit(this.data.id);
  }
}
