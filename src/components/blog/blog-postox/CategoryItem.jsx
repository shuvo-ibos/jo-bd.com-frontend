"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { debounce } from "lodash";
import { useCallback } from "react";

export default function CategoryItem({item}) {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Update URL with debouncing
  const debouncedUpdateURL = useCallback(
    debounce((newParams) => {
      const current = new URLSearchParams(Array.from(searchParams.entries()));

      Object.entries(newParams).forEach(([key, value]) => {
        if (value) {
          current.set(key, value);
        } else {
          current.delete(key);
        }
      });

      const search = current.toString();
      const query = search ? `?${search}` : "";
      router.push(`${window.location.pathname}${query}`);
    }, 300),
    [searchParams, router]
  );

  // Handle the search input change
  const handleSearchChange = (value) => {

    debouncedUpdateURL({ category: value });
  };
  return <li><div style={{
    cursor:'pointer'
  }} onClick={()=>handleSearchChange(item?.name)}  >{item?.name} <span>({item?.count})</span></div></li>
}
