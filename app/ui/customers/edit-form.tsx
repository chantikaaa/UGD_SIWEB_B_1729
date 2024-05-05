//edit form belom bcs error, gatau diganti yg mana (defaultValue??)

'use client';

import { CustomerField, CustomerForm } from '@/app/lib/definitions';
import Link from 'next/link';
import { UserCircleIcon, EnvelopeIcon, InboxArrowDownIcon } from '@heroicons/react/24/outline';
import { Button } from '@/app/ui/button';
import { updateCustomer } from '@/app/lib/actions';
import { inter } from '../fonts';
import { customers } from '@/app/lib/placeholder-data';

export default function EditCustomerForm({
    customer,
    customers,
  }: {
    customer: CustomerForm;
    customers: CustomerField[];
  }) {
    const updateCustomerWithId = updateCustomer.bind(null, customer.id);
  
  return (
    <form action={updateCustomerWithId}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* Customer Name Input */}
        <div className={`${inter.className} mb-4`}>
          <label htmlFor="name" className="mb-2 block text-sm font-medium">
            Name
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter customer name"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm placeholder:text-gray-500"
                defaultValue={customer.name}
              />
              <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
            </div>
          </div>
        </div>

        {/* Customer Email Input */}
        <div className={`${inter.className} mb-4`}>
          <label htmlFor="email" className="mb-2 block text-sm font-medium">
            Email
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter customer email"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm placeholder:text-gray-500"
                defaultValue={customer.email}
              />
              <EnvelopeIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
            </div>
          </div>
        </div>

        {/* Customer Profile Picture Upload */}
        <div className={`${inter.className} mb-4`}>
          <label htmlFor="image" className="mb-2 block text-sm font-medium">
            Upload Image
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="image"
                name="image"
                type="file"
                accept="image/*"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm file:mr-2 file:py-1 file:border-1 file:text-sm file:font-semibold  file:outline-black file:bg-gray-100 file:text-black hover:file:bg-violet-100"
                defaultValue={customer.image_url}
              />
              <InboxArrowDownIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
            </div>
          </div>
        </div>

        {/* Buttons for Cancel and Create */}
        <div className={`${inter.className} mt-6 flex justify-end gap-4`}>
          <Link
            href="/dashboard/customers"
            className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
          >
            Cancel
          </Link>
          <Button type="submit">Create Customer</Button>
        </div>
      </div>
    </form>
  );
}
