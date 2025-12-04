import React from 'react';

const Gallery: React.FC = () => {
  return (
    <>
      <h2 className="text-gray-900 dark:text-gray-100 text-[28px] font-bold leading-tight tracking-[-0.015em] pb-4 pt-5">
        Nasze Centrum
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="col-span-2 row-span-2">
          <div
            className="w-full h-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl hover:opacity-95 transition-opacity cursor-pointer"
            data-alt="A bright, comfortable therapy room with two armchairs and a window."
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA79ZpEwrTYQwa18lwo2BY-L51qHhYle0ZMAo6PeShpp_bSLoc-wLUN_gI_DeLM4qkhL7q77pplffC9nsQ9QhjtaWlNi5GJpPoe7fJgf10GqZZUJKsgvi-bv4ascFhRDIuuyaM-PArY8Q8VxM-hubq590guD-op3pkf4ORTQIKsLP8Wr8uTw4ewH5vf4K_hv270rgv1gq_1kbSCtbY2tKkcbXsn48Jq1Yt62sb9cOxt4n1Opo2HyjG7aqOHQeCT4B9NcM9kTngf7FU")',
            }}
          />
        </div>
        <div>
          <div
            className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl hover:opacity-95 transition-opacity cursor-pointer"
            data-alt="A tranquil garden area with a wooden bench and green plants."
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA7SLALmkUFSg7wKP7jbtz377429JBRkGA0KBt9eMmxlrOh259l_YU9cZagBnfqjr7YsTiLzb4zzG-h9r-Cy60ISY6TvJpuyoXbi8vBb4paFiVufRRJTRF9WEBCdxLi_YxjUXQdxRJcjmGoX-syNIdEy6qbGla6ViEslrcxFi_A7yZwDYpOWlzp3XTzQXcJ2g32F4cCrboAtyHnsgUH8FddZan0wEppHYuuuIMNoYTLrKOZ8MLTGhx4PMfWP4rZn0io2OYdtSuqV-A")',
            }}
          />
        </div>
        <div>
          <div
            className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl hover:opacity-95 transition-opacity cursor-pointer"
            data-alt="Exterior view of the modern rehabilitation center building on a sunny day."
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAWcUVSfBrGN9UpbFP0eZjvkKRqFxr7gsJeOcFlhbtJA2uww0iz9VVpQ1g5Zwmx45fQo54Yw6Sl_zm1O44-SgqgtoFGrVGPBEh3YdAN8ANwUJAYNpfT0ULmC6XM2ylFLIM1kv13QjnS_jN-SBaWtf0d6nB5gA45dxfX4ZVNkXFK-DuYsGm9LusBt5r2qUGkwHGfyqGbkhIlDo8U_4PShwzXmazNZPOR5aANYspuFnFh2i28Dv5sMh_BaqqoAx_cqIUiN0TxNkbcc9k")',
            }}
          />
        </div>
        <div>
          <div
            className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl hover:opacity-95 transition-opacity cursor-pointer"
            data-alt="A group yoga session taking place in a spacious, well-lit room."
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDQc-W1lLwjErLbAY5S4uUdY5xvIfLoC4S6qYAuzNFWSaOvyZxTXjO2nWXHaWVYsSaCEphcASKU53HodGZnUlRMg9Ur2_g4GcmQcgG4kwlVUe4YASiLnGyYUEq2byAUN2AXKVpIy8cHlnGYYVUYDl1exkmY0bB-xJ2ZzopFbVbWEUuBxfu14uPYbjswPndVAxwSmS89rHECdUuF9mAQC53ZuQEQCoqcY-ufdxq49oQYqAPaqs-Bcl4myQi_igsSpCqvnT_9GPCOS5U")',
            }}
          />
        </div>
        <div>
          <div
            className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl hover:opacity-95 transition-opacity cursor-pointer"
            data-alt="A healthy meal being prepared in the center's clean, modern kitchen."
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBqQkHlS4sNbJktuiUK4L4KgiN9iGc39uKJjAJmvvxZ61wPXDhp0JSpZ5pLOqdVyguB7hReLuz7JwvnEaTEvmYrNo7PkGEXZyOizocBMzAhpKyA7lAhforvIKRNAwQ0eQ1RBCHWcEfU3V0Y5UN4VDyYt09VEMFfSDTwST_HEsD8bh-OLcB-0qtwM6Xxsu49SPzGtWLWqx6CBajUrZDRCXptZBiNxZE-8g-x7bDLmlQmLwTzWPyaBsYEAabmPVOvv7cIv6kxr67cc_o")',
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Gallery;