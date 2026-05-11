import { Component, inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CdsButtonModule } from '@cds-library/button';
import { CdsChipsModule } from '@cds-library/chips';
import { CdsDialogModule } from '@cds-library/dialog';
import { CdsDividerModule } from '@cds-library/divider';
import { CdsIconModule } from '@cds-library/icon';

interface NotificationItem {
  id: number;
  icon: string;
  title: string;
  message: string;
  time: string;
  category: 'Campaigns' | 'Billing' | 'Platform';
  priority: 'High' | 'Medium' | 'Low';
  unread: boolean;
  actionLabel?: string;
  route?: string;
}

@Component({
  imports: [CdsButtonModule, CdsChipsModule, CdsDialogModule, CdsDividerModule, CdsIconModule],
  selector: 'ds-shl-notifications-dialog',
  template: `
    <section class="notifications-dialog" aria-labelledby="notifications-title">
      <header class="notifications-header">
        <div>
          <p class="eyebrow">Notification center</p>
          <h1 id="notifications-title" mat-dialog-title>What needs attention</h1>
          <p class="summary">{{ unreadCount }} unread updates across active accounts and campaigns.</p>
        </div>

        <button mat-icon-button aria-label="Close notifications" (click)="close()">
          <mat-icon>close</mat-icon>
        </button>
      </header>

      <div class="summary-grid" aria-label="Notification summary">
        @for (item of summaryCards; track item.label) {
        <div class="summary-card">
          <mat-icon>{{ item.icon }}</mat-icon>
          <span class="summary-value">{{ item.value }}</span>
          <span class="summary-label">{{ item.label }}</span>
        </div>
        }
      </div>

      <mat-divider></mat-divider>

      <div class="notifications-list" role="list">
        @for (notification of notifications; track notification.id) {
        <article class="notification" [class.unread]="notification.unread" role="listitem">
          <div class="notification-icon">
            <mat-icon>{{ notification.icon }}</mat-icon>
          </div>

          <div class="notification-body">
            <div class="notification-title-row">
              <h2>{{ notification.title }}</h2>
              @if (notification.unread) {
              <span class="unread-dot" aria-label="Unread notification"></span>
              }
            </div>

            <p>{{ notification.message }}</p>

            <div class="notification-meta">
              <span>{{ notification.time }}</span>
              <mat-chip-set aria-label="Notification labels">
                <mat-chip>{{ notification.category }}</mat-chip>
                <mat-chip>{{ notification.priority }}</mat-chip>
              </mat-chip-set>
            </div>
          </div>

          @if (notification.actionLabel) {
          <button mat-button color="primary" (click)="openNotification(notification)">
            {{ notification.actionLabel }}
          </button>
          }
        </article>
        }
      </div>

      <footer class="notifications-actions">
        <button mat-button (click)="markAllAsRead()" [disabled]="unreadCount === 0">Mark all as read</button>
        <button mat-flat-button color="primary" (click)="viewAll()">View all notifications</button>
      </footer>
    </section>
  `,
  styles: [
    `
      :host {
        display: block;
      }

      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }

      .notifications-dialog {
        width: 100%;
        max-width: 732px;
        overflow: hidden;
      }

      .notifications-header {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: var(--spacing-2);
        padding: var(--spacing-3) var(--spacing-3) 0;
      }

      .eyebrow {
        margin: 0 0 var(--spacing-0-5);
        color: var(--primary-5);
        font-size: var(--font-level-p2-bold-font-size);
        font-weight: var(--font-level-p2-bold-font-weight);
        line-height: var(--font-level-p2-bold-line-height);
        text-transform: uppercase;
      }

      h1 {
        margin: 0;
      }

      .summary {
        margin: var(--spacing-0-5) 0 0;
        color: var(--neutral-6);
      }

      .summary-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: var(--spacing-1);
        padding: var(--spacing-3);
      }

      .summary-card {
        display: grid;
        grid-template-columns: auto 1fr;
        gap: var(--spacing-0-5) var(--spacing-1);
        align-items: center;
        padding: var(--spacing-1-5);
        border: 1px solid var(--neutral-2);
        border-radius: var(--radius-md);
        background: var(--neutral-0-5);
      }

      .summary-card mat-icon {
        color: var(--primary-5);
      }

      .summary-value {
        color: var(--neutral-9);
        font-size: var(--font-level-subtitle-font-size);
        font-weight: var(--font-level-subtitle-font-weight);
        line-height: var(--font-level-subtitle-line-height);
      }

      .summary-label {
        grid-column: 1 / -1;
        color: var(--neutral-6);
        font-size: var(--font-level-p2-reg-font-size);
        line-height: var(--font-level-p2-reg-line-height);
      }

      .notifications-list {
        display: grid;
        gap: var(--spacing-1);
        max-height: min(42vh, 360px);
        overflow-x: hidden;
        overflow-y: auto;
        padding: var(--spacing-2) var(--spacing-3);
      }

      .notification {
        display: grid;
        grid-template-columns: auto minmax(0, 1fr) max-content;
        gap: var(--spacing-1-5);
        align-items: start;
        padding: var(--spacing-1-5);
        border: 1px solid var(--neutral-2);
        border-radius: var(--radius-md);
      }

      .notification.unread {
        border-color: var(--primary-3);
        background: var(--primary-0);
      }

      .notification-icon {
        display: grid;
        place-items: center;
        width: var(--width-5);
        height: var(--height-5);
        border-radius: var(--radius-full);
        background: var(--neutral-1);
        color: var(--primary-5);
      }

      .notification-body {
        min-width: 0;
      }

      .notification-title-row {
        display: flex;
        align-items: center;
        gap: var(--spacing-1);
      }

      h2 {
        margin: 0;
        color: var(--neutral-9);
        font-size: var(--font-level-p1-bold-font-size);
        font-weight: var(--font-level-p1-bold-font-weight);
        line-height: var(--font-level-p1-bold-line-height);
      }

      .notification p {
        margin: var(--spacing-0-5) 0 var(--spacing-1);
        color: var(--neutral-7);
      }

      .unread-dot {
        width: 8px;
        height: 8px;
        border-radius: var(--radius-full);
        background: var(--primary-5);
      }

      .notification-meta {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: var(--spacing-1);
        color: var(--neutral-5);
        font-size: var(--font-level-p2-reg-font-size);
      }

      mat-chip {
        min-height: 24px;
      }

      .notifications-actions {
        display: flex;
        justify-content: flex-end;
        gap: var(--spacing-1);
        padding: 0 var(--spacing-3) var(--spacing-3);
      }

      @media (max-width: 640px) {
        .notifications-dialog {
          width: calc(100vw - 24px);
        }

        .summary-grid,
        .notification {
          grid-template-columns: 1fr;
        }

        .notifications-actions {
          flex-wrap: wrap;
        }

        .notification-icon {
          display: none;
        }
      }
    `,
  ],
})
export class NotificationsDialogComponent {
  private readonly dialogRef = inject(MatDialogRef<NotificationsDialogComponent>);
  private readonly router = inject(Router);

  notifications: NotificationItem[] = [
    {
      id: 1,
      icon: 'campaign',
      title: 'Budget pacing needs review',
      message: 'Spring Retargeting is projected to underspend by 18% unless daily budget is adjusted before Friday.',
      time: '12 min ago',
      category: 'Campaigns',
      priority: 'High',
      unread: true,
      actionLabel: 'Review',
      route: '/campaigns',
    },
    {
      id: 2,
      icon: 'approval',
      title: 'Creative approval requested',
      message: 'Four new product creatives are waiting for brand review before they can go live.',
      time: '42 min ago',
      category: 'Campaigns',
      priority: 'Medium',
      unread: true,
      actionLabel: 'Open',
      route: '/campaigns',
    },
    {
      id: 3,
      icon: 'sync',
      title: 'Audience sync completed',
      message: 'Retail high-intent shoppers were refreshed and added to 6 active commerce campaigns.',
      time: 'Today, 09:18',
      category: 'Platform',
      priority: 'Low',
      unread: false,
    },
    {
      id: 4,
      icon: 'receipt_long',
      title: 'April invoice is ready',
      message: 'Your consolidated media invoice is available with spend grouped by account and market.',
      time: 'Yesterday',
      category: 'Billing',
      priority: 'Medium',
      unread: true,
      actionLabel: 'View',
    },
    {
      id: 5,
      icon: 'monitoring',
      title: 'Conversion tracking recovered',
      message: 'The checkout confirmation event is receiving traffic again after a temporary drop.',
      time: 'May 9',
      category: 'Platform',
      priority: 'Low',
      unread: false,
    },
  ];

  get unreadCount(): number {
    return this.notifications.filter(notification => notification.unread).length;
  }

  get summaryCards() {
    return [
      { icon: 'mark_email_unread', value: this.unreadCount, label: 'Unread' },
      { icon: 'priority_high', value: this.notifications.filter(notification => notification.priority === 'High').length, label: 'High priority' },
      { icon: 'event_available', value: '2', label: 'Due this week' },
    ];
  }

  markAllAsRead(): void {
    this.notifications = this.notifications.map(notification => ({ ...notification, unread: false }));
  }

  openNotification(notification: NotificationItem): void {
    notification.unread = false;

    if (notification.route) {
      this.close();
      this.router.navigateByUrl(notification.route);
    }
  }

  viewAll(): void {
    this.close();
  }

  close(): void {
    this.dialogRef.close({ unreadCount: this.unreadCount });
  }
}
