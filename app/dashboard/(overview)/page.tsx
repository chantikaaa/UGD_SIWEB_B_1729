import CardWrapper from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import LatestReservations from '../../ui/dashboard/latest-reservations';
import { kanit, inter } from "../../ui/fonts";
import { Suspense } from 'react';
import { 
  RevenueChartSkeleton,
  LatestInvoicesSkeleton, 
  LatestReservationsSkeleton,
  CardsSkeleton,
} from '@/app/ui/skeletons';

export default async function Page() {
    await new Promise((resolve) => setTimeout(resolve,3000));
    return (
        <main>
        <div className={`${kanit.className} flex min-h-screen flex-col`}>
          <p className="text-2xl font-semibold mb-4">Dashboard</p>
        <div className={`${inter.className} grid gap-6 sm:grid-cols-2 lg:grid-cols-4`}>
        <Suspense fallback={<CardsSkeleton />}>
          <CardWrapper />
        </Suspense>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <Suspense fallback={<RevenueChartSkeleton />}>
          <RevenueChart />
        </Suspense>
        <Suspense fallback={<LatestInvoicesSkeleton />}>
          <LatestInvoices />
        </Suspense>
        <Suspense fallback={<LatestReservationsSkeleton />}>
        <LatestReservations />
        </Suspense>
      </div>
      </div>
        </main>
    )
    }
