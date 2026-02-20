import CartPage from '@/app/shopping/components/page'


export const metadata = {
    setTile: 'Contador',
    description: 'Esto es el contador'
}


export default function CounterPage() {
    

    return (
        <div className="flex flex-col items-center justify-center w-full h-full">
            <span>Productos en el carrito</span>
            
            <CartPage value={20} />
        </div>
    )
}
