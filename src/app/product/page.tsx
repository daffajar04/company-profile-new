import Image from "next/image"
export default function Product() {
    return (
<div className="bg-black">
  <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
    <h2 className="sr-only">Products</h2>

    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
      <a href="#" className="group">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
            <img src="Multistrada.png" alt="Multisrata V2." className="h-full w-full object-cover object-center group-hover:opacity-75" />
        </div>
        <h3 className="mt-4 text-sm text-white-700">Multistrada V2</h3>
        <p className="mt-1 text-lg font-medium text-white-900">$448</p>
      </a>
      <a href="#" className="group">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
            <img src="Hypermotard.png" alt="Hypermoatard 950" className="h-full w-full object-cover object-center group-hover:opacity-75" />
        </div>
        <h3 className="mt-4 text-sm text-white-700">Hypermoterd 950</h3>
        <p className="mt-1 text-lg font-medium text-white-900">$435</p>
      </a>
      <a href="#" className="group">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
            <img src="Panigale-V4-S.png" alt="Panigale V4." className="h-full w-full object-cover object-center group-hover:opacity-75" />
        </div>
        <h3 className="mt-4 text-sm text-white-700">Panigale V4</h3>
        <p className="mt-1 text-lg font-medium text-white-900">$489</p>
      </a>
      <a href="#" className="group">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
            <img src="MY24.png" alt="Streetfihter." className="h-full w-full object-cover object-center group-hover:opacity-75" />
        </div>
        <h3 className="mt-4 text-sm text-white-700">Streetfighter V2</h3>
        <p className="mt-1 text-lg font-medium text-white-900">$435</p>
      </a>
    </div>
  </div>
</div>
    )
}