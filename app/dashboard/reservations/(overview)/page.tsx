import Pagination from '@/app/ui/invoices/pagination';
import { Card } from "@/app/ui/dashboard/cards";
import LatestReservations from "@/app/ui/dashboard/latest-reservations";
import { fetchLatestReservations } from "@/app/lib/data";
import { fetchReservationsPages } from '@/app/lib/data';
import ReservationsTable from "@/app/ui/reservations/table";
import { CreateReservations } from "@/app/ui/reservations/buttons";
import Search from "@/app/ui/search";
import Table from "@/app/ui/reservations/table"
import { 
    kanit, 
    lusitana, 
    inter 
} from "@/app/ui/fonts";
import { CreateReservationsSkeleton, ReservationsTableSkeleton, SearchReservationsSkeleton, ReservationTitle } from "@/app/ui/skeletons";
import { Suspense } from "react";

export default async function Page({
    searchParams,
  }: {
    searchParams?: {
      query?: string;
      page?: string;
    };
  }) {
    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;
        
    const totalPages = await fetchReservationsPages(query);

    return (
    <div className= "flex min-h-screen flex-col">
        <p className={`${lusitana.className} text-2xl`}>Reservations</p>
        <p className={`${lusitana.className}`}>221711729 </p>
        <p className={`${lusitana.className}`}>Cinta Chantika Lestari </p>

        <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
            <Suspense fallback={<SearchReservationsSkeleton/>}>
                <Search placeholder="Search reservations..."/>
            </Suspense>
            <Suspense fallback={<CreateReservationsSkeleton/>}>
                <CreateReservations/>
            </Suspense>
        </div>
        <div className="mt-5 flex w-full justify-center">            
        </div>
        <Suspense key={query + currentPage} fallback={<ReservationsTableSkeleton />}>
            <Table query={query} currentPage={currentPage} />
        </Suspense>
        <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
    );
    }
