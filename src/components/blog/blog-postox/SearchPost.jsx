"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState, useCallback } from "react";
import { debounce } from "lodash";  // You need to install lodash if you haven't already
import { Search } from "@/svg";

export default function SearchPost() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [title, setTitle] = useState("");
  const pathname = usePathname()
  if( pathname !=='/blog'){
    return false;
  }

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
  const handleSearchChange = (e) => {
    const newTitle = e.target.value;
    setTitle(newTitle); // Update the title state
    debouncedUpdateURL({ title: newTitle });
  };

  return (
    <form action="#">
      {
        pathname ==='/blog' &&

      <div className="tp-sidebar-search-input">
        <input
          type="text"
          placeholder="Search..."
          value={title} // Bind input value to state
          onChange={handleSearchChange} // Update state on change
        />
        <button type="button">
          {/* Use the search icon here */}
          <Search />
        </button>
      </div>
        }
    </form>
  );
}
