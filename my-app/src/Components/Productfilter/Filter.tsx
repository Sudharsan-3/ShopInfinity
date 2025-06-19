import React from 'react'

interface FilterProps {
  setfilter: (price: number) => void
  setStar: (star: number) => void
}

const Filter: React.FC<FilterProps> = ({ setfilter, setStar }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-4 w-full max-w-xs mx-auto lg:mx-0 my-4">
      <h3 className="text-xl font-semibold text-center mb-4 text-gray-700">Filter Products</h3>

      <form className="space-y-4">

        {/* Price Filter */}
        <fieldset className="grid items-center justify-center">
          <label htmlFor="price" className="text-sm font-medium text-gray-600 mb-1">
            Price Range
          </label>
          <select
            id="price"
            name="price"
            aria-label="Filter by price"
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              setfilter(Number(e.target.value))
            }
           className="w-full max-w-[140px] text-xs px-2 py-1 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 sm:max-w-none sm:text-sm sm:px-3 sm:py-2"
          >
            <option value={0}>All Prices</option>
            <option value={100}>Up to ₹100</option>
            <option value={500}>Up to ₹500</option>
            <option value={1000}>Up to ₹1000</option>
            <option value={5000}>Up to ₹5000</option>
            <option value={10000}>₹10000+</option>
          </select>
        </fieldset>

        {/* Star Filter */}
        <fieldset className="grid items-center justify-center">
          <label htmlFor="star" className="text-sm font-medium text-gray-600 mb-1">
            Minimum Rating
          </label>
          <select
            id="star"
            name="star"
            aria-label="Filter by star rating"
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              setStar(Number(e.target.value))
            }
            className=" w-full max-w-[140px] text-xs px-2 py-1 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 sm:max-w-none sm:text-sm sm:px-3 sm:py-2"
          >
            <option value={0}>All Ratings</option>
            <option value={1}>⭐ 1 & Up</option>
            <option value={2}>⭐ 2 & Up</option>
            <option value={3}>⭐ 3 & Up</option>
            <option value={4}>⭐ 4 & Up</option>
            <option value={5}>⭐ 5 Only</option>
          </select>
        </fieldset>
      </form>
    </div>
  )
}

export default Filter
