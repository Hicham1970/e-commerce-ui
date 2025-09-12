"use client"

import { useSearchParams, useRouter, usePathname } from "next/navigation";


const Filter = () => {

    const searchParams = useSearchParams();
    const router = useRouter()
    const pathname = usePathname();

    const handelFilter = (value: string) => {
        const params = new URLSearchParams(searchParams);
        params.set("sort", value);
        router.push(`${pathname}?${params.toString()}`, { scroll: false });
    }


 return (
     <div className='flex items-center justify-end gap-2 text-sm text-gray-500 my-6'>
         <span className="">Sort By :</span>
         <select className="ring-1 ring-gray-200 shadow-md p-1 rounded-sm bg-[#fac23c]" title="Select sort" name="sort" id="sort" onChange={(e) => handelFilter(e.target.value)}>
             <option value="newest">Newest</option>
             <option value="oldest">Oldest</option>
             <option value="asc">Price : Low to High</option>
             <option value="desc">Price : High to Low</option>
         </select>


 </div>
 )
}

export default Filter