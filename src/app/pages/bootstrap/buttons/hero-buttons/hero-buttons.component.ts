import { Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ngx-hero-buttons',
  styleUrls: ['./hero-buttons.component.scss'],
  templateUrl: './hero-buttons.component.html',
})
export class HeroButtonComponent implements OnDestroy {

  themeName = 'default';
  settings: Array<any>;
  themeSubscription: Subscription;

  constructor(private themeService: NbThemeService) {
    this.themeSubscription = this.themeService.getJsTheme().subscribe(theme => {
      this.themeName = theme.name;
      this.init(theme.variables);
    });
  }

  init(colors: any) {
    this.settings = [{
      class: 'btn-hero-primary',
      container: 'primary-container',
      title: 'Primary Button',
      buttonTitle: 'Primary',
      corporate: {
        color: colors.primary,
        glow: {
          params: '0 0 20px 0',
          color: 'rgba (115, 161, 255, 0.5)',
        },
      },
    }, {
      class: 'btn-hero-warning',
      container: 'warning-container',
      title: 'Warning Button',
      buttonTitle: 'Warning',
      corporate: {
        color: colors.warning,
        glow: {
          params: '0 0 20px 0',
          color: 'rgba (256, 163, 107, 0.5)',
        },
      },
    }, {
      class: 'btn-hero-success',
      container: 'success-container',
      title: 'Success Button',
      buttonTitle: 'Success',
      corporate: {
        color: colors.success,
        glow: {
          params: '0 0 20px 0',
          color: 'rgba (93, 207, 227, 0.5)',
        },
      },
    }, {
      class: 'btn-hero-info',
      container: 'info-container',
      title: 'Info Button',
      buttonTitle: 'Info',
      corporate: {
        color: colors.info,
        glow: {
          params: '0 0 20px 0',
          color: 'rgba (186, 127, 236, 0.5)',
        },
      },
    }, {
      class: 'btn-hero-danger',
      container: 'danger-container',
      title: 'Danger Button',
      buttonTitle: 'Danger',
      corporate: {
        color: colors.danger,
        glow: {
          params: '0 0 20px 0',
          color: 'rgba (255, 107, 131, 0.5)',
        },
      },
    }, {
      class: 'btn-hero-secondary',
      container: 'secondary-container',
      title: 'Ghost Button',
      buttonTitle: 'Ghost',
      corporate: {
        color: '#edf2f5',
      },
    }];
  }

  ngOnDestroy() {
    this.themeSubscription.unsubscribe();
  }
}
