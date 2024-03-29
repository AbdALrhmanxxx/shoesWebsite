import {products} from "./data.js";
let img = document.querySelector('.trans');
let container = document.querySelector('.container');
let renderHTML = "";
products.forEach((product) => {
  let html = `<div class="flex p-6 font-mono">
      <div
        class="flex-none w-48 mb-10 relative z-10 before:absolute before:top-1 before:left-1 before:w-full before:h-full before:bg-teal-400"
      >
        <img
          src="picture/products/${product.image}.png"
          alt=""
          class="absolute z-10 inset-0 w-full h-full object-cover rounded-lg"
          loading="lazy"
        />
      </div>
      <form class="flex-auto pl-6">
        <div
          class="relative flex flex-wrap items-baseline pb-6 before:bg-black before:absolute before:-top-6 before:bottom-0 before:-left-60 before:-right-6"
        >
          <h1
            class="relative w-full flex-none mb-2 text-2xl font-semibold text-white"
          >
            ${product.name}
          </h1>
          <div class="relative text-lg text-white">$${(
            product.priceCents / 100
          ).toFixed(2)}</div>
          <div class="relative uppercase text-teal-400 ml-3">In stock</div>
        </div>
        <div class="flex items-baseline my-6"></div>
        <div class="flex space-x-2 mb-4 text-sm font-medium">
          <div class="flex space-x-4">
            <button
              class="px-6 h-12 uppercase font-semibold tracking-wider border-2 border-black bg-teal-400 text-black"
              type="submit"
            >
              Buy now
            </button>
            <button
              class="px-6 h-12 uppercase font-semibold tracking-wider border border-slate-200 text-slate-900"
              type="button"
            >
              Add to bag
            </button>
          </div>
          <button
            class="flex-none flex items-center justify-center w-12 h-12 text-red-500"
            type="button"
            aria-label="Like"
          >
            <svg width="20" height="20" fill="currentColor" aria-hidden="true">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              />
            </svg>
          </button>
        </div>
        <p class="text-xs leading-6 text-slate-500">
          Free shipping on all continental US orders.
        </p>
      </form>
        </div>`;
  renderHTML += html;
});
document.querySelector(".product-continer").innerHTML = renderHTML;
function shoes(shoe, color) {
  img.src = shoe;
  container.style.background = color;
}