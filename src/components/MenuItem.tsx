import type { MenuItem } from "../types"

type MenuItemProps = {
    item: MenuItem
    addItem: (item: MenuItem) => void 
}

export default function MenuItem({item, addItem} : MenuItemProps) {
  return (
    <>
        <button onClick={() => addItem(item)} className="border-2 rounded-2xl border-y-sky-800 hover:bg-sky-700 hover:text-amber-50 hover:cursor-pointer w-full p-3 flex justify-between">
            <p>{item.name}</p>
            <p className="font-black">${item.price}</p>
        </button>
    </>
  )
}