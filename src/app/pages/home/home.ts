import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Cart } from '../../core/cart';
import { SITE } from '../../core/site';
import { Icon } from '../../shared/icon/icon';
import { OrderForm } from '../../shared/order-form/order-form';
import { Picture } from '../../shared/picture/picture';
import { ProductCard } from '../../shared/product-card/product-card';

@Component({
  selector: 'app-home',
  imports: [RouterLink, Picture, Icon, ProductCard, OrderForm],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  protected readonly site = SITE;
  protected readonly cart = inject(Cart);
  protected readonly year = new Date().getFullYear();
  protected readonly menuOpen = signal(false);
  protected readonly split = SITE.hero.layout === 'split';

  protected readonly nav = [
    ['products', 'Products'],
    ['story', 'Our story'],
    ['order', 'Order'],
    ['contact', 'Contact'],
  ] as const;

  protected readonly socialIcon = { Facebook: 'facebook', Instagram: 'instagram', TikTok: 'tiktok' } as const;
}
