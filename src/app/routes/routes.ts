import { Router } from 'express';
import { authRoutes } from '../modules/auth/auth.routes';
import { EventRoutes } from '../modules/event/event.route';
import { GuestInfoRoutes } from '../modules/guestInfo/guestInfo.route';
import { HeroRoutes } from '../modules/hero/hero.route';
import { RsvpRoutes } from '../modules/rsvp/rsvp.route';
import { DetailsRoutes } from '../modules/weddingDetails/details.route';
import { FooterRoutes } from '../modules/footer/footer.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/auth',
    route: authRoutes,
  },
  {
    path: '/event',
    route: EventRoutes,
  },
  {
    path: '/guestInfo',
    route: GuestInfoRoutes,
  },
  {
    path: '/hero',
    route: HeroRoutes,
  },
  {
    path: '/rsvp',
    route: RsvpRoutes,
  },
  {
    path: '/details',
    route: DetailsRoutes,
  },
  {
    path: '/footer',
    route: FooterRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
